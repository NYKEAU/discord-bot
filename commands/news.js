import client from '../main.js';

async function getLastNews() {
    let channel = await client.channels.fetch("862327103332941834");
    client.on("message", msg => {
        if(msg.content === "!lastNews") {
            channel.messages.fetch({limit: 50}).then(messages => {
                msg.reply(messages.filter(m => m.author.id === '268478587651358721').first().content);
            })
        }
    })
};

export {getLastNews};