
export const sendData = (data) => {
  fetch("http://localhost:3000/send/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },  
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => {
      // Open DB
      const request = window.indexedDB.open("MessagesDB", 1);
      
      // In case there is an error with request creation
      request.onerror = function (e) {
        console.log("error: " + e.target.errorCode);
      }
      
      // Creating the store
      request.onupgradeneeded = function (e) {      
        const db = request.result;
        let store;
  
        // We check if the store already exists to avoid an error on upgrade
        if (!db.objectStoreNames.contains("MessagesStore")) {
          // Create object store
          store = db.createObjectStore("MessagesStore", { autoIncrement: true });
        }
        // Create index inside of the store (this can be used to retrieve items)
        store.createIndex("message", "message", { unique: false });
      }

      // We perform a transaction
      request.onsuccess = function (e) {
        const db = request.result;
        // Start transaction
        const tx = db.transaction("MessagesStore", "readwrite");
        // Access object store
        const store = tx.objectStore("MessagesStore")
        // We select the index to be used to retrieve items
        store.index("message")

        // We add the data
        store.put(data)
        
        // We close the DB
        tx.oncomplete = function () {
          db.close()
        }
        
        // In case there's an error with the transaction
        db.onerror = function (e) {
          console.log("error: " + e.target.error)
        }
      }

      // We register a message-sync event in the service worker
      registerBackgroundSync();
      console.log("background sync registered", err);
    });
};

const registerBackgroundSync = () => {
  navigator.serviceWorker.ready
    .then((swRegistration) => swRegistration.sync.register("message-sync"))
    .catch((err) => console.log(err));
};
