import client from '../main.js';

function tiktokCommand () {
    client.on("message", msg => {
        if(msg.content === "!tiktok") {
            msg.reply("https://www.tiktok.com/@nykeauu");
        }
    })
};

export {tiktokCommand};