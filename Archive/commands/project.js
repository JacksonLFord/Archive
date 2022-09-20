const config = require('../config.json');
const URL = config.url;
const color = "#"+config.color;

const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageAttachment, MessageEmbed, MessageActionRow, MessageButton  } = require('discord.js');
const file = new MessageAttachment('../archive/pics/unknown.png');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('project')
		.setDescription('A command to learn how to create a project.'),
	async execute(interaction) {
  
    if(interaction.inGuild){
      interaction.guild.channels.fetch(interaction.channelId).then(Channel =>{
        console.log("["+Channel.name+"] <"+interaction.member.nickname+"> : "+interaction.commandName);
        const exampleEmbed = new MessageEmbed()
        .setColor(color)
        .setTitle('Creating a program.(<- click for visual studio code download page)')
        .setURL('https://code.visualstudio.com/')
        .addField('Step one:',"Create a folder for our project. I'll name our project `Database Project`.",false)
        .addField('Step two:',"We need to create the `main` file for our program. Depending on what you are making, it can be many different things. For most programs, `main.js` will work. This will be the file that holds the central meeting point for all of our code.",false)
        .setTimestamp()
        .setImage('attachment://unknown.png')
        .setFooter('p.s. : Im using visual studio code, but any text editor will work!');
        interaction.reply({ embeds: [exampleEmbed], ephemeral: true, files: [file] });
      })
      
    }else{
      console.log("[PRIVATE] <"+interaction.member.nickname+"> : "+interaction.commandName);
    }
    
	}
};