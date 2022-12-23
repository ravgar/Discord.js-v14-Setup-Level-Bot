const { Client } = require("discord.js");
const client = new Client({ intents: ["Guilds"] });

client.config = require("./config.json")
client.login(client.config.token).then( () => {
client.user.setActivity(`ravgar was here!`);
console.log(`${client.user.username} Başarıyla Giriş Yaptı!`);
})  
const { joinVoiceChannel } = require("@discordjs/voice");
           setInterval(() => {
            let kanal = client.channels.cache.get(client.config.botseskanal);
            if (!client.channels.cache.get(client.config.botseskanal)) return;
    joinVoiceChannel({
      channelId: kanal.id,
      guildId: kanal.guild.id,
      adapterCreator: kanal.guild.voiceAdapterCreator,
      selfDeaf: true,
      selfMute: true
    });
})  

