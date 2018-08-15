const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  message.channel.send(`= STATISTIKA =
:: Korišćenje memorije:: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
:: Budan sam već      :: ${duration}
:: Korisnika          :: ${client.users.size.toLocaleString()}
:: Servera            :: ${client.guilds.size.toLocaleString()}
:: Kanala             :: ${client.channels.size.toLocaleString()}
:: Discord.js verzija :: v${version}
:: Node verzija       :: ${process.version}`, {code: "asciidoc"});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["stat", "statistika"],
  permLevel: "Korisnik"
};

exports.help = {
  name: "stats",
  category: "Misc",
  description: "Daje neke korisne statistike.",
  usage: "stats"
};