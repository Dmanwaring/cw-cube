var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `.`
    if (message.substring(0, 1) == '.') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // .ping
            case "ping":
                bot.sendMessage({
                    to: channelID,
                    message: "Pong!"
                });
            break;
            case "info":
                bot.sendMessage({
                    to: channelID,
                    message: "My name is CUBE, an AI created by Sam'anar to provide you mortals with information about the Galaxy."
                });
            break;     
            // Just add any case commands if you want to..
         }
     }
});

 // pings server every 15 minutes to prevent dynos from sleeping
setInterval(() => {
  http.get('http://cw-cube.herokuapp.com');
}, 900000);

// Execute the update function now and every update_interval milliseconds
		(function update(){
			// Update all active events' summaries
			db.events.getAllActive().then(
				events => {
					for (var i = 0; i < events.length; i++) {
						summaryHandler.updateSummary(events[i]).catch(console.error);
					}
				}
			).catch(console.error);

			setTimeout(update, cfg.update_interval);
		})();

		console.log("Running!");
	});

}).catch(console.error);
