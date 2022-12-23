const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const mongoose = require('mongoose');
const { bgBlue, black, green } = require("chalk");
const fs = require('fs');
const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);
const { Punitives } = require("../Settings/Schemas")
const client = new Client({ intents: ["Guilds"] });
client.config = require("./config.json")
class ravgar extends Client {
    constructor(options) {
        super({
            options,
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildEmojisAndStickers,
                GatewayIntentBits.GuildIntegrations,
                GatewayIntentBits.GuildWebhooks,
                GatewayIntentBits.GuildInvites,
                GatewayIntentBits.GuildVoiceStates,
                GatewayIntentBits.GuildPresences,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildMessageReactions,
                GatewayIntentBits.GuildMessageTyping,
                GatewayIntentBits.DirectMessages,
                GatewayIntentBits.DirectMessageReactions,
                GatewayIntentBits.DirectMessageTyping,
                GatewayIntentBits.MessageContent
            ],
            partials: [
                Partials.Channel,
                Partials.Message,
                Partials.User,
                Partials.GuildMember,
                Partials.Reaction
            ]
        })
client.login(client.config.token).then( () => {
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

