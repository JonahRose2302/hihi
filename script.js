const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Funktion um den Nein-Knopf zu bewegen
function moveButton() {
    // Verfügbare Breite und Höhe des Fensters berechnen
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Wenn man mit der Maus über "Nein" fährt (Desktop)
noBtn.addEventListener('mouseover', moveButton);

// Wenn man auf "Nein" tippt (Handy)
noBtn.addEventListener('touchstart', moveButton); // Für Touchscreens
noBtn.addEventListener('click', moveButton);      // Fallback

// Hintergrund Herzen Animation erstellen
function createHearts() {
    const container = document.querySelector('.hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; 
    
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHearts, 300);

// --- "JA" Button Logik ---

yesBtn.addEventListener('click', function() {
    // 1. Benachrichtigung senden (Optional - siehe Anleitung unten)
    sendNotification();

    // 2. Weiterleitung zur Success Seite
    // Kleine Verzögerung, damit die Benachrichtigung rausgeht
    setTimeout(() => {
        window.location.href = "success.html"; 
    }, 500); 
});

function sendNotification() {
    // HIER KANNST DU DEINE BENACHRICHTIGUNG EINFÜGEN
    // Da GitHub Pages statisch ist, können wir keine Datei erstellen.
    // Aber wir können einen "Ping" an einen externen Dienst senden.
    
    // Wenn du Discord nutzt, füge hier deine Webhook URL ein (Anleitung unten im Text):
    const discordWebhookURL = "https://discord.com/api/webhooks/1468347990703079630/TNZwUSz4-BNPbBURHlrxPVoltWRiXnoIBv0lml3bV7D2dYJrXGF7ManZppwbW1dHmrta"; // Z.B. "https://discord.com/api/webhooks/..."

    if (discordWebhookURL) {
        fetch(discordWebhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: "❤️❤️❤️ Jemand hat JA gesagt! ❤️❤️❤️"
            })
        }).catch(err => console.error(err));
    }
}