const config = require('../config.json');
const URL = config.url;
const color = "#"+config.color;
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton  } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('node')
		.setDescription('A command to learn about Node.js!'),
	async execute(interaction) {
  
    if(interaction.inGuild){
      interaction.guild.channels.fetch(interaction.channelId).then(Channel =>{
        console.log("["+Channel.name+"] <"+interaction.member.nickname+"> : "+interaction.commandName);
        const exampleEmbed = new MessageEmbed()
        .setColor(color)
        .setTitle('Node.js & npm (<- click for Node.js download page)')
        .setURL('https://nodejs.org/en/download/')
        .addField('Install `Node.js` and `npm` from:',"https://nodejs.org/en/download/",false)
        .addField('What is `Node?`','*`"Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications."`* ~ *Code Academy*.',false)
        .addField('What is `npm`?','When you install `Node.js`, it also installs `npm`, which is: *`"A package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry."`*')
        .setTimestamp()
        .setFooter('If you need any help, contact Mada#0062');
        interaction.reply({ embeds: [exampleEmbed], ephemeral: true });
      })
      
    }else{
      console.log("[PRIVATE] <"+interaction.member.nickname+"> : "+interaction.commandName);
    }
    
	}
};