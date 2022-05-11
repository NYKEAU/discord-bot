import client from '../main.js';

function tiktokCommand () {
    client.on("messageCreate", msg => {
        if(msg.content === "!tiktok") {
            msg.reply("https://www.tiktok.com/@nykeauu");
        }
    })
};

export {tiktokCommand};