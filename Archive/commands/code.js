const config = require('../config.json');
const URL = config.url;
const color = "#"+config.color;
const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageAttachment, MessageEmbed, MessageActionRow, MessageButton  } = require('discord.js');
const file = new MessageAttachment('../archive/pics/unknown2.png');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('code')
		.setDescription('A command to to learn about writing your first line of code in Javascript'),
	async execute(interaction) {
  
    if(interaction.inGuild){
      interaction.guild.channels.fetch(interaction.channelId).then(Channel =>{
        console.log("["+Channel.name+"] <"+interaction.member.nickname+"> : "+interaction.commandName);
        const exampleEmbed = new MessageEmbed()
        .setColor(color)
        .setTitle('Your first line of code! ')
        .addField('Step One:',"Open up your `main.js` file in your text editor.",false)
        .addField('Step Two:',"Write `console.log(\"Hello World!\");` into the `main.js` file.",false)
        .addField('Step Three:',"Save your `main.js` file.",false)
        .setTimestamp()
        .setImage('attachment://unknown2.png')
        .setFooter('For the code repo for this lesson ~ /coderepo');
        interaction.reply({ embeds: [exampleEmbed], ephemeral: true, files: [file] });
      })
      
    }else{
      console.log("[PRIVATE] <"+interaction.member.nickname+"> : "+interaction.commandName);
    }
    
	}
};