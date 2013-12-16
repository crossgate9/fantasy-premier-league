var fs = require('fs'),
    async = require('async'),
    utility = require('../utility').utility;

var playerFolder = utility.getPlayerFolder();
var playerList = fs.readdirSync(playerFolder);
var players = [];

// console.log(playerList);

async.forEach(playerList, function(val, done) {
    var path = playerFolder + val;
    var data = fs.readFileSync(path, 'utf-8');
    players.push(JSON.parse(data));
    done();
}, function(err) {
    var i, row, l = players.length;
    var columns = utility.getCSVColumns();
    var stream = fs.createWriteStream(utility.getCSVFilename());
    stream.once('open', function(fd) {
        for (i = 0; i < l; i++) {
            row = [];
            for (var idx in columns) {
                row.push(players[i][idx]);
            }
            stream.write(row.join(','));
            stream.write('\n');
        }
        stream.end();
    });
});