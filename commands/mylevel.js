exports.run = async (client, message, args, level) => {
  const friendly = client.config.permLevels.find(l => l.level === level).name;
  message.reply(`Tvoj nivo dozvola je: ${level} - ${friendly}`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["dozvole"],
  permLevel: "Korisnik"
};

exports.help = {
  name: "dozvole",
  category: "Misc",
  description: "Govori ti tvoj nivo dozvola u trenutnom serveru.",
  usage: "mylevel"
};