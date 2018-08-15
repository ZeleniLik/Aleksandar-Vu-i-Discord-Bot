exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Nisi rekao koga :(");
    if(!member.kickable) 
      return message.reply("Ne daju mi Merkelova i Trump da ga kickujem :(");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "državne sigurnosti.";
    await member.kick(reason)
      .catch(error => message.reply(`Jbg, ${message.author} Nisam mogao da kickujem zbog : ${error}`));
    message.reply(`${member.user.tag} je kickovan od strane ${message.author.tag} zbog: ${reason}`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["isteraj"],
  permLevel: "Moderator"
};

exports.help = {
  name: "kick",
  category: "Administracija",
  description: "Istera korisnika sa servera",
  usage: "kick @korisnik"
};