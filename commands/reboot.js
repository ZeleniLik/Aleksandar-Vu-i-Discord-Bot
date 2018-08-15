exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  await message.reply("Ok, odoh da spavam..");
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  });
  process.exit(1);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["spavaj"],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "spavaj",
  category: "Sistem",
  description: "Govori botu da ide da spava.",
  usage: "reboot"
};