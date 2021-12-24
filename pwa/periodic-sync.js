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
                    // NOTE: the minimum may change depending on various factors:
                    // https://github.com/WICG/background-sync/blob/main/explainers/periodicsync-explainer.md#:~:text=The%20API%20allows,be%20the%20same
                    // To test the periodic sync event at any time, go to
                    // dev tools > application > service workers > periodic sync > *introduce name of periodic sync event ('my-periodic-sync') > click button
                    minInterval: 24 * 60 * 60 * 1000, // 1 day
                });
                console.log('Periodic background sync registered!');
            } catch (e) {
                console.error(`Periodic background sync failed:\n${e}`);
            }
        }
    }
}