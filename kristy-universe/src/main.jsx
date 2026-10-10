import React,{useState} from 'react';import{createRoot}from'react-dom/client';import Folder from './components/Folder/Folder';import TechText from './components/TechText/TechText';import './style.css';
function Icon({kind='arrow',className=''}){
  const paths={arrow:'M5 19 19 5 M5 5h14v14',down:'M19 5 5 19 M5 5v14h14',curve:'M3 4c0 11 7 13 17 13 M15 12l5 5-5 5',spark:'M12 2v20 M2 12h20 M5 5l14 14 M5 19 19 5',star:'M12 2 Q13 11 22 12 Q13 13 12 22 Q11 13 2 12 Q11 11 12 2Z',heart:'M12 20 4 12C-2 4 8 0 12 7C16 0 26 4 20 12Z',close:'M5 5l14 14 M5 19 19 5'};
  return <svg className={'ui-icon '+className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{kind==='dot'?<circle cx="12" cy="12" r="6" fill="currentColor" stroke="none"/>:<path d={paths[kind]}/>}</svg>;
}
const data=[['About','indigo','Get to know me\n(a little more)','I’m Kristy, a product designer working with complex technologies. I design interfaces that help people understand systems and find their way through them.'],['Projects','green','Selected work.\nConsidered details.','Selected work in AI infrastructure, developer tools, and technical visualization — giving complex systems a clear, usable form.'],['Playground','blue','Experiments, thoughts,\nand works in progress','Interactive demos, visual studies, and small experiments — a place to think through making.'],['Contact','cyan','Say hi! Collaboration\nis always a good idea.','Working on something complex? I’d love to help make it clear, useful, and thoughtfully designed.']];
// Approved palette. reserveAqua is intentionally not assigned to any data entry.
const folderColors={indigo:'#FFB85F',green:'#3555C9',blue:'#AF4EDD',cyan:'#D9D9D9',reserveAqua:'#80CBEA'};
const folderGradients={
  indigo:{from:'#FFD65E',to:'#FFD65E',glow:'#FFF7DF',x:'12%',y:'0%'},
  green:{from:'#7C86FA',to:'#7C86FA',glow:'#E2E6FF',x:'12%',y:'0%'},
  blue:{from:'#C56BEC',to:'#C56BEC',glow:'#F4DFFF',x:'12%',y:'0%'},
  cyan:{from:'#EEECEC',to:'#EEECEC',glow:'#FFFFFF',x:'12%',y:'0%'},
  reserveAqua:{from:'#A3E0F2',to:'#A3E0F2',glow:'#ECFAFF',x:'12%',y:'0%'}
};
function PortfolioFolder({name,color,index,click}){
  const items=['Discover','Explore','Open '+name].map((label,i)=>
    <button key={label} className="folder-card" onClick={e=>{e.stopPropagation();click()}} onKeyDown={e=>e.stopPropagation()}>
      <span><Icon kind={['spark','star','arrow'][i]}/></span><strong>{label}</strong>
    </button>
  );
  return <div className="portfolio-folder" role="group" aria-label={name} onClick={click}>
    <Folder color={folderColors[color]} gradient={folderGradients[color]} items={items} className="official-folder" onOpen={click} label={'Open '+name}/>
    <div className="folder-caption"><small>0{index+1}</small><strong>{name}</strong><span><Icon kind="arrow"/></span></div>
  </div>;
}
function AboutSheet(){return <>
  <div className="about-heading">
    <p className="about-hello">Hello, I’m</p>
    <h2>Kristy<span className="about-spark" aria-hidden="true"><Icon kind="spark"/></span></h2>
    <p className="about-role">Product & full-stack designer</p>

  </div>
  <div className="about-copy">
    <p>I’m a product and full-stack designer at Huawei’s 2012 Lab, working around AI and the tools people use to build with it.</p>
    <p>My path has wandered from architecture to digital experiences, from a small team in New York to the worlds of operating systems and AI. Along the way, I’ve stayed curious about how things fit together — and how they feel to the people using them.</p>
    <p>I like making things to understand them: a sketch, a conversation, a prototype you can play with. Often, it’s a small detail that helps an idea find its shape.</p>
    <p>I’m drawn to quiet elegance, a little unexpected delight, and things that feel simple because someone has cared deeply about them. That’s the feeling I hope to bring to my work.</p>
  </div>
  <div className="about-signoff"><span>a curious mind, an eye for detail</span><svg viewBox="0 0 54 34" aria-hidden="true"><path d="M3 22 C13 3 21 5 19 16 C16 30 8 29 12 20 C23 3 31 6 28 17 C25 28 20 29 25 20 Q37 5 39 18 Q41 25 51 12"/></svg></div>
  <small className="about-updated">UPDATED OCTOBER 2026</small>
</>}
function App(){const[active,setActive]=useState(-1),[menu,setMenu]=useState(false);return <><div className="launch-screen" aria-label="YIN intro"><TechText text="YIN" fontFamily="'Lalezar', sans-serif" fontWeight={400} fontSize={180} letterSpacing={0.12} color="#18181b" accentColor="#FFD15D" reveal="letter" specks={22} selection labels draggable={false} sweep speed={3.3}/></div><header><a className="brand" href="#home" aria-label="YIN — Home"><TechText className="brand-logo" text="YIN" fontFamily="'Lalezar', sans-serif" fontWeight={400} fontSize={46} letterSpacing={0.12} color="#18181b" accentColor="#FFD15D" reveal="letter" specks={8} selection labels={false} draggable={false} sweep={false} idleLetter={0}/><small>PRODUCT & FULL-STACK DESIGNER<br/>SIMPLICITY, WITH PERSONALITY</small></a><button className="menu" onClick={()=>setMenu(!menu)}><Icon kind="dot"/> Menu</button></header>{menu&&<nav>{data.map((d,i)=><button key={d[0]} onClick={()=>{setActive(i);setMenu(false)}}>{d[0]} <Icon kind="arrow"/></button>)}</nav>}<main id="home"><div className="orbits" aria-hidden="true"><div className="ring r1"/><div className="ring r2"/><div className="ring r3"/></div><div className="intro"><div className="avatar"><Icon kind="spark"/></div><p className="hello">Hi, I'm Kristy.</p><h1>Thoughtful by nature.<br/><em>Simple by design.</em></h1><p className="sub">A product designer with an eye for quiet elegance, <br/>and a curiosity for what technology can make possible.</p></div>{data.map((d,i)=><div className={'spot s'+i} key={i}><PortfolioFolder name={d[0]} color={d[1]} index={i} click={()=>setActive(i)}/></div>)}<span className="note n0">Get to know me<br/>(a little more)　<Icon kind="curve"/></span><span className="note n1">Selected work.<br/>Considered details.　<Icon kind="down"/></span><span className="note n2">Experiments, thoughts,<br/>and works in progress　<Icon kind="arrow"/></span><span className="note n3">Say hi! Collaboration<br/>is always a good idea.　<Icon kind="down"/></span><span className="star st1"><Icon kind="spark"/></span><span className="star st2"><Icon kind="star"/></span></main><footer><span>© 2026 Kristy. Made with curiosity <Icon kind="heart"/></span> <a href="mailto:yinyucheng@outlook.com">SAY HELLO <Icon kind="arrow"/></a></footer>{active>=0&&<div className="shade" onClick={()=>setActive(-1)}><article className={active===0 ? 'about-sheet' : undefined} role="dialog" aria-modal="true" aria-label={active===0 ? 'About me' : data[active][0]} onClick={e=>e.stopPropagation()}><button className="close" aria-label="Close" onClick={()=>setActive(-1)}><Icon kind="close"/></button>{active===0 ? <AboutSheet/> : <><small>KRISTY'S LITTLE UNIVERSE / 0{active+1}</small><h2>{data[active][0]} <Icon kind="spark"/></h2><p>{data[active][3]}</p>{active===3&&<div className="contact-links"><a href="https://www.linkedin.com/in/yinyucheng61/" target="_blank" rel="noopener noreferrer">LinkedIn <Icon kind="arrow"/></a><a href="mailto:yinyucheng@outlook.com">yinyucheng@outlook.com <Icon kind="arrow"/></a></div>}<div className="hand">Made with care and curiosity.</div></>}</article></div>}</>};createRoot(document.getElementById('root')).render(<App/>);
