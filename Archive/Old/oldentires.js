GeneralInfo.create({ 
    Name:"Wolfsbane Tree Bark",
    Hidden:"A very dark brown bark, with the roughness of a Pine tree. It smells refreshing, growing on the `[Unknown]`. It is very flexible and has a soft feel. It grows in the `[Unknown]` region.",
    Description:"A very dark brown bark, with the roughness of a Pine tree. It smells refreshing, growing on the `[Wolfsbane tree]`. It is very flexible and has a soft feel. It grows in the `[Midlight Forest]` region.",
    Affinities:["`[Unknown]`:`[Medium]`"]
    
  })
  GeneralInfo.create({ 
    Name:"Wolfsbane Tree",
    Hidden:"A very bright brown, sweet smelling, tree nearing 8 meters in height, covered in dark brown bark `[Unknown]` and blueish green leaves `[Unknown]`. From some branches, hang small grey stone ovals `[Unknown]`, ranging from 10cm to 13cm. This tree grows in the `[Unknown]` region.",
    Description:"A very bright brown, sweet smelling, tree nearing 8 meters in height, covered in dark brown bark `[Wolfsbane Tree Bark]` and blueish green leaves `[Britter Bracts]`. From some branches, hang small grey stone ovals `[Sweetcones]`, ranging from 10cm to 13cm. This tree grows in the `[Midlight Forest]` region.",
    Affinities:["`[Unknown]`:`[Medium]`"]
    
  });
  var Embed = new MessageEmbed()
  .setColor("#"+color)
  .setTitle("`[Unknown]`")
  .setDescription(document.Hidden)
  .addField("Affinities:","`[Unknown]`")
  .setFooter('Contact Mada#0062 for help');
  interaction.reply({embeds:[Embed], ephemeral: true });