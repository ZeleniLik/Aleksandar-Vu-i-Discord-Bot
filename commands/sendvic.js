exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (message.mentions.members.first() || message.guild.members.get(args[0])){
	let member = message.mentions.members.first() || message.guild.members.get(args[0]);
	message.channel.send (member + ", evo jedan sendvič za tebe!");
	message.channel.send ("https://i.imgur.com/bLat8pW.jpg");
	}
	else {
	message.reply ("Evo ti jedan sendvič:");
	message.channel.send ("https://i.imgur.com/bLat8pW.jpg");
	}
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sendvič", "podriguša", "dajsendvič"],
  permLevel: "Korisnik"
};

exports.help = {
  name: "sedvic",
  category: "Zabava",
  description: "Daje sendvič.",
  usage: "sendvic @user"
};