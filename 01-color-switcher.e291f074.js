const t={btn:document.querySelectorAll("button"),body:document.querySelector("body")};let e=null,n=!1;t.btn[0].addEventListener("click",(function(){!0!==n&&(n=!0,e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3))})),t.btn[1].addEventListener("click",(function(){n=!1,clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.e291f074.js.map
