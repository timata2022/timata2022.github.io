if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const t=s=>i(s,r),o={module:{uri:r},exports:a,require:t};e[r]=Promise.all(n.map((s=>o[s]||t(s)))).then((s=>(l(...s),a)))}}define(["./workbox-c1760cce"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/apple-icon-180.bad5daa7.png",revision:null},{url:"assets/arrow-move-up.b2044799.svg",revision:null},{url:"assets/arrow-move.7e5bf504.svg",revision:null},{url:"assets/back-btn.105a8e72.svg",revision:null},{url:"assets/create-btn.9e0b35e0.svg",revision:null},{url:"assets/cross.f8944a3a.svg",revision:null},{url:"assets/cyc.daac4bfd.svg",revision:null},{url:"assets/delete-icon.20cb4acd.svg",revision:null},{url:"assets/down-a.4d156371.svg",revision:null},{url:"assets/edit-icon.8b458e95.svg",revision:null},{url:"assets/edit-text.7619674c.svg",revision:null},{url:"assets/exercise-icon-blanc.97bde7a4.svg",revision:null},{url:"assets/exercise-icon-list.fa49952b.svg",revision:null},{url:"assets/favicon-196.3cb735ea.png",revision:null},{url:"assets/glass-icon.addb576f.svg",revision:null},{url:"assets/hamburger-icon.3a49487d.svg",revision:null},{url:"assets/index.830c1bb9.css",revision:null},{url:"assets/index.c817ac48.js",revision:null},{url:"assets/pencil.7efa2c23.svg",revision:null},{url:"assets/rest-icon.76ec7893.svg",revision:null},{url:"assets/start-background.58f8d2c4.svg",revision:null},{url:"assets/start-icon.cedbf62e.svg",revision:null},{url:"assets/timata-icon.2be97df1.svg",revision:null},{url:"assets/timata-logo.af43bffb.svg",revision:null},{url:"assets/up-a.e21bae45.svg",revision:null},{url:"assets/vendor.99852b30.js",revision:null},{url:"index.html",revision:"ec108ef4ac60f0082daf7edbd89bda8f"},{url:"manifest.webmanifest",revision:"691e69700d50ce41742b5939d96f7b24"},{url:"manifest-icon-192.maskable.png",revision:"cd0a516a4d13b2d9c11cade358b70afc"},{url:"manifest-icon-512.maskable.png",revision:"531369a2341ac1a5e0c5ee45ec7efb85"},{url:"manifest.webmanifest",revision:"691e69700d50ce41742b5939d96f7b24"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
