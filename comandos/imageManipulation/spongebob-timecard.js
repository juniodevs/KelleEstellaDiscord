
 const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const bot =  new Discord.Client();

exports.run = async (bot,message,args) => {
 
 if (!args[0]) {
   message.lineReply("❌ | Você precisa digitar o texto que quer inserir na imagem. Deixe apenas um espaço entre o comando e o texto.")
 } else {
   texto = args.join(" ")
 const attachment = `https://summonjs.xyz/api/spongebob-timecard?text=${texto}`

 //const msg = await message.lineReply('Processando...')


 message.lineReply({ files: [{ name: `spongebob-timecard.png`, attachment }] }).catch(err => message.lineReply("❌ | ERRO! \n Erro: `" + err + "`"))
 }
 

};
  
exports.help = {
	name: ["spongebob-timecard"]
};