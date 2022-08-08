import client from '../main.js';

function twitchCommand () {
    client.on("messageCreate", msg => {
        if(msg.content === "!twitch") {
            msg.reply("https://twitch.tv/nykeau");
        }
    })
};

function youtubeCommand () {
    client.on("messageCreate", msg => {
        if(msg.content === "!youtube") {
            msg.reply("https://www.youtube.com/channel/UCZHWhDMfIAxC3EUrwcKd-9g");
        }
    })
};

function tiktokCommand () {
    client.on("messageCreate", msg => {
        if(msg.content === "!tiktok") {
            msg.reply("https://www.tiktok.com/@nykeauu");
        }
    })
};

export {twitchCommand, youtubeCommand, tiktokCommand};