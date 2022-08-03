const { Client } = require('discord.js-selfbot-v11')
const client = new Client();

client.on('ready', () => { 
  client.user.setActivity("put your status", {type: "STREAMING", url: "https://Satyajitop.xyz"})
   console.log(`${client.user.username} Successfully Logged in!`)
})

client.login("put your token");
