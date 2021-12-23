// const registerPeriodicSync = () => {
//     navigator.serviceWorker.ready
//     .then((swRegistration) => {
//         swRegistration.periodicSync.register('my-periodic-sync', {minInterval: 1000})
//     })
//     .catch((err) => console.log('Periodic Sync could not be registered!', err));
// };

// registerPeriodicSync()

// Check if service workers are supported
if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.ready;
    // Check if periodicSync is supported
    if ('periodicSync' in registration) {
        // Request permission
        const status = await navigator.permissions.query({
            name: 'periodic-background-sync',
        });
        if (status.state === 'granted') {
            try {
                // Register new sync every 24 hours
                await registration.periodicSync.register('my-periodic-sync', {
                    minInterval: 1000, // 1 second
                });
                console.log('Periodic background sync registered!');
            } catch (e) {
                console.error(`Periodic background sync failed:\n${e}`);
            }
        }
    }
}