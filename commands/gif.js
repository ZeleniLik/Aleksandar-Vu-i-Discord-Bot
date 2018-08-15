const snekfetch = require('snekfetch');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const url = "https://api.tenor.com/v1/search?key=HBB6P0OIIGZL&limit=1&q="
	var parsed;
	try{
		snekfetch.get (url + args.join(" ")).then(r => 
		message.reply(r.body.results[0].media[0].gif.url));
		}catch (e) {
      console.log(e);
		}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dajgif"],
  permLevel: "Korisnik"
};

exports.help = {
  name: "gif",
  category: "Zabava",
  description: "Traži gif sa tenor.com'",
  usage: "gif ime gif-a"
};