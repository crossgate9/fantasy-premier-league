var fs = require('fs'),
    async = require('async'),
    utility = require('../lib/utility').utility,
    Parser = require('./parser').parser,
    parser = new Parser();

var playerFolder = utility.getPlayerFolder(),
    playerList = fs.readdirSync(playerFolder);

var Firebase = require('firebase');
var myRootRef = new Firebase(utility.getFirebaseUrl());

async.forEach(playerList, function(val, done) {
    var path = playerFolder + val,
        data = fs.readFileSync(path, 'utf-8');
    data = JSON.parse(data);
    data.stat = parser.stat(data.stat);
    myRootRef.child('player').child(data.id).set(data);
    done();
});