if(!self.define){let e,o={};const s=(s,i)=>(s=new URL(s+".js",i).href,o[s]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=o,document.head.appendChild(e)}else e=s,importScripts(s),o()})).then((()=>{let e=o[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(o[t])return;let n={};const a=e=>s(e,t),d={module:{uri:t},exports:n,require:a};o[t]=Promise.all(i.map((e=>d[e]||a(e)))).then((e=>(r(...e),n)))}}define(["./workbox-9a877d37"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"img/imagen_icono.png",revision:"2f81cc5f999bb93b2a5a6bbaa8f10505"},{url:"img/ImagenEncabezado.png",revision:"6b3b80c67cd7f6a82792ee87828334a9"},{url:"index.html",revision:"c2b11a3ac51c5244830d0c4f5b2f5053"},{url:"js/catalogoVideos.js",revision:"a2b686446ae316bf9dbb87b45dcf99db"},{url:"manifest.json",revision:"2fe9b0ff539ce98abcfa4195765dd057"},{url:"paginas/listaVideos.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"vendor/bootstrap-5.2.3-dist/js/bootstrap.bundle.js",revision:"01a034c34cb9c1d2f062af8def13ecb7"},{url:"vendor/bootstrap-5.2.3-dist/js/bootstrap.bundle.min.js",revision:"b75ae000439862b6a97d2129c85680e8"},{url:"vendor/bootstrap-5.2.3-dist/js/bootstrap.esm.js",revision:"f86c449a0babc30b33ff71a6fd064833"},{url:"vendor/bootstrap-5.2.3-dist/js/bootstrap.esm.min.js",revision:"da74cf4659eb6c671e549aaed3d7ca1d"},{url:"vendor/bootstrap-5.2.3-dist/js/bootstrap.js",revision:"1376378024397729b1febb40f5a0e16f"},{url:"vendor/bootstrap-5.2.3-dist/js/bootstrap.min.js",revision:"b0794583ec020a7852f0fc04d5cefc52"},{url:"workbox-config.js",revision:"0a63d0cb548082a7812ea597f29ca3d7"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
