const config = require('../config.json');
const URL = config.url;
const color = "#"+config.color;

const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageAttachment, MessageEmbed, MessageActionRow, MessageButton  } = require('discord.js');
const file = new MessageAttachment('../archive/pics/unknown3.png');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('deploy')
		.setDescription('A command to learn how deploy your program!.'),
	async execute(interaction) {
  
    if(interaction.inGuild){
      interaction.guild.channels.fetch(interaction.channelId).then(Channel =>{
        console.log("["+Channel.name+"] <"+interaction.member.nickname+"> : "+interaction.commandName);
        const exampleEmbed = new MessageEmbed()
        .setColor(color)
        .setTitle('Deploying your program!')
        .addField('Step one:',"Open `command prompt`(WINDOWS Key + search CMD).",false)
        .addField('Step two:',"Go to the directory of your project using `cd C:\\ProjectDir`.",false)
        .addField('Step Three:',"Now that we are in our projects directory we can setup `Node.js` for our project. To do this, type `npm install node` into Command Prompt.",false)
        .addField('Step Four',"Now, to run our `main.js` file, type in `command prompt`, `node main.js`. Inside of `command prompt`, you should see \"Hello World!\"",false)
        .setTimestamp()
        .setImage('attachment://unknown3.png')
        .setFooter('Instead of using C:\\ProjectDir, use the directory of your project.');
        interaction.reply({ embeds: [exampleEmbed], ephemeral: true, files: [file] });
      })
      
    }else{
      console.log("[PRIVATE] <"+interaction.member.nickname+"> : "+interaction.commandName);
    }
    
	}
};