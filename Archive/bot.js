
const config = require('./config.json');
const { token, color, url, clientid, guildid, doc } = require('./config.json');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION','GUILD_MEMBER','USER'], intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS] });
client.commands = new Collection();
const fs = require('fs');
const { MessageEmbed, MessageActionRow, MessageButton  } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes, IntegrationExpireBehavior } = require('discord-api-types/v9');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const commands = [];
const mongoose = require('mongoose');
const { GeneralInfo } = require('./model');
const { SlashCommandBuilder } = require('@discordjs/builders');
mongoose.connect(
	url, {
		 useNewUrlParser: true
	 })
	 .then()
	 .catch(err => console.log(err));
	 
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	
	client.commands.set(command.data.name, command);
    commands.push(command.data.toJSON());
	
}

const rest = new REST({ version: '9' }).setToken(token);
	(async () => {
		
		try {
			console.log('Started refreshing application (/) commands.');
	
			await rest.put(
				Routes.applicationGuildCommands(clientid, guildid),
				{ body: commands },
			);
	
			console.log('Successfully reloaded application (/) commands.');
		} catch (error) {
			console.error(error);
		}
	})();
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
    console.log(doc+" has logged in. Guild id : ["+guildid+"]");
    
});
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command)return;
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
	
	
});

client.login(token);
