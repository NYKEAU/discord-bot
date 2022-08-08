import client from '../main.js';
import discord from 'discord.js';

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const config = require("../config.json")

function reactionRole () {
    client.on('ready', () => {
        if (!config["reaction-role"]) {
            console.warn('Attention, aucuns rôle n\'a été attribué à cette fonction. Vérifiez : config.json (reaction-role).')
        }
    })

    client.on("messageCreate", async message => {
        if(message.author.bot) return false;

        if(message.content === "!role") {
            const Role = await message.guild.roles.fetch(config["reaction-role"]);

            if (!Role) return message.channel.send(`Impossible de trouver un rôle avec l'ID \`${config["reaction-role"]}\`. Veuillez vérifier si \`config.json (reaction-role)\` contient un ID valide.`);

            const Filter = (reaction, user) => user.id == message.author.id;

            console.log(Role);
            const Embed = new discord.MessageEmbed().setDescription(`Choisissez un rôle : ${Role.name}`);

            const reactionMessage = await message.channel.send({embeds:[Embed]});

            await reactionMessage.react("👍");

            reactionMessage.awaitReactions(Filter, {max: 1, time: 30000, errors: ["time"]}).then(collected => {
                const reaction = collected.first();

                switch(reaction.emoji.name) {
                    case "👍":
                        if(message.member.roles.cache.has(Role.id)) {return reactionMessage.edit(new discord.MessageEmbed().setDescription("Vous possédez déjà ce rôle ! (\`${Role}\`)"))};

                        message.member.roles.add(Role).then(reactionMessage.edit(new discord.MessageEmbed().setDescription("Rôle ajouté ! (\`${Role}\`)")));

                        reaction.remove();

                        break
                }
            })
        }
    })
};

export {reactionRole};