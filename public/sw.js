self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('airhorner').then(function(cache) {
        return cache.addAll([
          '/',
          '/_app.js',
          '/index.js',
          '/pages',
          '/styles',
          
        ]);
      })
    );
   });