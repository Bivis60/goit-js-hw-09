const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]");let d=null;r.setAttribute("disabled",!0),e.addEventListener("click",(function(){if(d)return;e.setAttribute("disabled",!0),r.removeAttribute("disabled"),d=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),r.addEventListener("click",(function(){clearInterval(d),d=void 0,r.setAttribute("disabled",!0),e.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.5ba03028.js.map
