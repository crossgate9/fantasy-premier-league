(function() {
    var utility = require('../lib/utility'),
        Team = require('./team');

    var Player = function() { };
    Player.version = '0.1.0';

    Player.prototype.init = function(obj) {
        var self = this;
        if (utility.isnull(obj) === true ||
            utility.isObject(obj) === false) {
            throw new Error('Object not match');
        }
        self.data = {};
        for (var idx in obj) {
            self.data[idx] = obj[idx];
        }
    };

    // get properties
    Player.prototype.getData = function(field) {
        if (utility.isnull(field) === true) {
            // get all data
            return this.data;
        }

        if (utility.isnull(this.data[field])) {
            throw new Error('Field empty');
        }
        // get single field
        return this.data[field];
    };

    Player.prototype.getTeam = function() {
        if (utility.isnull(this.data['team']) === true) {
            throw new Error('Team info missing');
        }

        var team = new Team();
        team.init(this.data['team']);
        return team;
    };

    Player.prototype.getAllPlayers = function() {
        
    };
    
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = Player;
        }
        exports.Player = Player;
    } else {
        root.Player = Player;
    }
}).call(this);