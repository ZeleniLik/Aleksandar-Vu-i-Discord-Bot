module.exports = async client => {
  // Log that the bot is online.
  client.logger.log(`[READY] ${client.user.tag}, spremna da služim ${client.users.size} korisnika u ${client.guilds.size} servera.`, "ready");

  // Make the bot "play the game" which is the help command with default prefix.
  client.user.setActivity(`ej mala pomoć`);
  
  //duga
  
  setInterval(client.changeColor, 61000);
};