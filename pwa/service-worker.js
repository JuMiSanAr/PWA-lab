// Cache files
var cache_name = 'v1';
var filesToCache = [
  './index.html',
  './css/styles.css'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    // cache.open accesses the matching cache object (in this case, "v1")
    caches.open(cache_name).then(function (cache) {
      // cache.addAll adds all files in filesToCache to the selected cache object.
      // NOTE: if one single file fails to be loaded, none of the other files will be added either.
      // If only a single file wants to be added, we can use cache.add instead
      return cache.addAll(
        filesToCache
      );
    })
  );
});


//If any fetch fails, it will look for the request in the cache and serve it from there first
// self.addEventListener('fetch', function (event) {
  // var updateCache = function (request) {
  //   return caches.open(cache_name).then(function (cache) {
  //     return fetch(request).then(function (response) {
  //       console.log('[PWA Test] add page to offline ' + response.url)
  //       return cache.put(request, response);
  //     });
  //   });
  // };
  
  // event.waitUntil(updateCache(event.request));

  // event.respondWith(
  //   fetch(event.request).catch(function (error) {
  //     console.log('[PWA Test] Network request Failed. Serving content from cache: ' + error);

  //     //Check to see if you have it in the cache
  //     //Return response
  //     //If not in the cache, then return error page
  //     return caches.open(cache_name).then(function (cache) {
  //       return cache.match(event.request).then(function (matching) {
  //         var report = !matching || matching.status == 404 ? Promise.reject('no-match') : matching;
  //         return report
  //       });
  //     });
  //   })
  // );
// })

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

// Periodic sync
self.addEventListener('periodicsync', event => {
  if (event.tag == 'my-periodic-sync') {
    console.log("periodic sync")
    // Gets all cached keys
    event.waitUntil(caches.keys().then((keyList) => {
      // This map loop is added in case there was more than one cache (in this case we only have 1, 'v1').
      // If there were multiple keys and we only wanted to delete a specific one
      // we could do if(key === cache_name) inside the map loop
      return Promise.all(keyList.map((key) => {
        // Deletes cache
        return caches.delete(key);
      }))
    }));
    console.log('cache deleted')
  }
  // event.waitUntil(fetchAndCacheLatestNews());
});

// Custom calls using postMessage 
self.addEventListener('message', function (event) {
  // Updates the cache version from v1 to v2.
  // It's called from update-version.js
  if(event.data === "update-version"){
    event.waitUntil(
      // cache.open accesses the matching cache object (in this case, "pwa-demo-folder")
      caches.open("v2").then(function (cache) {
        // cache.addAll adds all files in filesToCache to the selected cache object.
        // NOTE: if one single file fails to be loaded, none of the other files will be added either.
        // If only a single file wants to be added, we can use cache.add instead
        return cache.addAll(
          filesToCache
        );
      })
    );

    // Put in place v2 of the cache
    var cacheKeeplist = ["v2"];
    
    event.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (cacheKeeplist.indexOf(key) === -1) {            
            return caches.delete(key);
          }
        }));
      })
    );
  }
});

// TODO: update cache on sync:
// the periodic-sync should basically do the same as the manual button 