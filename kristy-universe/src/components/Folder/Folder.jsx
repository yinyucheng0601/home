import React, { useId, useState } from 'react';
import './Folder.css';

const darkenColor = (hex, percent) => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }
  const num = parseInt(color.slice(0, 6), 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder = ({ color = '#5227FF', size = 1, items = [], className = '', gradient, onOpen, label }) => {
  const gradientId = 'folder-gradient-' + useId().replace(/:/g, '');
  // Color the union of both animated panels once, so their overlap has no seam.
  const gradientImage = gradient ? 'data:image/svg+xml,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="80" viewBox="0 0 100 80">' +
    '<defs><linearGradient id="base" x2="1" y2="1"><stop stop-color="' + gradient.from +
    '"/><stop offset="1" stop-color="' + gradient.to +
    '"/></linearGradient><radialGradient id="glow" cx="' + gradient.x + '" cy="' + gradient.y +
    '" r="85%"><stop stop-color="' + gradient.glow +
    '" stop-opacity="0.55"/><stop offset="1" stop-color="' + gradient.glow +
    '" stop-opacity="0"/></radialGradient></defs><path fill="url(#base)" d="M0 0h100v80H0z"/>' +
    '<path fill="url(#glow)" d="M0 0h100v80H0z"/></svg>'
  ) : null;
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const open = pinned || hovered;
  const [paperOffsets, setPaperOffsets] = useState(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));

  const folderBackColor = gradient ? color : darkenColor(color, 0.08);
  const paper1 = darkenColor('#ffffff', 0.1);
  const paper2 = darkenColor('#ffffff', 0.05);
  const paper3 = '#ffffff';

  const handleClick = () => {
    if (onOpen) {
      onOpen();
      return;
    }
    setPinned(prev => !prev);
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (e, index) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (e, index) => {
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3
  };

  const folderClassName = `folder ${open ? 'open' : ''}`.trim();
  const scaleStyle = { transform: `scale(${size})` };

  return (
    <div style={scaleStyle} className={className}>
      {gradient && <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
        <defs>
          {/* Union of the two skewed half-open panels, normalized to the
              blur layer's 140%-wide box. Blur once to avoid an overlap seam. */}
          <clipPath id={gradientId + '-clip'} clipPathUnits="objectBoundingBox">
            <path transform="matrix(.7142857 0 .091868 .6 .050989 .4)" d="M.05 0H.9Q1 0 1 .125V.875Q1 1 .9 1H.1Q0 1 0 .875V.0625Q0 0 .05 0Z"/>
            <path transform="matrix(.7142857 0 -.091868 .6 .234725 .4)" d="M.05 0H.9Q1 0 1 .125V.875Q1 1 .9 1H.1Q0 1 0 .875V.0625Q0 0 .05 0Z"/>
          </clipPath>
          <filter id={gradientId} x="-20%" y="-20%" width="140%" height="140%" primitiveUnits="objectBoundingBox" colorInterpolationFilters="sRGB">
            <feImage href={gradientImage} x="0" y="0" width="1" height="1" preserveAspectRatio="none" result="paint"/>
            {/* Grain and a translucent tint are applied to the united silhouette,
                never to individual panels (which would create an overlap seam). */}
            <feTurbulence type="fractalNoise" baseFrequency="180" numOctaves="3" seed="8" result="grain"/>
            <feColorMatrix in="grain" type="saturate" values="0"/>
            <feComponentTransfer result="softGrain"><feFuncA type="linear" slope="0.045"/></feComponentTransfer>
            <feBlend in="paint" in2="softGrain" mode="soft-light" result="surface"/>
            <feComponentTransfer in="surface" result="translucent"><feFuncA type="linear" slope="0.76"/></feComponentTransfer>
            <feComposite in="translucent" in2="SourceAlpha" operator="in" result="glass"/>
            <feMorphology in="SourceAlpha" operator="erode" radius="0.006" result="inset"/>
            <feComposite in="SourceAlpha" in2="inset" operator="out" result="rim"/>
            <feFlood floodColor="white" floodOpacity="0.65" result="rimLight"/>
            <feComposite in="rimLight" in2="rim" operator="in" result="edge"/>
            <feMerge><feMergeNode in="glass"/><feMergeNode in="edge"/></feMerge>
          </filter>
        </defs>
      </svg>}
      <div
        className={folderClassName}
        style={folderStyle}
        onPointerEnter={e => { if (e.pointerType === 'mouse') setHovered(true); }}
        onPointerLeave={() => {
          setHovered(false);
          setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
        }}
        onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setPinned(false); }}
        onClick={e => { e.stopPropagation(); handleClick(); }}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();

            handleClick();
          }
        }}
        tabIndex={0}
        role="button"
        aria-expanded={onOpen ? undefined : open}
        aria-label={label || (open ? 'Close folder' : 'Open folder')}
      >
        <div className="folder__back">
          {papers.map((item, i) => (
            <div
              key={i}
              className={`paper paper-${i + 1}`}
              onMouseMove={e => handlePaperMouseMove(e, i)}
              onMouseLeave={e => handlePaperMouseLeave(e, i)}
              style={
                open
                  ? {
                      '--magnet-x': `${paperOffsets[i]?.x || 0}px`,
                      '--magnet-y': `${paperOffsets[i]?.y || 0}px`
                    }
                  : {}
              }
            >
              {item}
            </div>
          ))}
          <svg className="folder__back-shape" viewBox="0 0 100 90" aria-hidden="true">
            <defs>
              <linearGradient id={gradientId + '-back'} x2="1" y2="1">
                <stop stopColor={folderBackColor}/>
                <stop offset="1" stopColor={folderBackColor}/>
              </linearGradient>
            </defs>
            <path d="M0 15V5Q0 0 5 0H25Q30 0 30 5V10H90Q100 10 100 20V80Q100 90 90 90H10Q0 90 0 80Z"
              fill={'url(#' + gradientId + '-back)'} stroke="#ffffff55" strokeWidth="0.6"/>
          </svg>
          {gradient ? <>
          <div className="folder__backdrop" aria-hidden="true" style={{ clipPath: 'url(#' + gradientId + '-clip)' }}/>
          <div className="folder__cover" style={{ filter: 'url(#' + gradientId + ')' }}>
            <div className="folder__front"></div>
            <div className="folder__front right"></div>
          </div></> : <>
            <div className="folder__front"></div>
            <div className="folder__front right"></div>
          </>}
        </div>
      </div>
    </div>
  );
};

export default Folder;
