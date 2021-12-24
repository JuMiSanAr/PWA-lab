import { sendData } from "./service.js";

// Cache files
var cache_name = 'js-demo-folder';
var filesToCache = [
  './index.html',
  './service.js',
  './style.css',
  './online-status.js'
];

// INSTALL: triggered only once, when the sw is installed
self.addEventListener('install', function (event) {
  event.waitUntil(
    // cache.open accesses the matching cache object (in this case, "js-demo-folder")
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


// SYNC: waits for connection to be restablished and then posts the message
self.addEventListener("sync", (event)=> {
    if (event.tag === "message-sync") {
      // We pass the name of the db to open, and its version.
      // TODO: delete db when messages are sent (we will need to change the db version)
      const request = self.indexedDB.open("MessagesDB", 1);

      request.onsuccess = function (e) {
        const db = request.result;
        const tx = db.transaction("MessagesStore", "readwrite");
        const store = tx.objectStore("MessagesStore")
        store.index("message")

        db.onerror = function (e) {
          console.log("error: " + e.target.error)
        }

        const messages = store.getAll()
        messages.onsuccess = function (e) {
          messages.result.forEach(message => {
            // This time the messages will be printed as the .catch event won't be triggered
            sendData(message)
          })
        }

        tx.oncomplete = function () {
          db.close()
        }
      }      
    }
})



// Make browser load only cached files
// self.addEventListener('fetch', function (event) {
//   event.respondWith(caches.match(event.request));
// });

// Make browser load cached files first and fall back to network only if they're not found
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    // Check if any file in the cache matches the fetched url
    
    const r = await caches.match(e.request.url);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    
    // If there's a match, use it
    if (r) { return r; }
    
    // Otherwise, fetch the resource using the network
    const response = await fetch(e.request);

    // TO REFETCH AFTER CLEARING CACHE (not working as expected):
    // const split_request = e.request.url.split("/")
    // const file_name = './' + split_request[split_request.length - 1]
    
    // if (filesToCache.includes(file_name)) {      
    //   const cache = await caches.open(cache_name);
    //   console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    //   cache.put(e.request, response.clone())
    //   // .then(() => {        
    //   //   caches.match(e.request.url).then((r) => {
    //   //     return r
    //   //   })
    //   // });
    // }

    return response;
  })());
});

// The "message" event is used to create custom trigger events.
// To remove the cache, we use postMessage with the key "delete-cache"
// which will trigger the event that matches that key.
self.addEventListener('message', function (event) {  
  if (event.data === 'delete-cache') {
    console.log('deleting cache')
    // Gets all cached keys
    event.waitUntil(caches.keys().then((keyList) => {
      // This map loop is added in case there was more than one cache (in this case we only have 1, 'js-demo-folder').
      // If there were multiple keys and we only wanted to delete a specific one
      // we could do if(key === cache_name) inside the map loop
      return Promise.all(keyList.map((key) => {
        // Deletes cache
        return caches.delete(key);
      }))
    }));
  }
});

// TOOD: 
// measure performance of indexeddb vs localstorage
// (generate 2k about records with images and compare loading speed)
// add reports in related cards

// look for articles about storage pros and cons, e.g.:
// https://blog.bitsrc.io/browser-storage-options-and-their-state-in-2021-6808b949087a