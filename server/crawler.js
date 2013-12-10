var account = require('./account').account;

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

var startURL = 'https://login.yahoo.com/config/login?',
    teamURL = 'http://uk.eurosport.yahoo.com/fantasy/premier-league/team';

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

casper.thenOpen(teamURL, function() {
    this.captureSelector('3.png', 'body');
});

casper.run();