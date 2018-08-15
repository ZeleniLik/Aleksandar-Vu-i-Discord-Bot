exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  var textArrayKad = [
		' za par meseci.',
		' u narednim danima.',
		' sledeće godine.',
		' krajem godine.',
		' početkom sledeće godine.',
		' krajem sledeće godine.',
		' najkasnije 2020.-te godine.',
		' najkasnije 2021.-ve godine.',
		' najkasnije 2019.-te godine.',
		' do nove godine.'
	];
	
	var textArrayObecanje = [
		'Ulazimo u EU',
		'Veće plate ocekujemo',
		'Očekujemo 100 000 novih radnih mesta',
		'Nastavak dijaloga sa Prištinom očekujemo',
		'Prosečna plata u Srbiji će biti 600 evra',
		'Imaćemo pola miliona Kineskih turista',
		'Smanjićemo poreze i doprinose na zarade',
		'Biće smenjeni gotovo svi direktori javnih preduzeća, veoma brzo,',
		'Izgradnja kule Beograda na vodi će biti završena',
		'Povećaćemo minimalnu cenu rada',
		'Rešićemo slučajeve spornih privatizacija',
		'Ako bi sve išlo po planu, a mi mislimo da će svakako ići bolje, deficit republičkog budzeta bi bio 2,87 odsto',
		'Procedure oko izgradnje ovih jeftinih stanova mogle bi da počnu odmah i prvi stanovi mogli bi da budu završeni',
		'Reći cu da je Srbija zaslužila, posle pregovora u Briselu, da dobije otvorena poglavlja i ocekujem otvaranje poglavlja'
	]
	
	var randomNumber = Math.floor(Math.random()*textArrayObecanje.length);
	var randomNumberKad = Math.floor(Math.random()*textArrayKad.length);
	
	message.reply (textArrayObecanje[randomNumber] + textArrayKad[randomNumberKad]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["obećaj","laži","lazi"],
  permLevel: "Korisnik"
};

exports.help = {
  name: "obecaj",
  category: "Zabava",
  description: "Vučić k\'o Vučić, samo obećava...",
  usage: "obecaj"
};