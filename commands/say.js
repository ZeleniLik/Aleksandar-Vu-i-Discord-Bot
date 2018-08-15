exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const sayMessage = args.join(" ");
    message.delete(); 
    message.channel.send(sayMessage);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reci", "kaži", "kazi"],
  permLevel: "Korisnik"
};

exports.help = {
  name: "reci",
  category: "Zabava",
  description: "Pričam šta mi kažeš. Ne moraš da budeš Vučić da bi to radilo, mada je poželjno :P",
  usage: "reci bilo šta"
};