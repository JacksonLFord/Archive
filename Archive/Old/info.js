const config = require('../config.json');
const URL = config.url;
const color = config.color;
const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton  } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const Fuse = require('fuse.js')
const { GeneralInfo } = require('../model');
module.exports = {
    data: new SlashCommandBuilder()
        .setName("info")
        .setDescription('A command to find info.')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('Search Input')
                .setRequired(true))
        .addUserOption(option =>
             option.setName('user')
             .setDescription('User to send the info(Optional)').setRequired(false)),
    async execute(interaction) {
        const string = interaction.options.getString('input');
        GeneralInfo.find().then(docs=>{
            const options = {
                keys: ['Name'],
                findAllMatches : true
                
              }
              const user = interaction.options.getUser('User');
            const fuse = new Fuse(docs, options)
            var list = fuse.search(string)
            if(list.length==0){
                var Embed = new MessageEmbed()
                    .setColor("#"+color)
                    .setDescription("There is no entry for :`"+string+"`")
                    .setFooter('Contact Mada#0062 for help');
                interaction.reply({embeds:[Embed], ephemeral: true });
                
                

            }else if (list.length==1) {
                var Embed = new MessageEmbed()
                .setColor("#"+color)
                .setTitle("`[Unknown]`")
                .setDescription(list[0].item.Hidden)
                .addField("Affinities:","`[Unknown]`",false)
                .setFooter('Contact Mada#0062 for help');
                if(user){
                    user.createDM().then(chanell=>{
                        chanell.send({embeds:[Embed]})
                    })
                    interaction.reply({embeds:[new MessageEmbed()
                        .setColor("#"+color)
                        .setDescription("Message has been sent.")
                        .setFooter('Contact Mada#0062 for help')],ephemeral:true})
                    
                }else{
                    interaction.reply({embeds:[Embed], ephemeral: true });
                }
            } else {
                var entrymsg = "";
                var Options = [];
                const row = new MessageActionRow()
                for (let i = 0; i < list.length; i++) {
                    var num = 53 - list[i].item.Name.length;
                    var dept = "";
                    for(let f = 0; f<num;f++){
                        
                        dept = dept + " ";
                    }
                   
                    entrymsg = entrymsg+"``"+i+". "+list[i].item.Name+dept+"``\n"
                    Options.push( {
                        label: list[i].item.Name,
                        description: '',
                        value: i+"",
                    })
        
                }
                
                row.addComponents(
                    new MessageSelectMenu()
                        .setCustomId('select')
                        .setPlaceholder('Nothing selected')
                        .addOptions(Options),
                );
                var Embed = new MessageEmbed()
                .setColor("#"+color)
                .addField("Search results for :`"+string+"`.",entrymsg,false)
                .setFooter('Contact Mada#0062 for help');
                interaction.reply({embeds:[Embed], ephemeral: true, components: [row]  });
                
                
                const filter = i => i.user.id === interaction.user.id;
                const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });
                collector.on('collect', async i => {
                    
                    var Embed = new MessageEmbed()
                    .setColor("#"+color)
                    .setTitle("`[Unknown]`")
                    .setDescription(list[i.values[0]].item.Hidden)
                    .addField("Affinities:","`[Unknown]`",false)
                    .setFooter('Contact Mada#0062 for help');
                    
                    if(user){
                        user.createDM().then(chanell=>{
                            chanell.send({embeds:[Embed]})
                        })
                        i.reply({embeds:[new MessageEmbed()
                            .setColor("#"+color)
                            .setDescription("Message has been sent.")
                            .setFooter('Contact Mada#0062 for help')],ephemeral:true})
                        
                    }else{
                        i.reply({embeds:[Embed], ephemeral: true });
                    }
                   
                });

            }
            
              
            
        
        });
        
        
    }
}