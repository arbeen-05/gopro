
const axios = require("axios")
module.exports = {
	config: {
		name: "movie",
		version: "1.1",
		author: "XyryllPanget",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "",
			en: "see the movie info"
		},
		longDescription: {
			vi: "",
			en: "movie info"
		},
		category: "media",
		guide:  {
			vi: "{pn} movie name",
			en: "{pn} movie name"
		}
		
	},

onStart: async function ({ event, message, getLang, usersData, api, args}) {

  let query = args.join(" ")
  if(!query) return message.reply("Please write name of movie")
  try{
  let res = await axios.get(`https://api.popcat.xyz/imdb?q=${encodeURIComponent(query)}`)
    
      let title = res.data.title,
        date = res.data.year,
        time = res.data.runtime,
        genres = res.data.genres,
        director = res.data.director,
        actors = res.data.actors,
        plot = res.data.plot
      var poster = res.data.poster;
     // console.log(res)
        message.reply(
        {
          body: `╭「Title」: ${title}\❏Actors: ${actors}\❏Release Date: ${date}\ ❏Genres: ${genres}\❏Director: ${director}\╰———————————\\❏Plot: ${plot}`,
          attachment: await global.utils.getStreamFromURL(poster)})
  } catch(e){
    console.log(e)
    message.reply("Movie you searched didn't found try again!")
  }

            
}
}