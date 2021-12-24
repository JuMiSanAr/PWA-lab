
const btnVersion = document.querySelector("#update-version-button");
const header = document.querySelector("#version-number");

btnVersion.addEventListener("click", (event) => {
    event.preventDefault();

    navigator.serviceWorker.ready.then(worker => {
        worker.active.postMessage('update-version');
        header.innerHTML = "updating"
    });
    
    setTimeout(() => {
        location.reload();
    }, 3000)
})