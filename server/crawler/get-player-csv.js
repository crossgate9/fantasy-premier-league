var fs = require('fs'),
    async = require('async'),
    utility = require('../lib/utility').utility,
    Parser = require('./parser').parser;

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
    var parser = new Parser();
    stream.once('open', function(fd) {
        // output columns
        var idx;
        row = [];
        for (idx in columns) {
            row.push(columns[idx]);
        }
        stream.write(row.join(','));
        stream.write('\n');

        for (i = 0; i < l; i++) {
            row = [];
            var stat = parser.stat(players[i]['stat']);
            for (idx in columns) {
                if (utility.isnull(players[i][idx])) {
                    row.push(stat[idx]);
                } else {
                    row.push(players[i][idx]);
                }
            }
            stream.write(row.join(','));
            stream.write('\n');
        }
        stream.end();
    });
});