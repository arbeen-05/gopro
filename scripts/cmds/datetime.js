const NepaliDate = require('nepali-date');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "datetime",
    aliases: ["dt"],
    version: "1.3",
    author: "AceGun",
    countDown: 1,
    role: 0,
    shortDescription: "Displays the current date and time in Nepal.",
    longDescription: "",
    category: "ai",
    guide: "{prefix}{name}",
    envConfig: {}
  },
  onStart: async function({ message, args }) {
    const nepalTime = moment.tz("Asia/Kathmandu").format("h:mm:ss A");
    const nepaliDate = new NepaliDate(new Date());
    const bsDateStr = nepaliDate.format("dddd, DD MMMM YYYY");

    const reply = `Today Date & Time in Nepal:\n` +
                  `❏Date: ${moment.tz("Asia/Kathmandu").format("dddd, DD MMMM YYYY")}\n` +
                  `❏Time: ${nepalTime}\n` +
                  `❏BsDate: ${bsDateStr}`;

    message.reply(reply);
  },
  onEvent: async function() {}
};
