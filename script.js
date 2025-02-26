let tg = window.Telegram.WebApp;

function sendCommand(command) {
    tg.sendData(command);
    tg.close();
}

// Инициализация WebApp
tg.expand();
tg.ready();