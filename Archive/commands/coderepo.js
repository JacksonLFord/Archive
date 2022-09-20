const config = require('../config.json');
const URL = config.url;
const color = "#"+config.color;
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton  } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('coderepo')
		.setDescription('A command to to learn about writing your first line of code in Javascript'),
	async execute(interaction) {
  
    if(interaction.inGuild){
    
        interaction.reply({ content: "```js\nconsole.log(\"Hello World!\");```", ephemeral: true });
     
      
    }else{
      console.log("[PRIVATE] <"+interaction.member.nickname+"> : "+interaction.commandName);
    }
    
	}
};