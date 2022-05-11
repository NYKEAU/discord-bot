import client from '../main.js';

function twitchCommand () {
    client.on("messageCreate", msg => {
        if(msg.content === "!twitch") {
            msg.reply("https://twitch.tv/nykeau");
        }
    })
};

export {twitchCommand};