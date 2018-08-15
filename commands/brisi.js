exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Koliko poruka da brišem? (2-100)");
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Ne mogu da izbrišem poruke zbog: ${error}`));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["briši", "bris"],
  permLevel: "Administrator"
};

exports.help = {
  name: "brisi",
  category: "Administracija",
  description: "Briše poslednjih 2-100 poruka u trenutnom kanalu",
  usage: "brisi 2-100"
};