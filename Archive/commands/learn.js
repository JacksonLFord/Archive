const config = require('../config.json');
const URL = config.url;
const color = "#"+config.color;
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton  } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('learn')
		.setDescription('A command to start the learning process!'),
	async execute(interaction) {
  
    if(interaction.inGuild){
      interaction.guild.channels.fetch(interaction.channelId).then(Channel =>{
        console.log("["+Channel.name+"] <"+interaction.member.nickname+"> : "+interaction.commandName);
        const exampleEmbed = new MessageEmbed()
        .setColor(color)
        .setTitle('Resources :')
        .addField('Getting started:',
        "`/node` ~ Installing `Node.js`\n"+
        "`/project` ~ Creating our project\n"+
        "`/code` ~ Writing our first line of code!\n"+
        "`/deploy` ~ Deploying our program!\n"+
        "",
        false)
        .setTimestamp()
        .setFooter('Keep in mind, these resources are in the order that you should do them in!');
        interaction.reply({ embeds: [exampleEmbed], ephemeral: true });
      })
      
    }else{
      console.log("[PRIVATE] <"+interaction.member.nickname+"> : "+interaction.commandName);
    }
    
	}
};