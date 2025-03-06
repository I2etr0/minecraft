const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: '192.168.0.147', // minecraft server ip
  username: 'Durachok', // username to join as if auth is `offline`, else a unique identifier for this account. Switch if you want to change accounts
  auth: 'offline', // for offline mode servers, you can set this to 'offline'
  port: 25565,              // set if you need a port that isn't 25565
  version: '1.20.1'           // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
  // password: '12345678'      // set if you want to use password-based auth (may be unreliable). If specified, the `username` must be an email
})

bot.once('spawn', function () {

    bot.chat('Привет, сосунки!!!!');
    
    });


bot.on('chat', function Hi (username,message) {
    
    if (message === "Ты бот?") {
    
        setTimeout(() => bot.chat(username + " , нет, это ты бот!"), 1000);
    
    } else {
    
        if(message !== "Ты бот?") return;
        
        setTimeout(() => bot.chat(username + " , я тебя не знаю"), 1000);
    
    }
});


// Log errors and kick reasons:
// bot.on('kicked', console.log)
// bot.on('error', console.log)