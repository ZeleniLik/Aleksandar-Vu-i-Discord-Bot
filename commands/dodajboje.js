exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const settings = message.settings;
  if (settings.bojeEnabled === "true"){
	message.reply("Dodajem boje:");
	for (var key in client.config.colorSettings){
		var currentRole = message.guild.roles.find("name", key);
		
		if (currentRole === null){
			message.reply("Role "+key + " je dodata.");
			message.guild.createRole({
				name: key,
				hoist: false,
				mentionable: false,
				color: client.config.colorSettings[key],
			}).catch(console.error);
		}
		else{
			message.reply ("Role "+ key + " već postoji.");
		}
	}
	if (settings.dugaEnabled==="true"){
		var currentRole = message.guild.roles.find("name", "b_duga");
		if(currentRole=== null){
			message.guild.createRole({
				name: "b_duga",
				hoist:false,
				mentionable: false,
			}).catch(console.error);
			message.reply("Role b_duga je dodata.");
		}
		else{
			message.reply("Role b_duga već postoji.");
		}
	};
  }
  else{
	message.reply("Ova komanda nije dostupna na ovom serveru. Uključi je tako što ćeš poslati komandu **prefix set edit bojeEnabled true**");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Administrator"
};

exports.help = {
  name: "dodajboje",
  category: "Administracija",
  description: "Dodaje role-ove sa bojama.",
  usage: "dodajboje"
};