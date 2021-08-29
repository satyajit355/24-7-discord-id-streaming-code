const keepAlive = require("./server")
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
const { Client } = require('discord.js-selfbot-v11')
const client = new Client();

client.on('ready', () => { 
  client.user.setActivity("xrop!", {type: "STREAMING", url: "https://twitch.tv/xr"})
   console.log(`${client.user.username} Successfully Logged in!`)
})

keepAlive()
client.login(TOKEN);
