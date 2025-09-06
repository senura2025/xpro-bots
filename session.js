//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUURpSXdGQXlNMDJGeDVrOGRQb0IyVmVhYlpQWmUzeWtrdkZLaFFaZFhXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczJybGlPdEhIa1ludTZlZDZaaUZhbXhGdGxTOHBuRGllRkxFdU9XVDExUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTUJhYkNwQWl4eWtmcldMWW1TZTMzQmFObHJiZzVQdVlKTDNzY0JMRGxZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0VUYwSytNM3lDVkxpd3N2VlErWTZGSTJBdm5iZDNYN3F3V3lxVDgyVFRFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1DWnNGMTlJcllTZ2xNa0pTR3RzQVdnWG5GV00veWlPWDhaSC9BVTVxMjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY5T2dvSUVCTldoaDUzZW1xK2ZCVjlBU2RSTm9WaTU1Z1pOMTFsbGJyR1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0ZCZ3Y1VlI3b040WFU5dHlLbnEwUjNDSnZHeFdFOHgxODhRM1QydzJVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVMzRjUzbnU5UjNPM2lTanVKeThUREJMSExDT2ZreU55VHdpQ0FpNndVZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllUaGtodTRKZmRsRm5UU0R4YTN1Y3dWVzJBYThEZUdIcjN5UHRtT2tEOFN6ak04OUkwbUUrNktRZEhpcDY3M3JRRUR6eFRPTkFSUFI4SVZJQy9nd0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTAsImFkdlNlY3JldEtleSI6Ii9OZ0ErWnpsYlpaUnI3eVZmY1pIZSswT3ZpSERPeUJMVGMzRlFEUTZrbXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InVDSXU5Ri1xVEY2LXVxNmJTZjBHMnciLCJwaG9uZUlkIjoiMGM1NGVjMDAtZDlmZS00YmI0LTgxYmQtMjI0OTk3OTE2MDUyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFmb1cxK3pHV1g5SVg1MUxIazZKTFd3OG1BZz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXZGT016SmR0by9uSEwxZEcxa2RYL2lBd2FnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUgvdTk4RUVLeUg4TVVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiS3Evb1hSNXBtRnBZWk5LSTEwNEcxK2JxSG5Rd3drUVhDMit2Y3pKclRGND0iLCJhY2NvdW50U2lnbmF0dXJlIjoieHA4cVZmUDhncjZaanhzbnpGYkpGaVREM1dPVWljYVpGRFVJekM2bGM5R21NVDBuUmhzb1lsUUlqcmFFWlFuYitzalI3TElUaU94THc1emlUU1JMQnc9PSIsImRldmljZVNpZ25hdHVyZSI6Im4xSGU1bklRbWZHb3Q1aE10WUVScDBXdzdPNDhWcENheTc4T2pTWGtGZ1Rsb0h2Y1B2YUxhc1FNdm5YOHI5aDExaUFkOGtjWHplQnNJY1hpYXpuNURBPT0ifSwibWUiOnsiaWQiOiI5NDc1MDQzMzY1NToyOEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE2NzQwMTMxNjQ3MDkzNDoyOEBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTA0MzM2NTU6MjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU3F2NkYwZWFaaGFXR1RTaU5kT0J0Zm02aDUwTU1KRUZ3dHZyM015YTB4ZSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3MTUyMTc2LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTU9XIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0778587324",
  PASSWORD: 
    process.env.PASSWORD || "senura#@123",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
