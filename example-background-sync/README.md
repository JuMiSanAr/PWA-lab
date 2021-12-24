# example-background-sync

In this example we use IndexedDB and a service worker to:
- Cache files to be able to intercat with the app when there's no connection.
- Store data in the IndexedDB if there's no connection and send it once a new connection is detected.

In addition, we have a simple online / offline indicator in the form of a green / red circle.

# Background-sync

The first time the app is loaded, the service worker (service-worker.js) is installed. It caches the files specified in the variable "filesToCache" and stores them in cache under the name in "cache_name".

To send messages, the backend service must be running (access the backend folder and use command "node index.js").

Every time a message is sent, the sendData function (in service.js) is triggered. If there's a connection, the fetch request will go through and the message will be printed in the console.

However, if there's no connection, the .catch event will be triggered and we will have to interact with the service worker.

## Storing and retrieving data offline
### Storing data in the DB

Steps to interact with IndexedDB (taken from [here](https://www.youtube.com/watch?v=g4U5WRzHitM)):
- Open DB
- Create / retrieve object store in DB
- Perform transactions
- Close DB

See comments in service.js for more information.

The basic events when sending an IndexedDB request are:
- onerror (if there was an error creating the request)
- onupgradeneeded (first time we create a store object or any time that we want to update its structure)
- onsuccess (to perform the transactions)

### Adding a sync event

Once the data is stored, we want to schedule a background sync event through the service worker. For that, we use a function (registerBackgroundSync), which registers a "sync" event named "message-sync" ("sync" is a built-in event which is triggered when connection is restablished, and "message-sync" is the identifier we use to tell the service worker what actions to perform in our particular scenario).

Once connection is restablished, the service worker takes care of retrieving the data from IndexedDB end re-triggering the sendData function, which will be successful this time.

# Online indicator

The online indicator simply uses navigator.onLine and a listener on online / offline events on window to trigger a UI change.

# TODO

- Delete indexedDB entries once they're synced.
- The online indicator goes online on page refresh, even though there's no connection. In a VueJS app, an update should be triggered on mounted().