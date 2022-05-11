import discord from 'discord.js';
import path from 'path';
import dotenv from 'dotenv/config';
import {getLastNews, reactionRole, youtubeCommand, twitchCommand, tiktokCommand} from './index.js';

const client = new discord.Client({intents: [
    discord.Intents.FLAGS.GUILDS,
    discord.Intents.FLAGS.GUILD_MESSAGES
]});

client.on("ready", () => {
    console.log(`Connecté en tant que ${client.user.tag} (${client.user.username}) !`);
    getLastNews();
    youtubeCommand();
    twitchCommand();
    tiktokCommand();
    reactionRole();
    console.log("Fin");
})

client.on("message", msg => {
    if(msg.content.toLowerCase() === "salut") {
        msg.reply("Wesh wesh");
    }
})

client.login(process.env.TOKEN);

export default client;