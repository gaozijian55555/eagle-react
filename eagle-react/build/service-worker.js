"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","8c101668b48767e19d28908122e2afa4"],["/static/css/main.feb38f83.css","64d702506091bb5e480404dc1c554fb4"],["/static/js/main.d154b49a.js","dea2d55bc26bb7c7bd5c4886f2d52d42"],["/static/media/check-circle-o.832ff1df.svg","832ff1df2f863d8b2eee1cc038ac074c"],["/static/media/check-circle.85234955.svg","852349559dd5a49777f5aa05c991d001"],["/static/media/check.4e29f00a.svg","4e29f00a43e282ced5e0267523dab80f"],["/static/media/cross-circle-o.50fa4a02.svg","50fa4a0252cc85805477e010e2c73f34"],["/static/media/cross-circle.0499596d.svg","0499596da5fe2f7c050ab16f043acc88"],["/static/media/cross.386b7998.svg","386b7998edb0f6cf2bd7108c7ff3b850"],["/static/media/dislike.7285ea32.svg","7285ea322f7cfe8a18b52d6fa389b308"],["/static/media/down.3531720c.svg","3531720c0e1c9b079d5318be0b0dd398"],["/static/media/ellipsis-circle.d4107a7c.svg","d4107a7c892a4f79ff4c8c089ac093c3"],["/static/media/ellipsis.dcac1012.svg","dcac101261350eeef005b78cd1e07d5a"],["/static/media/exclamation-circle.7972237c.svg","7972237c4507882fa254407beb501334"],["/static/media/fail.6dfee434.svg","6dfee43461c63955a3e6aaa718da73b2"],["/static/media/index.1e084714.less","1e084714e59ca5def325beb609038e26"],["/static/media/index.22eccf8a.less","22eccf8abfe8d9b11f526d8fe559b2fa"],["/static/media/index.34bab71c.less","34bab71c5b9b8810c6dff6015ba89a19"],["/static/media/info-circle.159afecb.svg","159afecbe04866ff1c731a226b375726"],["/static/media/koubei-o.54ecfaff.svg","54ecfaff3fdb4a85c32c5a278f4bc9b2"],["/static/media/koubei.f66ae400.svg","f66ae400a627f579a7f96d15a0c6396a"],["/static/media/left.dfec4f9b.svg","dfec4f9b9a4fe5c454c3d8580916b18f"],["/static/media/loading.8bd8cb59.svg","8bd8cb590395bcc61189537d29a14067"],["/static/media/question-circle.8495b322.svg","8495b3221d1ccb6ea3af90b65265d065"],["/static/media/right.3ecfeac8.svg","3ecfeac8e6a7cc412d7832c2799ee4cf"],["/static/media/search.93c48a7f.svg","93c48a7f488c124bb7ec4a3e2ceaf55f"],["/static/media/success.8b26793a.svg","8b26793ade720800958b7bd3413460dd"],["/static/media/up.e987c697.svg","e987c697908f92b77bd49ba0a0aaea8b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),s=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});