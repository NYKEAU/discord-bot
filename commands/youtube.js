import client from '../main.js';

function youtubeCommand () {
    client.on("messageCreate", msg => {
        if(msg.content === "!youtube") {
            msg.reply("https://www.youtube.com/channel/UCZHWhDMfIAxC3EUrwcKd-9g");
        }
    })
};

export {youtubeCommand};