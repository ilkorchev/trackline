const VERSION='2.0.0';
const CACHE=`trackline-shell-${VERSION}`;
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('trackline-shell-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('message',event=>{
  if(event.data?.type==='SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const req=event.request;
  if(req.mode==='navigate'){
    event.respondWith(fetch(req).then(response=>{
      const copy=response.clone();caches.open(CACHE).then(cache=>cache.put('./index.html',copy));return response;
    }).catch(()=>caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(response=>{
    if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(req,copy));}
    return response;
  })));
});
