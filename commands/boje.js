exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const settings = message.settings;
  if (settings.bojeEnabled === "true"){
	var rolovi = message.guild.roles;
	let output = "Dostupne boje:\n";
	rolovi.forEach( c => {
      if (c.name.startsWith("b_")) {
        output += c.name;
		output += ", "
      }
    });
	output= output.slice(0,-2);
	message.reply(output);
  }
  else{
	message.reply("Promena boja nije dostupna na ovom serveru. Zamoli nekog od administratora da je uključi.");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["dajboje"],
  permLevel: "Korisnik"
};

exports.help = {
  name: "boje",
  category: "Misc",
  description: "Prikazuje spisak dostupnih boja.",
  usage: "boje"
};