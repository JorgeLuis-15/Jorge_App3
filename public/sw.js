self.addEventListener('install', event=> {
    console.log('service worker instalado');
    event.waitUntil(
        caches.open("cache-reseravcion").then((cache) =>{
            cache.addAll(["index.html", "main.js","styles.css","manifest.json","letra2.ttf"]);

        })
    );
    
});





self.addEventListener('activate', evt=> {
    console.log('service worker activado');
});
self.addEventListener('sync', event => {
    if (event.tag =='sync-messages') {
       event.waitUntil('syncMessages');
    }
 })