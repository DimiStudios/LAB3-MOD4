function updateClock() {
    var now = new Date();
    var options = { timeZone: 'America/Lima', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDateTime = now.toLocaleString('es-PE', options);

    document.getElementById('clock').textContent = formattedDateTime;
}

updateClock();
setInterval(updateClock, 1000); 