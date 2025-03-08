console.log('clock.js loaded');

window.onload = function() {
function updateClock() {
    let now = new Date();
    let hours =
    now.getHours().toString().padStart(2, '0');
    let minutes =
    now.getMinutes().toString().padStart(2, '0');
    let seconds =
    now.getSeconds().toString().padStart(2, '0');

    let time = `${hours}:${minutes}:${seconds}`;

    document.getElementById('time').textContent = time;
}
setInterval(updateClock, 1000);
updateClock();
}