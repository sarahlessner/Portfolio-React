"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","586107b154ed1ef316e9c666e29b7013"],["/static/js/main.936b4db0.js","a4b444e1e472e7b4fe8337f7264d928b"],["/static/media/babygriz.cdc7a1b1.JPG","cdc7a1b19964f9a86286ffe62b2edf24"],["/static/media/bamazon.695e3639.png","695e3639fc9f58ee84f6ce6b2f2c6e9a"],["/static/media/bart.742d8743.png","742d8743893a2edd9d02401d8ec02427"],["/static/media/baze.c06728de.png","c06728de3871e4531b12ac924ae2825c"],["/static/media/burger.882d8da4.png","882d8da410ef1f6c70f6c7c26dc33c55"],["/static/media/crystal.e1afa34f.png","e1afa34f4c78de1a0b950e194cbe7bdf"],["/static/media/friendfinder.cae70c75.png","cae70c753f2a50c62878f5d8cb7ec084"],["/static/media/hangman.fcbab8d6.png","fcbab8d638cc4f17b5126a3782a13bf4"],["/static/media/headshot.11c4e552.jpg","11c4e552d3feb6e52360fe0db311bdf5"],["/static/media/nyt.ac320961.png","ac32096154c4e5e8d19299bdd2d2cf70"],["/static/media/scheduler.8e41d374.png","8e41d3749dbc17c096ba03a2e4e78910"],["/static/media/scraper.016c2b8c.png","016c2b8c1c5a69ebd10df1aeb9802c37"],["/static/media/swap.3ed311bb.png","3ed311bb36cca774ee2e4aa3d505dcf0"],["/static/media/trivia.f6a06f35.png","f6a06f354c3e8a99e248c0fd7631ecae"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});