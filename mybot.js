const mineflayer = require('mineflayer')


const bot = mineflayer.createBot({
//   host: '192.168.0.147',        // local server ip
  host: '26.57.3.209',          // host for Sakotano play
  username: 'Durachok',         // username to join as if auth is `offline`, else a unique identifier for this account. Switch if you want to change accounts
  auth: 'offline',              // for offline mode servers, you can set this to 'offline'
  port: 55190,                  // port for Sakotano play
  // port: 25565,                  // local port (not_obyazatelno)
  version: '1.20.1'             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
})


bot.on('chat', function Hi (username,message) {
    if(username === "MyBot") return;
    if (message === "тп ко мне" && username === "ABOBA") {
        setTimeout(() => bot.chat("/tp " + username), 1000);
    } else {
        if(message !== "Ты бот?") return;
        setTimeout(() => bot.chat(username + " , я тебя не понимаю"), 
    );
    }});


// function walkForward() {
//     bot.setControlState('forward', true); // Включаем движение вперед
// }




bot.once('spawn', function () {
    bot.chat('Привет, сосунки!!!!');
    // walkForward(); // Начинаем движение 
});

// TODO: сделать чтобы он оборачивался
// TODO: сделать чтобы он ходил
// TODO: сделать чтобы он мог копать
// TODO: понять как задать размеры для копки
// TODO: сделать чтобы он мог строить

// Log errors and kick reasons:
// bot.on('kicked', console.log)
// bot.on('error', console.log)