var fs = require('fs'),
    Getopt = require('node-getopt'),
    sprintf = require('sprintf').sprintf;
    utility = require('./utility');

var players = require('./player').players;

var getopt = new Getopt([
    ['', 'refresh-player=ARG'],
    ['h' , 'help']
]).bindHelp(),
    opt = getopt.parse(process.argv);

var isReload = false;

if (utility.isnull(opt.options['refresh-player']) === false) {
    if (opt.options['refresh-player'] === 'true') { isReload = true; }
}

var i;
var playerCount = players.length,
    playerFolder = utility.getPlayerFolder();

var playerList = [];
for (i = 0; i < playerCount; i++) {
    if (isReload === false) {
        var path = playerFolder + players[i] + '.txt';
        if (fs.existsSync(path) === true) {
            continue;
        }
    }
    playerList.push(players[i]);
}
console.info(sprintf('%s Players in the List', playerList.length));

fs.writeFile(utility.getTempFile(), JSON.stringify(playerList), 'utf-8');