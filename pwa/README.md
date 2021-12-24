# PWA example

This is an installable PWA example that also shows how to trigger a service worker event regularly (in this case, to update the cache) as well as how to trigger events at any time from our app.

The cache is only updated from "v1" to "v2" as an example, we will need to introduce the logic to retrieve and compare app versions.

# Periodic sync

Periodic sync is a sync event that's triggered regularly in a service worker. In this case, it creates a new version of the cache ("v2") and deletes the existing one ("v1"). For now, it doesn't check whether the version is different or not.

We create this event in the periodic-sync.js file, making sure we have the permissions. This is important, as periodic sync only works for installed PWAs, so make sure the app is intalled (icon at the right end of the search bar in the navigator). 

In our setInterval, and provided we have connection, the service worker will trigger the periodic-sync event. In it, we create a new version of the cache ("v2") and delete the existing ones (in this case, only "v1").

# Custom service worker event

In our update-version.js file, we have an event that is triggered when we click on the "Update version" button in the UI. It will do the same as the periodic sync (with the exception of showing an "Updating" message and refreshing the page).

The logic in the service worker is the same as what we saw for the periodic sync, with the exception that we refresh the page. This will in fact allow our app to refetch all the files and take the "v2" ones automatically, updating the UI with any changes we introduced, which doesn't happen with our periodic sync yet.

# TODO
- Find out about how different browsers can alter the installation permissions for periodic sync.
- Add feature to handle more than these two hardcoded versions and trigger update only if there's a new version.
- Make the periodic sync event also show an "updating" banner and refresh page, just like the button.
