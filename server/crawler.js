if (! Array.prototype.last) {
    Array.prototype.last = function() {
        return this[this.length - 1];
    };
}

var account = require('./account').account,
    players = require('./player').players;

var casper = require('casper').create({
    verbose: true,
    logLevel: 'debug',
    pageSettings: {
        loadImages: true,
        loadPlugins: true,
        javascriptEnabled: true,
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
    },
    clientScripts: ['./bower_components/jquery/jquery.js'],
    stepTimeout: 100000
});

var fs = require('fs'),
    folderPrefix = 'player',
    utils = require('utils');

var startURL = 'https://login.yahoo.com/config/login?',
    teamURL = 'http://uk.eurosport.yahoo.com/fantasy/premier-league/team',
    playerURL = 'http://uk.eurosport.yahoo.com/fantasy/premier-league/details/';

console.log('Application Start ...');

casper.start(startURL);

casper.then(function() {
    this.fillSelectors('#login_form', {
        '#username': account.email,
        '#passwd': account.password
    }, false);
    this.click('#submit > button');
});

casper.waitFor(function check() {
    return this.getCurrentUrl().indexOf('my.yahoo.com') !== -1;
}, function then() {
}, function timeout() {
}, 100000);

var i;
var playerCount = players.length;
var urls = [];
for (i = 0; i < playerCount; i++) {
    urls.push(playerURL + players[i]);
}

casper.eachThen(urls, function(response) {
    this.thenOpen(response.data, function(response) {
        var id = response.url.split('/').last();
        var data = {
            'id': id,
            'name': this.fetchText('.player-details h2'),
            'no': this.fetchText('.player-details .team-info span:nth-child(0)'),
            'position': this.fetchText('.player-details .team-info span:nth-child(1)'),
            'team': this.fetchText('.player-details .team-info span:nth-child(2)'),
            'total': this.fetchText('abbr[title="Total Points"] em'),
            'price': this.fetchText('abbr[title="Price"] em'),
            'form': this.fetchText('abbr[title="Form"] em'),
            'ppg': this.fetchText('abbr[title="Points Per Game"] em'),
            'ppp': this.fetchText('abbr[title="Points Per Price"] em'),
            'po': this.fetchText('abbr[title="Percentage Owned"] em')
        };
        fs.write('./' + folderPrefix + '/' + id + '.txt', JSON.stringify(data), 'w');
    });
});

casper.run();