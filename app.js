const glow=document.querySelector('.cursor-glow');let mx=innerWidth/2,my=innerHeight/2,gx=mx,gy=my;if(glow){addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY});const tick=()=>{gx+=(mx-gx)*.12;gy+=(my-gy)*.12;glow.style.left=gx+'px';glow.style.top=gy+'px';requestAnimationFrame(tick)};tick()}
const magnetic=document.querySelectorAll('.magnetic');magnetic.forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;el.style.transform=`translate(${x*.12}px,${y*.12}px)`});el.addEventListener('pointerleave',()=>el.style.transform='')});
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.15});document.querySelectorAll('.section h2,.steps article,.feature,.price-card,.demo-shell,.disclaimer').forEach(el=>{el.classList.add('reveal');obs.observe(el)});
const qs=[['My employer hasn\'t paid my salary for two months. What can I do?','There may be several routes depending on your employment terms, the applicable labour framework, and the facts of your case. Start by preserving payslips, employment records, and written communication, then identify the appropriate authority or legal remedy.'],['My landlord refuses to return my security deposit.','Your options can depend on the rental agreement, the reason given for withholding the deposit, and applicable local law. Keep the agreement, payment proof, inspection records, and messages; a written demand can be a sensible first step.'],['How do I understand a legal notice I received?','Start by identifying who issued it, what event or obligation it refers to, any deadline, and what response it asks for. Preserve the original notice and attachments. If the consequences are significant, have the notice reviewed by a qualified advocate before responding.']];let qi=0;const qt=document.querySelector('#queryText'),at=document.querySelector('#answerText'),btn=document.querySelector('#nextQuery');if(btn)btn.onclick=()=>{qi=(qi+1)%qs.length;qt.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:350,easing:'ease-out'});at.animate([{opacity:0},{opacity:1}],{duration:450});qt.textContent=qs[qi][0];at.textContent=qs[qi][1]};
const video=document.querySelector('.hero-video');if(video){video.playbackRate=.65;document.addEventListener('visibilitychange',()=>{if(document.hidden)video.pause();else video.play().catch(()=>{})})}

// Mobile menu toggle
const menuBtn = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
const navCta = document.querySelector('.nav-cta');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    if (navCta) navCta.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuBtn.textContent = open ? '✕' : '☰';
  });
}
