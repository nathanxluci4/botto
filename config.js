//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kitsubfox@gmail.com";
global.location = "india, Mumbai";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "asia/india";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vac2FvD7DAWvpxpB942q";
global.website = process.env.GURL || "https://chat.whatsapp.com/DcPE5QRR4MB2aOs0N9KkXB";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "6283891139988";
global.sudo = process.env.SUDO || "2348068620970";
global.owner = process.env.OWNER_NUMBER || "6283891139988";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "false";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUozL2lmaEJQR1JrWjlMTENES1d5QUxJN1J0VTd5ZTNYMElhTGREZFYybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDNxZlFGZlZBV1c0c24vQnJ5dlJkMGNKYmxBMXRTbmdQL2ZQbEZRYnpUQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRllmMFB5aUpWNjhzc1F3SW13S3JIZnBZS25TSzlJRnc1aVV4UUhoMUhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqUDJiMU9KUVVsa3ppaURYTjU4a3haVmZUaWNteitvY00rTmlaRmU0Q3ljPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllBSW1JNmI4Y21oY3VGamNoVjQxNFNudStmN3pIbWg4QktiQ2dQbmU5VjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZmRUw5RWJqZHVRQ0NpUktmWkoxOWJvOXJRZW00bDQvY3lEYm02bk9VRUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1rZHUrN251ampRSitVOFFKcjY2cU9jUWpzSlJHM1MydXRMQUw5VGExZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3liQjV5S0hIZUtiRUhPNnNhTnZ4aS9zTE43a01abC8vcGFGYzBKb096VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp4WmpvSWpCb3puY3d5K0gyR3JteFZRREM1QklnUHV2aHRjYkFzVTV1WEJ0UUkwemxNRFgyOWt4ZUkyRCsvRFhoVjZrMys4aGw2L3UwY1BMRFV3WUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6InVndkdFNmRlOE5zWDE4cGpJMm5kbkNoaVVja2daeXV0R0tEYkdEMVhzYjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkdUcWpoT29LUkNhTkpmVkoxU2wxZkEiLCJwaG9uZUlkIjoiZjgzN2MxNzYtN2MxNy00NmU5LWI0MDItNjQwODcwYjViNDNjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inc1aTlEYVNWS0l3bmZvbDlzcTVyQ1RGYk00TT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvVi9nWFh1K0V0VkFPYVpWSkJLVjVrK2FsU3c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNjdaTlJISkMiLCJtZSI6eyJpZCI6IjIzNDgxMTAzNTk3MzA6MjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Qj/CdkJHwnZCO8J2QkvCdkI/wnZCE8J2QkSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWltemVzQkVMQ0M5N2NHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiczdVZDlRQjIvemZrdEg3ZFUrN3R1aHlkNSs0NWNuTUYyQnV6RW1abW9HND0iLCJhY2NvdW50U2lnbmF0dXJlIjoicmFXcDZyell5aFl2OHRESWlKelVMSU9ta21hNXdJL2ljd29tSHQzUjZiN2pvRlAwMnhvNVF6ZUVjMjlGNFZaSUNzcjRDOUY0VXB4cmJ0RlhZbyszQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IlpiZGNSZi9acmQvZlN3bXQ2MVVoUENBN0lDTCtncFA5M3I2d0JrOVZZejc2TTNSUUloZUl0cGdTVStMQTFVNVM1MzdPS2s1enBFQkdiQmxKNE1adURRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODExMDM1OTczMDoyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiTzFIZlVBZHY4MzVMUiszVlB1N2JvY25lZnVPWEp6QmRnYnN4Sm1acUJ1In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3OTA2MTA5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZOciJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`MAIKI IS GLORY `",
  author: process.env.PACK_AUTHER || "MAIKI",
  packname: process.env.PACK_NAME || "GLORY",
  botname: process.env.BOT_NAME || "MIKASA",
  ownername: process.env.OWNER_NAME || "MAIKI IS GLORY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
