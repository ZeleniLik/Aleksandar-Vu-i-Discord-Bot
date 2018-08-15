exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Nisi rekao koga :(");
    if(!member.bannable) 
      return message.reply("Ne daju mi Merkelova i Trump da ga banujem :(");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "državne sigurnosti.";
    await member.ban(reason)
      .catch(error => message.reply(`Izvini, ${message.author} nisam mogao da banujem zbog : ${error}`));
    message.reply(`${member.user.tag} je banovan od strane ${message.author.tag} zbog: ${reason}`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["banuj"],
  permLevel: "Administrator"
};

exports.help = {
  name: "ban",
  category: "Administracija",
  description: "Banuj nekoga sa servera(komanda dostupna samo za admine).",
  usage: "ban @user"
};