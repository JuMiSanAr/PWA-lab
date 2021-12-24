window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

const statusIndicator = document.querySelector("#online-indicator");

// For the gzt app, this function should also run on mounted()
function updateOnlineStatus() {
    const condition = navigator.onLine ? "online" : "offline";
    statusIndicator.className = condition
}