function f(){return window.innerWidth<=900}var _=!1,N;function D(){if(!_){_=!0,clearInterval(N);let o=1,a=30,e=1e3;N=setInterval(function(){e-=100,e<=0&&(e=1e3,a--,a<=0&&(o--,o===0&&a===0?(o=1,a=30,e=1e3,D()):a=59));let t=`00:${String(o).padStart(2,"0")}:${String(a).padStart(2,"0")}:${String(Math.floor(e/100)).padStart(2,"0")}`;U(t)},100)}}function U(o){let a=document.getElementById("countdown-timer");a&&(a.innerText=o)}gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);var J=new Lenis;function R(o){J.raf(o),requestAnimationFrame(R)}requestAnimationFrame(R);window.onload=()=>{let o=document.getElementById("init");o.style.animation="fadeOutAnimation 1s",setTimeout(()=>{o.style.display="none"},1e3)};if(f()){Swal.fire({title:"\xA1HOLA!",text:"Para una mejor experiencia, te invitamos a visitar nuestra web desde una computadora",showConfirmButton:!0,showCancelButton:!1,confirmButtonColor:"#1D3E4E",confirmButtonText:"CONTINUAR",position:"bottom",customClass:"alert"});let o=setTimeout(()=>{window.location.href="/error"},2e4);window.addEventListener("load",()=>{clearTimeout(o)})}else{let o=setTimeout(()=>{window.location.href="/error"},1e4);window.addEventListener("load",()=>{clearTimeout(o)})}var ao=document.querySelector("html"),l=document.getElementById("body"),T=document.getElementById("collapse"),z=document.getElementById("menu"),$=document.getElementsByClassName("nav-item"),A=document.getElementsByClassName("separator"),h=document.getElementById("buttonIcon"),i=document.querySelectorAll(".social-img"),L=document.querySelector(".wrapper"),p=document.querySelectorAll(".expand"),u=document.querySelectorAll(".btn-img"),M=document.getElementById("txt-container-2"),O=document.getElementById("desliza"),V=document.querySelector("#subir #subirbtn");l.addEventListener("mousemove",o=>{if(f())return;let a=document.createElement("bubbles"),e=o.pageX,t=o.pageY;a.style.left=e+"px",a.style.top=t+"px",a.style.width="25px",a.style.height="25px",document.body.className.match("open")?(a.style.background="rgb(29, 62, 78)",a.style.boxShadow="10px 10px 30px rgb(29, 62, 78), -10px -10px 30px rgb(29, 62, 78)"):(a.style.background="#D1D821",a.style.boxShadow="10px 10px 30px #D1D821, -10px -10px 30px #D1D821"),document.body.appendChild(a),setTimeout(function(){a.remove()},500)});var s=gsap.timeline({paused:!0});f()?(s.fromTo(z,{y:1e3,opacity:0,background:"transparent",display:"none",ease:"power2.inOut"},{y:0,duration:.5,opacity:1,background:"rgb(203, 219, 67)",display:"block",ease:"power2.inOut"}),s.fromTo(A,{y:1e3},{y:0,transformOrigin:"100% 50%",duration:.5})):(s.fromTo(z,{x:1e3,opacity:0,background:"transparent",display:"none",ease:"power2.inOut"},{x:0,duration:.5,opacity:1,background:"rgb(203, 219, 67)",display:"block",ease:"power2.inOut"}),s.fromTo(A,{x:1e3},{x:0,transformOrigin:"100% 50%",duration:.5}));s.fromTo($,{opacity:0,y:50},{opacity:1,y:0,duration:.5});var y=!1,ro=document.getElementById("init"),io=document.getElementById("scrollea"),W=document.getElementById("video-camara"),m=document.getElementById("middleVidCtn"),so=document.getElementById("tiempoVidCtn"),lo=document.getElementById("progressbar-ctn"),no=document.querySelector("nav"),co=document.getElementById("intro"),po=document.querySelectorAll(".text-ctn-1"),I=document.querySelectorAll("section.portfolio fieldset"),g=document.querySelectorAll("section.portfolio li h2"),yo=document.querySelectorAll("section.portfolio li h2:hover"),C=document.querySelectorAll(".desc-ctn"),S=document.querySelectorAll("hr.ctn-line"),E=document.querySelectorAll(".preview-video"),k=document.querySelector(".logo-box"),B=document.querySelector(".vid-overlay"),q=document.querySelector("#tiempoVidCtn"),uo=document.querySelector("section#video-tiempo"),mo=document.querySelectorAll(".child .text-ctn"),c=document.querySelectorAll(".child .text-ctn ol"),x=[];x.push(document.querySelector("#eugenie h2"));x.push(document.querySelector("#delsud h2"));x.push(document.querySelector("#flexy h2"));var v=document.getElementById("modal"),j=document.getElementById("modalContent"),go=document.getElementById("modalVideo"),P=document.getElementById("closeModal"),X=document.getElementById("middleVidCtn"),fo=document.getElementById("portfolio"),Y=document.getElementById("bg-video"),H=["src/assets/casos/eugenie-comp.webm","src/assets/casos/delsud-comp.webm","src/assets/casos/flexy-comp.webm"],d=null;f()?(X.src="src/assets/calidad-vertical.webm",O.innerHTML=""):(O.innerHTML=`<path class="st0"
  d="M89.8,306c1.8-0.8,3.2-1.9,4.2-3.4c1-1.5,1.5-3.3,1.5-5.4c0-2.1-0.5-3.9-1.5-5.4c-1-1.5-2.4-2.7-4.2-3.5 c-1.8-0.8-4-1.2-6.5-1.2H71.2v28h6.5v-7.8h5.6c0.1,0,0.2,0,0.3,0L89,315h7L89.8,306C89.7,306,89.7,306,89.8,306z M87.4,293.6 c1,0.9,1.5,2.1,1.5,3.6c0,1.5-0.5,2.7-1.5,3.6c-1,0.9-2.5,1.3-4.5,1.3h-5.3v-9.8h5.3C84.9,292.3,86.4,292.7,87.4,293.6z" />
<path class="st0"
  d="M34.2,300.8c-1-0.6-2-1.1-3.2-1.4c-1.1-0.3-2.3-0.7-3.5-0.9c-1.1-0.3-2.2-0.5-3.2-0.8c-1-0.3-1.7-0.6-2.3-1 c-0.6-0.5-0.9-1-0.9-1.8c0-0.6,0.2-1.1,0.5-1.6c0.3-0.5,0.9-0.9,1.7-1.2c0.8-0.3,1.8-0.4,3.1-0.4s2.5,0.2,3.8,0.6 c1.3,0.3,2.6,0.9,3.9,1.6l2-4.9c-1.3-0.8-2.8-1.4-4.5-1.8c-1.7-0.4-3.4-0.6-5.2-0.6c-2.6,0-4.8,0.4-6.6,1.2c-1.7,0.8-3,1.8-3.9,3.2 c-0.9,1.3-1.3,2.8-1.3,4.4c0,1.5,0.3,2.7,0.9,3.7c0.6,1,1.4,1.7,2.4,2.3c1,0.6,2,1.1,3.2,1.4c1.2,0.4,2.3,0.7,3.5,1 c1.2,0.2,2.2,0.5,3.2,0.8c1,0.3,1.7,0.6,2.3,1.1c0.6,0.4,0.9,1,0.9,1.8c0,0.6-0.2,1.1-0.6,1.6c-0.4,0.5-1,0.8-1.8,1.1 c-0.8,0.2-1.8,0.4-3.1,0.4c-1.7,0-3.3-0.3-5-0.8c-1.6-0.6-3-1.3-4.2-2.1l-2.2,4.9c1.3,1,2.9,1.7,5,2.4c2.1,0.6,4.2,0.9,6.4,0.9 c2.7,0,4.9-0.4,6.6-1.2c1.8-0.8,3.1-1.9,4-3.2s1.3-2.7,1.3-4.3c0-1.5-0.3-2.7-0.9-3.6C35.9,302.2,35.1,301.4,34.2,300.8z" />
<polygon class="st0" points="229.9,279 223.2,279 217.8,284.7 222.7,284.7 	" />
<path class="st0"
  d="M49.1,294.5c0.8-0.8,1.7-1.4,2.8-1.8c1.1-0.4,2.3-0.6,3.6-0.6c1.4,0,2.7,0.3,3.8,0.8c1.2,0.5,2.2,1.3,3.2,2.4 l4.2-3.8c-1.3-1.6-3-2.9-5-3.7c-1.9-0.9-4.1-1.3-6.6-1.3c-2.2,0-4.2,0.4-6,1.1c-1.8,0.7-3.5,1.7-4.8,3c-1.4,1.3-2.4,2.8-3.2,4.6 c-0.7,1.8-1.1,3.7-1.1,5.8s0.4,4,1.1,5.8c0.8,1.8,1.8,3.3,3.2,4.6s3,2.3,4.8,3c1.9,0.7,3.9,1,6,1c2.5,0,4.7-0.4,6.6-1.3 c2-0.9,3.6-2.1,5-3.7l-4.2-3.8c-1,1.1-2,2-3.2,2.5c-1.2,0.5-2.5,0.8-3.8,0.8c-1.3,0-2.5-0.2-3.6-0.6c-1.1-0.4-2-1-2.8-1.8 c-0.8-0.8-1.4-1.7-1.9-2.8c-0.4-1.1-0.6-2.3-0.6-3.6s0.2-2.5,0.6-3.6C47.7,296.3,48.3,295.3,49.1,294.5z" />
<polygon class="st0" points="189,303.3 202,303.3 202,298.3 189,298.3 189,292.2 203.8,292.2 203.8,287 182.6,287 182.6,315 204.3,315 204.3,309.8 189,309.8 	" />
<path class="st0"
  d="M125.1,290.6c-1.4-1.3-3-2.3-4.8-3c-1.8-0.7-3.9-1.1-6.1-1.1c-2.2,0-4.2,0.4-6.1,1.1c-1.9,0.7-3.5,1.7-4.9,3 c-1.4,1.3-2.5,2.8-3.2,4.6c-0.7,1.8-1.1,3.7-1.1,5.8c0,2.1,0.4,4,1.1,5.8c0.8,1.8,1.8,3.3,3.2,4.6c1.4,1.3,3,2.3,4.9,3 c1.9,0.7,3.9,1.1,6.2,1.1c2.2,0,4.2-0.4,6-1.1c1.9-0.7,3.5-1.7,4.8-3c1.4-1.3,2.5-2.8,3.2-4.6c0.8-1.8,1.2-3.7,1.2-5.8 c0-2.1-0.4-4-1.2-5.8C127.5,293.5,126.4,291.9,125.1,290.6z M122.2,304.6c-0.4,1.1-1,2-1.8,2.8s-1.7,1.4-2.8,1.8 c-1,0.4-2.2,0.6-3.4,0.6c-1.3,0-2.4-0.2-3.5-0.6c-1.1-0.4-2-1-2.8-1.8c-0.8-0.8-1.4-1.7-1.8-2.8c-0.4-1.1-0.6-2.3-0.6-3.6 c0-1.3,0.2-2.5,0.6-3.6c0.5-1.1,1.1-2,1.9-2.8c0.8-0.8,1.7-1.4,2.8-1.8c1.1-0.4,2.2-0.6,3.5-0.6c1.3,0,2.4,0.2,3.5,0.6 c1.1,0.4,2,1,2.8,1.8c0.8,0.8,1.4,1.7,1.8,2.8c0.5,1.1,0.7,2.3,0.7,3.6S122.7,303.5,122.2,304.6z" />
<path class="st0"
  d="M230.4,315h6.8l-12.5-28h-6.4l-12.5,28h6.6l2.5-6h13L230.4,315z M216.9,304.1l4.5-10.7l4.4,10.7H216.9z" />
<polygon class="st0" points="140.8,287 134.3,287 134.3,315 154.8,315 154.8,309.7 140.8,309.7 	" />
<polygon class="st0" points="164.9,287 158.5,287 158.5,315 179,315 179,309.7 164.9,309.7 	" />`,X.src="src/assets/calidad.webm");f()?q.src="src/assets/Video-tiempo_v.webm":q.src="src/assets/video-tiempo.webm";var b=document.querySelectorAll(".child"),F=document.querySelectorAll(".child .title-ctn");if(f()){let o=!1;p.forEach((a,e)=>{a.addEventListener("click",()=>{if(o=!o,o){u[e].src="src/assets/contract.webp";for(let t=0;t<c.length;t++)e===0?(c[0].classList.add("reveal"),c[1].classList.remove("reveal"),c[2].classList.remove("reveal"),c[3].classList.remove("reveal"),p[1].disabled=!0,u[1].style.opacity=.5,p[2].disabled=!0,u[2].style.opacity=.5):e===1?(c[1].classList.add("reveal"),c[2].classList.add("reveal"),c[0].classList.remove("reveal"),c[3].classList.remove("reveal"),gsap.to(b[2],.3,{y:100}),p[0].disabled=!0,p[2].disabled=!0,u[0].style.opacity=.5,u[2].style.opacity=.5):e===2&&(c[3].classList.add("reveal"),c[0].classList.remove("reveal"),c[1].classList.remove("reveal"),c[2].classList.remove("reveal"),p[0].disabled=!0,p[1].disabled=!0,u[0].style.opacity=.5,u[1].style.opacity=.5);gsap.to(F[e],.3,{y:-160}),e===1?gsap.to(p[1],.3,{y:350}):gsap.to(p[e],.3,{y:130})}else{u[e].src="src/assets/expand.webp";for(let t=0;t<c.length;t++)e===0?(c[0].classList.remove("reveal"),p[1].disabled=!1,p[2].disabled=!1,u[1].style.opacity=1,u[2].style.opacity=1):e===1?(c[1].classList.remove("reveal"),c[2].classList.remove("reveal"),gsap.to(b[2],.3,{y:0}),p[0].disabled=!1,p[2].disabled=!1,u[0].style.opacity=1,u[2].style.opacity=1):e===2&&(c[3].classList.remove("reveal"),p[0].disabled=!1,p[1].disabled=!1,u[0].style.opacity=1,u[1].style.opacity=1);gsap.to(F[e],.5,{y:0}),gsap.to(p[e],.5,{y:0}),gsap.to(p[1],.3,{y:0})}})})}else{let o=function(e,t){gsap.to(e.currentTarget,.7,{width:"2000px"}),e.currentTarget.parentNode.childNodes.forEach(r=>{r!==e.currentTarget&&r.nodeType===1&&gsap.to(r,.7,{width:"1000px"})}),(t===1||t===2)&&gsap.to(b[0],.7,{marginLeft:"-100px"}),t===1&&(gsap.to(b[1],.7,{width:"3000px"}),gsap.to(b[0],.7,{marginLeft:"-200px"}))},a=function(e,t){let r=getComputedStyle(e.currentTarget).width;gsap.to(e.currentTarget,.7,{width:r}),e.currentTarget.parentNode.childNodes.forEach(n=>{n!==e.currentTarget&&n.nodeType===1&&gsap.to(n,.7,{width:r})}),(t===1||t===2)&&gsap.to(b[0],.7,{marginLeft:"0"}),t===1&&gsap.to(b[1],.7,{width:r})};K=o,Q=a,b.forEach((e,t)=>{e.addEventListener("mouseover",r=>o(r,t)),e.addEventListener("mouseout",r=>a(r,t))})}var K,Q;f()?(Y.src="",M.innerHTML=`
  <p id="p1">Y DESDE AH\xCD NACEN</p>
  <p id="p2">NUESTROS V\xCDNCULOS</p>
  <div id="mobileBrandsCtn">
  <img src="/src/assets/logo-eugenie.webp" alt="logo de Eugenie" class="mobileBrands">
  <img src="/src/assets/logo-flexy.webp" alt="logo de Flexy" class="mobileBrands">
  <img src="src/assets/marcas/Marcas_Logos_La_Caja.webp" alt="logo de La Caja" class="mobileBrands">
  <img src="src/assets/marcas/Marcas_Logo_Desarrollos.webp" alt="logo de Delsud" class="mobileBrands">
  <img src="src/assets/marcas/Marcas_Logos_PBA.webp" alt="logo de PBA" class="mobileBrands">
  <img src="src/assets/marcas/Marcas_Logos_NBA.webp" alt="logo de Jr. NBA" class="mobileBrands">
  <img src="src/assets/marcas/Marcas_Logos_Yacoub.webp" alt="logo de Jr. NBA" class="mobileBrands">
  <img src="src/assets/marcas/Marcas_Logo_FCE.webp" alt="logo de Jr. NBA" class="mobileBrands">
  <img src="src/assets/marcas/Marcas_Logos_Sancor.webp" alt="logo de Jr. NBA" class="mobileBrands">
</div>
  `):(Y.src="src/assets/fondo-verde.webm",M.innerHTML=`
  <p id="p1">Y DESDE AH\xCD NACEN</p>
  <p id="p2">NUESTROS V\xCDNCULOS</p>
  <div class="carousel-container" id="carousel-container">
    <div class="carousel">
      <figure id="carouselFig">
        <div class="card-ctn">
          <img src="src/assets/marcas/Marcas_Logo_Desarrollos.webp" alt="" />
          <video autoplay muted loop>
            <source src="src/assets/fondo_tarjetas_verde.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="card-ctn">
          <img src="src/assets/marcas/Marcas_Logo_FCE.webp" alt="" />
          <video autoplay muted loop>
            <source src="src/assets/fondo_tarjetas_azul.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="card-ctn">
          <img src="src/assets/marcas/Marcas_Logos_La_Caja.webp" alt="" />
          <video autoplay muted loop>
            <source src="src/assets/fondo_tarjetas_verde.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="card-ctn">
          <img src="src/assets/marcas/Marcas_Logos_NBA.webp" alt="" />
          <video autoplay muted loop>
            <source src="src/assets/fondo_tarjetas_azul.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="card-ctn">
          <img src="src/assets/marcas/Marcas_Logos_PBA.webp" alt="" />
          <video autoplay muted loop>
            <source src="src/assets/fondo_tarjetas_verde.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="card-ctn">
          <img src="src/assets/marcas/Marcas_Logos_Sancor.webp" alt="" />
          <video autoplay muted loop>
            <source src="src/assets/fondo_tarjetas_azul.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="card-ctn">
          <img src="src/assets/marcas/Marcas_Logos_Yacoub.webp" alt="" />
          <video autoplay muted loop>
            <source src="src/assets/fondo_tarjetas_verde.mp4" type="video/mp4" />
          </video>
        </div>
      </figure>
    </div>
  </div>
  `);if(f()){let o=function(e){I.forEach((t,r)=>{r!==e&&(t.disabled=!0,g[r].style.zIndex=-1,a(r))}),g[e].style.zIndex=10,gsap.to(S[e],.5,{margin:"20 0 10 0"}),gsap.to(C[e],.3,{y:0,opacity:1}),gsap.to(g[e],.3,{color:"rgb(203, 219, 67)"}),gsap.to(g[2],.7,{height:70}),gsap.to(g[1],.7,{height:120}),gsap.to(E[e],.4,{opacity:1}),gsap.to(B,.4,{opacity:.4}),gsap.to(k,.4,{opacity:0})},a=function(e){gsap.to(S[e],.5,{margin:"-12 0"}),gsap.to(C[e],.3,{y:-100,opacity:0}),gsap.to(g[e],.3,{color:"transparent",height:"auto"}),gsap.to(E[e],.4,{opacity:0}),gsap.to(B,.4,{opacity:1}),gsap.to(k,.4,{opacity:.4})};Z=o,oo=a,I.forEach((e,t)=>{e.addEventListener("click",r=>{e.disabled=!0,r.stopPropagation(),o(t)})}),document.addEventListener("click",e=>{let t=Array.from(I);t.some(r=>r.contains(e.target))||t.forEach((r,n)=>{r.disabled=!0,a(n),g[n].style.zIndex=-1})})}else{let o=function(e,t){gsap.to(S[t],.5,{margin:"20 0 10 0"}),gsap.to(C[t],.3,{y:0,opacity:1}),gsap.to(g[t],.3,{color:"rgb(203, 219, 67)",height:100}),gsap.to(g[1],.7,{height:190}),gsap.to(E[t],.4,{opacity:1}),gsap.to(B,.4,{opacity:.4}),gsap.to(k,.4,{opacity:0})},a=function(e,t){gsap.to(S[t],.5,{margin:"-12 0"}),gsap.to(C[t],.3,{y:-100,opacity:0}),gsap.to(g[t],.3,{color:"transparent",height:"auto"}),gsap.to(E[t],.4,{opacity:0}),gsap.to(B,.4,{opacity:1}),gsap.to(k,.4,{opacity:.4})};to=o,eo=a,g.forEach((e,t)=>{e.addEventListener("mouseover",r=>o(r,t)),e.addEventListener("mouseout",r=>a(r,t))})}var Z,oo,to,eo,G=new Array(380).fill().map((o,a)=>`src/assets/camara-frames/introframes(${(a+1).toString()}).webp`);G.forEach(o=>{let a=new Image;a.src=o,a.class="camara",W.appendChild(a)});if(f()){let o=gsap.timeline({scrollTrigger:{trigger:"main.wrapper",start:"top top",end:"bottom+=2000% bottom",scrub:!0,pin:!0,inertia:!0}});T.addEventListener("click",()=>{s.isActive()&&s.reversed()||(y=!y,h.src=y?"src/assets/x-dark.webp":"src/assets/Menu.webp",T.style.transform=y?"rotate(90deg)":"rotate(0deg)",l.className.match("close")?(l.className="open",i[0].src="src/assets/mail-dark.webp",i[1].src="src/assets/whatsapp-dark.webp",i[2].src="src/assets/ig-dark.webp",i[3].src="src/assets/Linkedin-dark.webp"):l.className.includes("open")&&(l.className="close",i[0].src="src/assets/mail.webp",i[1].src="src/assets/wsp.webp",i[2].src="src/assets/ig.webp",i[3].src="src/assets/Linkedin.webp"),s.totalProgress()===0?s.play():s.totalProgress()>0&&s.reverse())}),gsap.utils.toArray(".nav-link").forEach(t=>{t.addEventListener("click",r=>{r.preventDefault(),t.innerText.toLowerCase()==="inicio"?gsap.to(window,{scrollTo:o.scrollTrigger.labelToScroll("intro"),duration:0}):t.innerText.toLowerCase()==="portfolio"?gsap.to(window,{scrollTo:o.scrollTrigger.labelToScroll("portfolio"),duration:2}):t.innerText.toLowerCase()==="servicios"?gsap.to(window,{scrollTo:o.scrollTrigger.labelToScroll("servicios"),duration:2}):t.innerText.toLowerCase()==="clientes"&&gsap.to(window,{scrollTo:o.scrollTrigger.labelToScroll("clientes"),duration:2}),y=!y,h.src=y?"src/assets/x-dark.webp":"src/assets/Menu.webp",T.style.transform=y?"rotate(90deg)":"rotate(0deg)",l.className.match("close")?(l.className="open",i[0].src="src/assets/mail-dark.webp",i[1].src="src/assets/whatsapp-dark.webp",i[2].src="src/assets/ig-dark.webp",i[3].src="src/assets/Linkedin-dark.webp"):l.className.includes("open")&&(l.className="close",i[0].src="src/assets/mail.webp",i[1].src="src/assets/wsp.webp",i[2].src="src/assets/ig.webp",i[3].src="src/assets/Linkedin.webp"),s.paused()||s.totalProgress()===0?s.play():s&&s.reverse()})}),x.forEach((t,r)=>t.addEventListener("click",()=>{d&&d.parentNode&&d.parentNode.removeChild(d);let n=document.createElement("video");n.id="modalVideo";let w=document.createElement("source");w.src=H[r],n.controls=!0,n.appendChild(w),j.appendChild(n),v.classList.remove("hidden"),v.classList.add("shown"),n.play(),d=n,o.seek("portfolio"),l.style.position="fixed",gsap.to(window,{scrollTo:o.scrollTrigger.labelToScroll("portfolio")})})),P.addEventListener("click",()=>{d&&setTimeout(()=>{d.pause(),d.parentNode.removeChild(d),d=null,v.classList.remove("shown"),v.classList.add("hidden")},500),L.style.overflow="",L.style.top="",o.seek("portfolio"),l.style.position="absolute",gsap.to(window,{scrollTo:o.scrollTrigger.labelToScroll("portfolio"),duration:0})}),o.fromTo("#scrollea",{display:"none"},{display:"flex"}).addLabel("intro"),o.fromTo("#scrollea",{opacity:1,duration:2,x:0},{opacity:0,duration:2,x:-100}),o.fromTo("#scrollea",{display:"flex"},{display:"none"}),o.fromTo("#video",{display:"none"},{display:"flex"}),o.fromTo("#video-camara",{opacity:0,duration:5},{opacity:1,duration:5});let e=gsap.utils.toArray("#video-camara img");e.forEach((t,r)=>{o.fromTo(t,{display:"none"},{display:"block",stagger:.1,duration:.2}),r<e.length-1&&o.set(t,{display:"none"})}),o.fromTo("#texto",{transform:"scale(0)",opacity:0,duration:10},{transform:"scale(1)",opacity:1,duration:10,delay:-25}),o.to("#texto",{y:-800,duration:10,delay:-10}),o.to("#intro",{opacity:0,duration:20,delay:-10}),o.fromTo("#intro",{display:"flex",duration:0},{display:"none",duration:0}),o.fromTo("#portfolio",{display:"none",duration:2,delay:2},{display:"block",duration:2,delay:2}),o.fromTo("#nav button",{opacity:0,scale:0,duration:2},{opacity:1,scale:1,duration:2,scrollTrigger:"#nav .social-ctn .social-nav"}),o.fromTo("#nav .social-ctn .social-nav",{opacity:0,scale:0,duration:2},{opacity:1,scale:1,duration:2,scrollTrigger:"#nav button"}),o.fromTo(".portfolio",{opacity:0,zIndex:-1,delay:-30},{opacity:1,delay:-30,duration:10,zIndex:2}),o.fromTo("#intro",{zIndex:1,visibility:"visible"},{zIndex:-1,visibility:"hidden"}),o.fromTo(".bg-rodaje",{yPercent:40,duration:15,opacity:.8,scrollTrigger:".sup-rodaje",ease:"power1.inOut"},{yPercent:0,duration:15,opacity:.8,scrollTrigger:".sup-rodaje",ease:"power1.inOut"}),o.fromTo(".sup-rodaje",{delay:3,duration:12,yPercent:50,ease:"power1.inOut"},{delay:3,duration:12,yPercent:0,ease:"power1.inOut"}),o.fromTo("#progressbar-ctn",{opacity:0,y:200,duration:2,delay:-5},{opacity:1,y:0,duration:2,delay:-5}),o.to(".txt-ctn-1 .txt-row h2",{opacity:1,duration:5}),o.to(".txt-ctn-1 .dup-ctn span",{opacity:1,duration:5,delay:-5}),o.to(".sup-rodaje.zoomed",{duration:3,opacity:1,delay:10}),o.to(".txt-ctn-1",{duration:5,opacity:0}),o.to("#rect1",{attr:{rx:"8.5",y:"34",width:"17",height:"43.4444"},fill:"#D9D9D9",duration:1}),o.to("#rect2",{attr:{rx:"12.2778",y:"0",width:"24.5556",height:"86.8889"},fill:"#CBDB43",duration:1}),o.to(".sup-rodaje",{duration:10,scale:2.5,transformOrigin:"49% bottom",scrollTrigger:".txt-ctn-2 .txt-row h2, .bg-overlay"}),o.to(".bg-overlay",{duration:5,opacity:.3}),o.to(".txt-ctn-2 .txt-row h2",{opacity:1,duration:4}),o.to(".txt-ctn-2 .dup-ctn span",{opacity:1,duration:4,delay:-4,scrollTrigger:".dup-ctn span"}),o.to(".txt-ctn-2",{opacity:0,duration:4,delay:4}),o.to(".ctn-line",{margin:"-12 0",duration:.5},"-=0.5"),o.to(".desc-ctn",{y:-100,opacity:0,duration:.5},"-=0.5"),o.to("section.portfolio li h2",{color:"transparent",height:"auto",duration:.5,zIndex:-1},"-=0.5"),o.to(".preview-video",{opacity:0,duration:.5},"-=0.5"),o.to(".vid-overlay",{opacity:1,duration:.5},"-=0.5"),o.to(".logo-box",{opacity:.4,duration:.5},"-=0.5"),o.to(".pf-accordion-outer",{opacity:1,duration:4,scrollTrigger:".bg-overlay",zIndex:20}),o.to(".bg-overlay",{duration:4,opacity:.5,scrollTrigger:".pf-accordion-outer ol li h2"}),o.to(".pf-accordion-outer ol li h2",{y:0,opacity:1,stagger:1,duration:3,delay:2}),o.to(".pf-accordion",{delay:10,opacity:1,duration:2}).addLabel("portfolio"),o.to(".pf-accordion",{delay:5,opacity:0,duration:6,scrollTrigger:".pf-accordion"}),o.to(".pf-accordion-outer ol li h2",{y:30,opacity:0,stagger:1,delay:4,duration:5}),o.to(".pf-accordion-outer ol li h2",{duration:0,display:"none"}),o.to(".ctn-line",{margin:"-12 0",duration:.5},"-=0.5"),o.to(".desc-ctn",{y:-100,opacity:0,duration:.5},"-=0.5"),o.to("section.portfolio li h2",{color:"transparent",height:"auto",duration:.5,zIndex:-1},"-=0.5"),o.to(".preview-video",{opacity:0,duration:.5},"-=0.5"),o.to(".vid-overlay",{opacity:1,duration:.5},"-=0.5"),o.to(".logo-box",{opacity:.4,duration:.5},"-=0.5"),o.fromTo(".sup-rodaje.zoomed, .sup-rodaje",{transformOrigin:"49% 100%",scale:2.5,duration:5,y:0},{delay:4,duration:5,scale:40,y:1400,transformOrigin:"50% 99%",scrollTrigger:".box-ctn"}),o.fromTo(".vid-overlay",{opacity:1,duration:1},{opacity:0,duration:1}),o.fromTo(".box-ctn",{backgroundColor:"transparent",duration:5},{backgroundColor:"transparent",duration:5}),o.to(".box-ctn",{opacity:0,duration:2,delay:-4}),o.to(".box-ctn",{delay:-2,duration:7,transform:"scale(4.1)",top:"50%"}),o.fromTo("#progressbar-ctn",{opacity:1,y:0},{opacity:0,y:200,duration:5,delay:0}),o.to(".portfolio",{opacity:0,duration:8}),o.fromTo("#middle",{opacity:0,zIndex:-1},{opacity:1,duration:8,delay:-10,zIndex:3}),o.fromTo("#middleVidCtn",{display:"none",duration:0},{display:"block",duration:0}),o.fromTo("#middleVidCtn",{opacity:0,duration:4},{opacity:1,duration:4,onStart:()=>{m.play()}}),m.addEventListener("ended",()=>{m.style.display="none",gsap.to(window,{scrollTo:o.scrollTrigger.labelToScroll("start-tiempo"),duration:3}),m.currentTime=0,m.load()}),V.addEventListener("click",()=>{gsap.to(window,{scrollTo:o.scrollTrigger.labelToScroll("intro"),duration:2})}),o.fromTo("#portfolio",{display:"block",delay:0},{display:"none",delay:0}),o.fromTo("#middleVidCtn",{opacity:1,duration:10,delay:-10},{opacity:0,duration:10,delay:20,onComplete:()=>{m.pause()}}),o.fromTo("#middleVidCtn",{display:"block",duration:0},{display:"none",duration:0}),o.fromTo(".bg-video",{delay:-10,opacity:0,duration:5},{delay:-10,opacity:.5,duration:5}),o.fromTo("#progressbar-ctn",{opacity:0,delay:5,y:200},{opacity:1,y:0,duration:4,delay:5}),o.fromTo(".accordion",{display:"none",duration:0},{display:"flex",duration:0}),o.fromTo("#middle .text",{y:1e3,duration:10},{y:0,stagger:1,duration:10}).addLabel("start-tiempo"),o.to("#rect2",{attr:{rx:"8.5",y:"34",width:"17",height:"43.4444"},fill:"#D9D9D9",duration:1}),o.to("#rect3",{attr:{rx:"12.2778",y:"0",width:"24.5556",height:"86.8889"},fill:"#CBDB43",duration:1}).addLabel("servicios"),o.fromTo("#middle .text",{y:0},{y:-2e3,delay:3,duration:50,scrollTrigger:".acc-borders"}),o.fromTo(".acc-borders",{opacity:0,x:1e3,duration:20,width:"0vw",delay:-10,scrollTrigger:".accordion #parent"},{opacity:1,x:0,duration:20,width:"400vw",delay:-10,scrollTrigger:".accordion #parent"}),o.fromTo(".accordion #parent",{y:2e3,duration:20,delay:-5},{y:0,duration:20,delay:-5}).addLabel("servicios"),o.fromTo("#middle #text-container",{display:"flex"},{display:"none"}),o.to(".accordion",{rotateX:-69.3,duration:10,delay:10}),o.to(".accordion",{opacity:0,duration:2,delay:-4}),o.to(".bg-video",{opacity:0,duration:10,delay:-10}),o.fromTo("#progressbar-ctn",{opacity:1},{opacity:0,duration:16,delay:0}),o.fromTo("#video-tiempo",{opacity:0,duration:0},{opacity:1,duration:0}),o.fromTo(".bg-video",{rotateX:"0",duration:0},{rotateX:"-65deg",duration:0}),o.fromTo(".accordion",{display:"flex",duration:0},{display:"none",duration:0}),o.fromTo("#video-tiempo",{zIndex:-1,rotateX:115.3},{zIndex:4,rotateX:0,duration:10,scrollTrigger:".accordion",onStart:()=>{D()}}),o.to("#video-tiempo #text-container-2 .text",{y:1500,duration:0}),o.fromTo("#tiempoVidCtn",{opacity:0,delay:-10},{opacity:1,duration:6}),o.fromTo("#video-tiempo #text-container-2",{x:-2e3,duration:0,delay:-10},{x:0,duration:0,delay:-10}),o.fromTo("#video-tiempo #text-container-2 .text",{y:1500,delay:15},{y:0,stagger:.5,duration:15,delay:10}),o.to("#video-tiempo #text-container-2 .letter",{duration:5,delay:5}),o.fromTo("#video-tiempo",{rotateX:0,duration:20},{rotateX:110,duration:20,scrollTrigger:".accordion"}),o.fromTo("#video-tiempo",{opacity:1,duration:20,scrollTrigger:".accordion"},{opacity:0,duration:20}),o.fromTo("#video-tiempo",{display:"flex",duration:0},{display:"none",duration:0}),o.fromTo("#txt-container-2",{display:"none",duration:0},{display:"flex",duration:0}),o.fromTo(".bg-video",{opacity:0,duration:0},{opacity:.5,duration:0}),o.fromTo(".bg-video",{rotateX:-65,duration:20},{rotateX:0,duration:20}),o.fromTo("#txt-container-2 p",{y:2e3,x:0},{y:15,x:0,stagger:1,duration:10}),o.fromTo("#mobileBrandsCtn",{visibility:"hidden",y:200,x:0},{visibility:"visible",y:0,x:0,duration:2}),o.fromTo("#progressbar-ctn",{opacity:0,y:200},{opacity:1,y:0,duration:5,delay:-2}),o.to("#rect3",{attr:{rx:"8.5",y:"34",width:"17",height:"43.4444"},fill:"#D9D9D9",duration:5}),o.to("#rect4",{attr:{rx:"12.2778",y:"0",width:"24.5556",height:"86.8889"},fill:"#CBDB43",duration:5}).addLabel("clientes"),o.fromTo("#txt-container-2",{zIndex:-1,opacity:0,duration:10,delay:-20},{zIndex:5,opacity:1,duration:10,delay:-20}),o.fromTo(".flipLogoContainer",{display:"none",duration:0},{display:"flex",duration:0}),o.to("#txt-container-2",{delay:30,y:800,duration:10,transform:"scale(0.5)",opacity:0}),o.fromTo("#txt-container-2",{display:"flex",duration:0},{display:"none",duration:0}),o.fromTo("#progressbar-ctn",{opacity:1,duration:5},{opacity:0,duration:5,delay:0}),o.to("#progressbar-ctn",{display:"none"}),o.fromTo(".bg-video",{opacity:.5,duration:12,delay:-15},{opacity:.8,duration:12,delay:-15}),o.fromTo("#svgOutro",{y:-1e3,transform:"scale(2.5)",duration:2,delay:0,opacity:0},{delay:0,y:0,transform:"scale(1.6)",duration:2,opacity:1}),o.to("#svgOutro",{delay:5,duration:35,rotateY:809}),o.fromTo("#txt-container-2",{display:"flex",duration:0},{display:"none",duration:0}),o.to("#svgOutro",{visibility:"hidden"}),o.fromTo("#textAllCtn",{visibility:"hidden",rotateY:-90,duration:8},{visibility:"visible",rotateY:0,duration:10,delay:15}),o.to(".charSpan",{delay:10}),o.to("#textAllCtn",{scale:.6,y:-100,duration:5}),o.to(".subTextContainer",{y:0,visibility:"visible"}),o.fromTo("nav .social-ctn a",{scale:1,duration:4},{scale:0,duration:4}),o.fromTo(".svgSocial",{scale:0,duration:5},{scale:1,duration:5}),o.staggerTo([".charSpan2"],3,{color:"#D1D821",opacity:1,duration:10},.5),o.fromTo("#subir",{y:500,opacity:0},{y:0,opacity:1,duration:2})}else{let o=gsap.timeline({scrollTrigger:{trigger:"main.wrapper",start:"top top",end:"bottom+=2000% bottom",scrub:5,pin:!0,inertia:!0}});T.addEventListener("click",()=>{s.isActive()&&s.reversed()||(y=!y,h.src=y?"src/assets/x-dark.webp":"src/assets/Menu.webp",T.style.transform=y?"rotate(90deg)":"rotate(0deg)",l.className.match("close")?(l.className="open",i[0].src="src/assets/mail-dark.webp",i[1].src="src/assets/whatsapp-dark.webp",i[2].src="src/assets/ig-dark.webp",i[3].src="src/assets/Linkedin-dark.webp"):l.className.includes("open")&&(l.className="close",i[0].src="src/assets/mail.webp",i[1].src="src/assets/wsp.webp",i[2].src="src/assets/ig.webp",i[3].src="src/assets/Linkedin.webp"),s.totalProgress()===0?s.play():s.totalProgress()>0&&s.reverse())}),gsap.utils.toArray(".nav-link").forEach(t=>{t.addEventListener("click",r=>{r.preventDefault(),t.innerText.toLowerCase()==="inicio"?gsap.to(window,{scrollTo:o.scrollTrigger.labelToScroll("intro"),duration:0}):t.innerText.toLowerCase()==="portfolio"?gsap.to(window,{scrollTo:o.scrollTrigger.labelToScroll("portfolio"),duration:2}):t.innerText.toLowerCase()==="servicios"?gsap.to(window,{scrollTo:o.scrollTrigger.labelToScroll("servicios"),duration:2}):t.innerText.toLowerCase()==="clientes"&&gsap.to(window,{scrollTo:o.scrollTrigger.labelToScroll("clientes"),duration:2}),y=!y,h.src=y?"src/assets/x-dark.webp":"src/assets/Menu.webp",T.style.transform=y?"rotate(90deg)":"rotate(0deg)",l.className.match("close")?(l.className="open",i[0].src="src/assets/mail-dark.webp",i[1].src="src/assets/whatsapp-dark.webp",i[2].src="src/assets/ig-dark.webp",i[3].src="src/assets/Linkedin-dark.webp"):l.className.includes("open")&&(l.className="close",i[0].src="src/assets/mail.webp",i[1].src="src/assets/wsp.webp",i[2].src="src/assets/ig.webp",i[3].src="src/assets/Linkedin.webp"),s.paused()||s.totalProgress()===0?s.play():s&&s.reverse()})}),x.forEach((t,r)=>t.addEventListener("click",()=>{d&&d.parentNode&&d.parentNode.removeChild(d);let n=document.createElement("video");n.id="modalVideo";let w=document.createElement("source");w.src=H[r],n.controls=!0,n.appendChild(w),j.appendChild(n),v.classList.remove("hidden"),v.classList.add("shown"),n.play(),d=n,o.seek("portfolio"),l.style.position="fixed",gsap.to(window,{scrollTo:o.scrollTrigger.labelToScroll("portfolio")})})),P.addEventListener("click",()=>{d&&setTimeout(()=>{d.pause(),d.parentNode.removeChild(d),d=null,v.classList.remove("shown"),v.classList.add("hidden")},500),L.style.overflow="",L.style.top="",o.seek("portfolio"),l.style.position="absolute",gsap.to(window,{scrollTo:o.scrollTrigger.labelToScroll("portfolio"),duration:0})}),o.fromTo("#scrollea",{display:"none"},{display:"flex"}).addLabel("intro"),o.fromTo("#scrollea",{opacity:1,duration:2,x:0},{opacity:0,duration:2,x:-100}),o.fromTo("#scrollea",{display:"flex"},{display:"none"}),o.fromTo("#video",{display:"none"},{display:"flex"}),o.fromTo("#video-camara",{opacity:0,duration:5},{opacity:1,duration:5});let e=gsap.utils.toArray("#video-camara img");e.forEach((t,r)=>{o.fromTo(t,{display:"none"},{display:"block",stagger:.3,duration:.2}),r<e.length-1&&o.set(t,{display:"none"})}),o.fromTo("#texto",{transform:"scale(0)",opacity:0,duration:10},{transform:"scale(1)",opacity:1,duration:10,delay:-30}),o.fromTo(".fill",{color:"transparent",stagger:1,duration:5,delay:-20},{color:"#D1D821",stagger:1,duration:5,delay:-20}),o.to("#texto",{y:-800,duration:10,delay:-10}),o.to("#intro",{opacity:0,duration:10,delay:-10}),o.fromTo("#intro",{display:"flex",duration:0},{display:"none",duration:0}),o.fromTo("#portfolio",{display:"none",duration:2,delay:2},{display:"block",duration:2,delay:2}),o.fromTo("#nav button",{opacity:0,scale:0,duration:2},{opacity:1,scale:1,duration:2,scrollTrigger:"#nav .social-ctn .social-nav"}),o.fromTo("#nav .social-ctn .social-nav",{opacity:0,scale:0,duration:2},{opacity:1,scale:1,duration:2,scrollTrigger:"#nav button"}),o.fromTo(".portfolio",{opacity:0,zIndex:-1,delay:-30},{opacity:1,delay:-30,duration:10,zIndex:2}),o.fromTo("#intro",{zIndex:1,visibility:"visible"},{zIndex:-1,visibility:"hidden"}),o.to(".bg-rodaje",{yPercent:-66,duration:25,opacity:.8,scrollTrigger:".sup-rodaje",ease:"power1.inOut"}),o.to(".sup-rodaje",{delay:3,duration:23,yPercent:-66,ease:"power1.inOut"}),o.fromTo("#progressbar-ctn",{opacity:0,y:200,duration:2,delay:-5},{opacity:1,y:0,duration:2,delay:-5}),o.to(".txt-ctn-1 .txt-row h2",{opacity:1,duration:5}),o.to(".txt-ctn-1 .dup-ctn span",{opacity:1,stagger:.5,duration:5,scrollTrigger:".dup-ctn span"}),o.to(".txt-ctn-1 .dup-ctn span",{color:"#D1D821",stagger:.5,duration:5,delay:5}),o.to(".sup-rodaje.zoomed",{duration:3,opacity:1,delay:10}),o.to(".txt-ctn-1",{duration:5,opacity:0}),o.to("#rect1",{attr:{rx:"8.5",y:"34",width:"17",height:"43.4444"},fill:"#D9D9D9",duration:1}),o.to("#rect2",{attr:{rx:"12.2778",y:"0",width:"24.5556",height:"86.8889"},fill:"#CBDB43",duration:1}),o.to(".sup-rodaje",{duration:10,scale:2.5,transformOrigin:"32% bottom",scrollTrigger:".txt-ctn-2 .txt-row h2, .bg-overlay"}),o.to(".bg-overlay",{duration:5,opacity:.3}),o.to(".txt-ctn-2 .txt-row h2",{opacity:1,duration:4}),o.to(".txt-ctn-2 .dup-ctn span",{opacity:1,stagger:.5,duration:5,scrollTrigger:".dup-ctn span"}),o.to(".txt-ctn-2 .dup-ctn span",{color:"#D1D821",stagger:.5,duration:5,delay:4}),o.to(".txt-ctn-2",{opacity:0,duration:4,delay:4}),o.to(".pf-accordion-outer",{opacity:1,duration:4,scrollTrigger:".bg-overlay",zIndex:20}),o.to(".bg-overlay",{duration:4,opacity:.5,scrollTrigger:".pf-accordion-outer ol li h2"}),o.to(".pf-accordion-outer ol li h2",{y:0,opacity:1,stagger:1,duration:3,delay:2}),o.to(".pf-accordion",{delay:10,opacity:1,duration:2}).addLabel("portfolio"),o.to(".pf-accordion",{delay:5,opacity:0,duration:6,scrollTrigger:".pf-accordion"}),o.to(".pf-accordion-outer ol li h2",{y:30,opacity:0,stagger:1,delay:4,duration:5}),o.to(".pf-accordion-outer ol li h2",{duration:0,display:"none"}),o.to(".sup-rodaje",{backgroundColor:"transparent",duration:0,scrollTrigger:".box-ctn"}),o.to(".sup-rodaje",{delay:4,duration:10,width:"700%",left:"-480%",top:"-300%",scrollTrigger:".box-ctn"}),o.fromTo(".box-ctn",{delay:4,duration:10,transform:"translate(-3.5535px, 50.3861px) rotate(7.0003deg) skew(10.5002deg, 0deg) scale(1.0075, 0.9851)",xPercent:-0,top:"34.9998%"},{delay:4,duration:10,transform:"scale(4) skew(3.5deg, 7deg) translate(-5px, 40px)",xPercent:-100,top:"30%"}),o.fromTo("#progressbar-ctn",{opacity:1,y:0},{opacity:0,y:200,duration:5,delay:0}),o.to(".portfolio",{opacity:0,duration:8}),o.fromTo("#middle",{opacity:0,zIndex:-1},{opacity:1,duration:8,delay:-10,zIndex:3}),o.fromTo("#middleVidCtn",{display:"none",duration:0},{display:"block",duration:0}),o.fromTo("#middleVidCtn",{opacity:0,duration:4},{opacity:1,duration:4,onStart:()=>{m.play()}}),m.addEventListener("ended",()=>{m.style.display="none",gsap.to(window,{scrollTo:o.scrollTrigger.labelToScroll("start-tiempo"),duration:3}),m.currentTime=0,m.load()}),V.addEventListener("click",()=>{gsap.to(window,{scrollTo:o.scrollTrigger.labelToScroll("intro"),duration:2})}),o.fromTo("#portfolio",{display:"block",delay:0},{display:"none",delay:0}),o.fromTo("#middleVidCtn",{opacity:1,duration:10,delay:-10},{opacity:0,duration:10,delay:20,onComplete:()=>{m.pause()}}),o.fromTo("#middleVidCtn",{display:"block",duration:0},{display:"none",duration:0}),o.fromTo(".bg-video",{delay:-10,rotateX:0,opacity:0,duration:5},{delay:-10,rotateX:0,opacity:.5,duration:5}),o.fromTo("#progressbar-ctn",{opacity:0,delay:5,y:200},{opacity:1,y:0,duration:4,delay:5}),o.fromTo(".accordion",{display:"none",duration:0},{display:"flex",duration:0}),o.fromTo("#middle .text",{y:1e3,duration:10},{y:0,stagger:1,duration:10}).addLabel("start-tiempo"),o.to("#rect2",{attr:{rx:"8.5",y:"34",width:"17",height:"43.4444"},fill:"#D9D9D9",duration:1}),o.to("#rect3",{attr:{rx:"12.2778",y:"0",width:"24.5556",height:"86.8889"},fill:"#CBDB43",duration:1}).addLabel("servicios"),o.to("#middle #text-container .letter",{color:"#D1D821",stagger:.5,duration:5}),o.fromTo("#middle #text-container",{x:0},{x:-2e3,delay:3,duration:30}),o.fromTo("#middle #text-container",{display:"flex"},{display:"none"}),o.to(".acc-borders",{opacity:1,x:0,duration:20,width:"400vw",delay:-35}),o.fromTo(".accordion",{x:2e3,delay:-20,duration:20},{x:0,delay:-20,duration:20}).addLabel("servicios"),o.to(".accordion",{rotateX:-69.3,duration:10,delay:10}),o.to(".accordion",{opacity:0,duration:2,delay:-4}),o.to(".bg-video",{opacity:0,duration:10,delay:-10}),o.fromTo("#video-tiempo",{opacity:0},{opacity:1}),o.fromTo("#video-tiempo",{zIndex:-1,rotateX:115.3},{zIndex:4,rotateX:0,duration:10,scrollTrigger:".accordion",onStart:()=>{D()}}),o.to("#video-tiempo #text-container-2 .text",{y:1500,duration:0}),o.fromTo("#tiempoVidCtn",{opacity:0,delay:-10},{opacity:1,duration:6}),o.fromTo("#video-tiempo #text-container-2",{x:-2e3,duration:0,delay:-10},{x:0,duration:0,delay:-10}),o.fromTo("#video-tiempo #text-container-2 .text",{y:1500,delay:15},{y:0,stagger:.5,duration:15,delay:10}),o.fromTo("#video-tiempo #text-container-2 .letter",{color:"transparent",duration:4,delay:1},{color:"rgb(203, 219, 67)",stagger:.5,duration:5,delay:1}),o.fromTo("#video-tiempo",{rotateX:0,duration:20},{rotateX:110,duration:20,scrollTrigger:".accordion"}),o.fromTo("#video-tiempo",{opacity:1,duration:20,scrollTrigger:".accordion"},{opacity:0,duration:20}),o.fromTo("#video-tiempo",{display:"flex",duration:0},{display:"none",duration:0}),o.fromTo("#txt-container-2",{display:"none",duration:0},{display:"flex",duration:0}),o.fromTo(".bg-video",{opacity:0,duration:0},{opacity:.5,duration:0}),o.fromTo(".bg-video",{rotateX:0},{rotateX:0}),o.fromTo(".bg-video",{rotateX:-65,duration:20},{rotateX:0,duration:20}),o.fromTo("#txt-container-2",{zIndex:-1,opacity:0,duration:10,delay:-20},{zIndex:5,opacity:1,duration:10,delay:-20}),o.fromTo("#p1",{x:2e3},{x:0,duration:25}),o.fromTo("#p2",{x:2e3},{x:0,duration:30,delay:-18}),o.to("#p1",{delay:20,duration:30,x:-2e3}),o.fromTo("#progressbar-ctn",{opacity:0,y:200},{opacity:1,y:0,duration:16,delay:-2}),o.to("#p1",{opacity:0,duration:0}),o.to("#rect3",{attr:{rx:"8.5",y:"34",width:"17",height:"43.4444"},fill:"#D9D9D9",duration:1}),o.to("#rect4",{attr:{rx:"12.2778",y:"0",width:"24.5556",height:"86.8889"},fill:"#CBDB43",duration:1}),o.to("#p2",{delay:-30,duration:20,y:150}),o.fromTo(".flipLogoContainer",{display:"none",duration:0},{display:"flex",duration:0}),o.fromTo("#carousel-container",{display:"none",duration:0,delay:-20},{display:"block",duration:0,delay:-20}),o.fromTo("#carousel-container",{transform:"scale(0)",duration:10,delay:-20},{transform:"scale(1.5)",duration:10,delay:-20}).addLabel("clientes"),o.to("#txt-container-2",{delay:30,y:800,duration:30,transform:"scale(0.5)",opacity:0}),o.fromTo("#txt-container-2",{display:"flex",duration:0},{display:"none",duration:0}),o.fromTo("#progressbar-ctn",{opacity:1,duration:5},{opacity:0,duration:5,delay:0}),o.to("#progressbar-ctn",{display:"none"}),o.fromTo(".bg-video",{opacity:.5,duration:12,delay:-15},{opacity:.8,duration:12,delay:-15}),o.fromTo("#svgOutro",{y:-1e3,transform:"scale(2.5)",duration:20,delay:-20,opacity:0},{delay:-20,y:0,transform:"scale(1.6)",duration:20,opacity:1}),o.to("#svgOutro",{delay:10,duration:20,rotateY:809}),o.fromTo("#txt-container-2",{display:"flex",duration:0},{display:"none",duration:0}),o.to("#svgOutro",{visibility:"hidden"}),o.fromTo("#textAllCtn",{visibility:"hidden",rotateY:-90,duration:10},{visibility:"visible",rotateY:0,duration:10,delay:10}),o.to([".charSpan"],{color:"#D1D821",stagger:.5,duration:5}),o.to(".charSpan",{delay:10}),o.to("#textAllCtn",{scale:.6,y:-100,duration:5}),o.to(".subTextContainer",{y:0,visibility:"visible"}),o.fromTo("nav .social-ctn a",{scale:1,duration:4},{scale:0,duration:4}),o.fromTo(".svgSocial",{scale:0,duration:5},{scale:1,duration:5}),o.staggerTo([".charSpan2"],3,{color:"#D1D821",opacity:1,duration:10},.5),o.fromTo("#subir",{y:500,opacity:0},{y:0,opacity:1,duration:2})}
