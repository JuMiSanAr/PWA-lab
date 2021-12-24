// Cache files
var cache_name = 'v1';
var filesToCache = [
  './index.html',
  './css/styles.css',
  './periodic-sync.js',
  './update-version.js'
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
    event.waitUntil(
      // cache.open accesses the matching cache object, or creates it if it doesn't exist (in this case, "v2")
      caches.open("v2").then(function (cache) {
        // cache.addAll adds all files in filesToCache to the selected cache object.
        // NOTE: if one single file fails to be loaded, none of the other files will be added either.
        // If only a single file wants to be added, we can use cache.add instead
        return cache.addAll(
          filesToCache
        );
      })
    );

    var cacheKeeplist = ["v2"];
    event.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(keyList.map  ((key) => {
          // Deletes cache entries which are not in our cacheKeeplist (i.e. "v2")
          if (cacheKeeplist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        }));
      })
    );
  }
});

  // The following logic is the same as the periodic sync.
  // This is only here to showcase how to send a completely custom event
  // at any time in our app and communicate with the service worker:
  // we use the "message" addEventListener. It takes an argument 
  // which will be used to identify the actions for the sw (event.data).
self.addEventListener('message', function (event) {
  if(event.data === "update-version"){
    event.waitUntil(
      caches.open("v2").then(function (cache) {

        return cache.addAll(
          filesToCache
        );
      })
    );

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
