/*
Created by enekopreis22
*/
const Discord = require('discord.js');
const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "eveoryone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: allIntents,
});

client.login(process.env.TOKEN);
const express = require('express')
const app = express();
const port = 3000
app.get('/', (req, res) => res.send('Thank you enekopreis22!'))
app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);
const charModMail = require('char-mod-mail');
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);

  //Important Changing Area
charModMail.ModMail(client, {
  guildID: "1432765820320088197", //put your guild id here
  categoryID: "1474486041082724514", //put your category id here
  staffRole: "1432775830110605504", //put your staff role id here
  embedColor: "#002bff", //change the hax color code if you want
  anonymousReply: false, //make it false if only the staff can reply the user or make it true so anyone can reply.
  closedTitle: "Ticket wurde geschlossen!",
  closedMessage: "Ein Staff Mitglied hat ihr Ticket geschlossen. Falls dein Problem nicht gelöst werden konnte, bitte nochmal ein Ticket öffnen. Danke!",
  staffOpenedTitle: "Jemand braucht hilfe!",
  staffOpenedMessage: "Neues Ticket wurde geöffnet. Bitte antworte so schnell wie möglich. Der Nutzer:",
  userOpenedTitle: "Ticket geöffnet",
  userOpenedMessage: "Ticket wurde erfolgreich erstellt. Bitte warten Sie bis ein Staff Mitglied verfügbar ist.",
  wrongEmoji: "❎", // if you want you can change but don't change it recommaned.
  rightEmoji: "✅" // if you want you can change but don't change it recommaned.
})
});
