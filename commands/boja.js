exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const settings = message.settings;
  if (settings.bojeEnabled === "true"){
	const roleName = args.join("");
	const role = message.guild.roles.find("name", roleName);
	if (!role){
	message.reply("Ta boja ne postoji!");
  }
  else{
	if (roleName.startsWith("b_")){
		if(message.member.roles.find("name", roleName)){
			message.reply("Već imaš tu boju!");
		}
		else{
			var rolovi = message.member.roles;
			rolovi.forEach( c => {
				if (c.name.startsWith("b_")) {
					message.member.removeRole(c).catch(console.error);
				}
			});
			message.member.addRole(role).catch(console.error);
			message.reply("Ok, dao sam ti boju "+ role);
		}
	}
	else{
		message.reply("Ne dam ti "+roleName+" !!!");
	}
  }
  }
  else{
	message.reply("Promena boja nije dostupna na ovom serveru. Zamoli nekog od administratora da je uključi.");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["dajboju","oćuboju","hoćuboju"],
  permLevel: "Korisnik"
};

exports.help = {
  name: "boja",
  category: "Misc",
  description: "Menja boju tvog imena.Za dostupne boje pošalji komandu **boje**.",
  usage: "boja ime_boje"
};