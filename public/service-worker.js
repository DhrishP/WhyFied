if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let n={};const r=e=>a(e,i),d={module:{uri:i},exports:n,require:r};s[i]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(t(...e),n)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/AIPvBx32t8L9c4gjywCRP/_buildManifest.js",revision:"e57a59d253dabd0e0d31ccdad4b9a2b4"},{url:"/_next/static/AIPvBx32t8L9c4gjywCRP/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-be59e226856b46d0.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/1749-e076a6223d29334e.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/1850-65a5c994a4b7fd7a.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/2387-7a6adbaded3d5390.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/335-fc69ed15199ea5e4.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/3679-d7c4563445c62664.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/4520-bf6fffd6ba53d6ce.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/4845-2f68d101d6a17f3d.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/5250-73903e3c8858129d.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/5357-ce2d66ac47000a25.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/5468-f91687d9f27e97da.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/6288-a922a39b189c3bf1.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/7850-0df788cdb6c9c8a5.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/8062-ac650ccb281e3b9c.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/8300-5f02eeda8e9bf1ea.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/8903-347815eac071269d.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/8953-78c9d7d329f102eb.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/9081a741-37de6090e2a19c98.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/9239-7dcb66a523edbb53.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/98916abf-8e3210d306c8cc02.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/9998-aba155c0c2df743a.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/(caraosel)/landing-slider/page-095a05b34db73c40.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/(caraosel)/layout-201fbb97ac17b58a.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/(caraosel)/preferences-slider/page-40ce7b92696cd578.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/(routes)/journal/%5BjournalId%5D/page-082e592a67ec3be9.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/(routes)/journal/loading-5e7f1456ef768624.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/(routes)/journal/page-e284b17b32a5d941.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/(routes)/ponder/loading-4806804d0e5bba16.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/(routes)/ponder/page-95b6e8c396f0eedf.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/(routes)/question-page/%5BquestionId%5D/loading-6a0182a08205a940.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/(routes)/question-page/%5BquestionId%5D/page-e4dc62e49bd1dc6a.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/(routes)/question-page/layout-a9dab0b95a0b827e.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/(routes)/question-page/loading-9c2ab5c37fd0c572.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/(routes)/question-page/page-f9238d4336d31098.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/(routes)/shop/loading-8d298540799194b9.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/(routes)/shop/page-b942ce97467ccfcd.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/admin/add-why/page-2ada2d2228c25144.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/admin/layout-430d0bb5cf9aeb91.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/alterbot/page-ed86bb01d415a993.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/auth/error/page-dbcfd8612607c6f1.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/auth/layout-058c9f2a07f5f926.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/auth/login/page-47d77c3bf548ab4b.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/auth/new-password/page-13ff171f968607db.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/auth/new-verification/page-7e0ae8e8eeb84fbe.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/auth/register/page-1fe5767b3b6e636c.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/auth/reset/page-9d6f7d598cc7b668.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/chatbot/loading-514b0c1cbdbf4692.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/chatbot/page-f3c783414ad3bdaa.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/landing/layout-fed25df2534c755d.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/landing/loading-da93970c4f243363.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/landing/page-6680575a4515d851.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/layout-9d943d753ebe0290.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/not-found-5d5915fe5c9d85a5.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/page-7d4876d9ccd04666.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/profile/loading-315245f80888e917.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/profile/page-c4fe678e083b0f50.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/settings/layout-7728ad7df142bf07.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/settings/loading-0532b726d3119624.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/app/settings/page-a2d07eec1fb7bb6f.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/fd9d1056-c15d053deaab5046.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/framework-20adfd98f723306f.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/main-app-aee0bdb90421ab47.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/main-d3ff1c1dba2afed5.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/pages/_app-794d85baa83ca682.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/pages/_error-5fb63848e0136a02.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/reactPlayerDailyMotion.26c058137dcab425.js",revision:"26c058137dcab425"},{url:"/_next/static/chunks/reactPlayerFacebook.de65b00d664e567c.js",revision:"de65b00d664e567c"},{url:"/_next/static/chunks/reactPlayerFilePlayer.198642c698c98cc3.js",revision:"198642c698c98cc3"},{url:"/_next/static/chunks/reactPlayerKaltura.88fd907458a470ea.js",revision:"88fd907458a470ea"},{url:"/_next/static/chunks/reactPlayerMixcloud.4e39630a3c2b7cc5.js",revision:"4e39630a3c2b7cc5"},{url:"/_next/static/chunks/reactPlayerMux.6eb93477111e22f6.js",revision:"6eb93477111e22f6"},{url:"/_next/static/chunks/reactPlayerPreview.c4ac17389e9d4967.js",revision:"c4ac17389e9d4967"},{url:"/_next/static/chunks/reactPlayerSoundCloud.5e0e78b17d8f665e.js",revision:"5e0e78b17d8f665e"},{url:"/_next/static/chunks/reactPlayerStreamable.490198667fb8d465.js",revision:"490198667fb8d465"},{url:"/_next/static/chunks/reactPlayerTwitch.68d2e1de9178cdb0.js",revision:"68d2e1de9178cdb0"},{url:"/_next/static/chunks/reactPlayerVidyard.dea6bc21245da709.js",revision:"dea6bc21245da709"},{url:"/_next/static/chunks/reactPlayerVimeo.c9313367a45dc8e9.js",revision:"c9313367a45dc8e9"},{url:"/_next/static/chunks/reactPlayerWistia.c53cea4dd04c36fc.js",revision:"c53cea4dd04c36fc"},{url:"/_next/static/chunks/reactPlayerYouTube.44fecfc2df5086f2.js",revision:"44fecfc2df5086f2"},{url:"/_next/static/chunks/webpack-e320a6e46a81ef49.js",revision:"AIPvBx32t8L9c4gjywCRP"},{url:"/_next/static/css/053aa6c2b84855c6.css",revision:"053aa6c2b84855c6"},{url:"/_next/static/css/746c6fbabe9b64b0.css",revision:"746c6fbabe9b64b0"},{url:"/_next/static/css/aa0509d319d6c76e.css",revision:"aa0509d319d6c76e"},{url:"/_next/static/css/d8f3314c596697b7.css",revision:"d8f3314c596697b7"},{url:"/_next/static/css/fad4168fed7a679a.css",revision:"fad4168fed7a679a"},{url:"/_next/static/media/03c168af2088d6cc-s.woff2",revision:"10768ff9a2cf52aa63570002285d4059"},{url:"/_next/static/media/0484562807a97172-s.p.woff2",revision:"b550bca8934bd86812d1f5e28c9cc1de"},{url:"/_next/static/media/0a03a6d30c07af2e-s.woff2",revision:"79da53ebaf3308c806394df4882b343d"},{url:"/_next/static/media/36e691c93ab6ff85-s.p.woff2",revision:"af4dbc8ac9d5a72f97cf7d88d3f0c073"},{url:"/_next/static/media/41027a0b39041217-s.woff2",revision:"1c8b3f7b7f18e0344e7e5b44d7fb42aa"},{url:"/_next/static/media/8e91adcecd874f15-s.woff2",revision:"6c000c8a67502aa22041315bc145c11e"},{url:"/_next/static/media/8f605bf014aa7831-s.woff2",revision:"689cccb16d78f339bb08284404c0d045"},{url:"/_next/static/media/96671f92afcbb627-s.woff2",revision:"e00aab064bfb9fb585b799bd669303ed"},{url:"/_next/static/media/ae471955cc5fb572-s.woff2",revision:"039232a435dce90125bbf3b58339b220"},{url:"/_next/static/media/d2593d0c1cb4037b-s.woff2",revision:"7d375bdc7219a74ac66ab7fb9f97d2e8"},{url:"/_next/static/media/e3f4d46130658db8-s.p.woff2",revision:"73e96c645d3bbe2f740199b2d2bcc9a1"},{url:"/_next/static/media/ec80461f9d794e9f-s.p.woff2",revision:"5ad4e7bda3cbbf01c6acc92ef72c4e57"},{url:"/_next/static/media/f611ec037854cf05-s.p.woff2",revision:"eaf2647f2155729b1d401203867e333a"},{url:"/_next/static/media/f6290629ee5f59c5-s.woff2",revision:"07e587c90660f745b23c797303f05f66"},{url:"/audio/forest.mp3",revision:"ac5a61c15aeaa2da1024466a89c0548c"},{url:"/audio/perfe.mp3",revision:"55c15b3ed0ac35c1ea086dd0a6766ad3"},{url:"/icons/icon-192.png",revision:"5c8249145a734efdbf476538bf457b76"},{url:"/icons/icon-384.png",revision:"a85d67337b61cdf050052a9b546df7b3"},{url:"/icons/icon-512.png",revision:"649935dedc9f8b0774de38d03b5b4c18"},{url:"/images/Vector.png",revision:"b6fad7bf136916d90a95be244eb14d02"},{url:"/images/Vector1.png",revision:"14bd939954a2959935cacc49823a0d9d"},{url:"/images/Vector2.png",revision:"36b237cc2006e6ea08a06eaef9026768"},{url:"/images/coin.png",revision:"18946103a03dfc1680abbf237cb15409"},{url:"/images/meta.svg",revision:"aa769f12a3b45bf70d8d8e51395b0fe8"},{url:"/images/meta2.svg",revision:"5842de84af8cfc822fb320a0a4fe40aa"},{url:"/images/meta3.svg",revision:"aebd38a141086c90117ddab332d74ad6"},{url:"/images/meta4.svg",revision:"c16ea8fc62830d57fe48d9c9322f3baa"},{url:"/images/nei.jpg",revision:"798884863c4f416580886ffd19c7c41d"},{url:"/images/qlogo.jpg",revision:"779257b5187c02471dfc4e254a34e7f6"},{url:"/images/snowball.jpg",revision:"41310dc7d26440a87024df8c1c04ab2f"},{url:"/manifest.json",revision:"7c0fd42e872957cf1207bee6d1754290"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
