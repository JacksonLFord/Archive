const config = require('../config.json');
const { token, color, url, clientid, guildid, doc } = require('../config.json');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { GeneralInfo } = require('../model');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('register')
		.setDescription('A command to register one\'s self.'),
	async execute(interaction) {
  
    if(interaction.inGuild){
      
      interaction.guild.channels.fetch(interaction.channelId).then(Channel =>{
        console.log("["+Channel.name+"] <"+interaction.member.nickname+"> : "+interaction.commandName);
      })
      
    }else{
      console.log("[PRIVATE] <"+interaction.member.nickname+"> : "+interaction.commandName);
    }
    interaction.reply("You are now registered!");
    
    
	}
};