
const btnVersion = document.querySelector("#update-version-button");

btnVersion.addEventListener("click", (event) => {
    event.preventDefault();

    navigator.serviceWorker.ready.then(worker => {
        worker.active.postMessage('update-version');
    });

    setTimeout(() => {
        location.reload();
    }, 3000)
})