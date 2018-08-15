exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const roleName = args.join("");
  const role = message.guild.roles.find("name", roleName);
  
  if (roleName === "dostupni"){
	var rolovi = message.guild.roles;
	let output = "Dostupni role-ovi:\n";
	rolovi.forEach( c => {
      if (c.name.startsWith("+")) {
        output += c.name;
		output += ", "
      }
    });
	output= output.slice(0,-2);
	message.reply(output);
  }
  
  else if (!role){
	message.reply("Taj role ne postoji!");
  }
  else{
	if (roleName.startsWith("+")){
		if(message.member.roles.find("name", roleName)){
			message.reply("Već imaš taj role!");
		}
		else{
			message.member.addRole(role).catch(console.error);
			message.reply("Ok, dao sam ti role");
		}
	}
	else{
		message.reply("Ne dam ti "+roleName+" !!!");
	}
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["dajrole", "gimme", "gimmerole", "jasam"],
  permLevel: "Korisnik"
};

exports.help = {
  name: "daj",
  category: "Misc",
  description: "Daje ti role i pristup kanalima koji dolaze uz taj role. Dostupne role-ove možete dobiti pomoću komande daj dostupni.",
  usage: "daj +role-ime"
};