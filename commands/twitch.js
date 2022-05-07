import client from '../main.js';

function twitchCommand () {
    client.on("message", msg => {
        if(msg.content === "!twitch") {
            msg.reply("https://twitch.tv/nykeau");
        }
    })
};

export {twitchCommand};