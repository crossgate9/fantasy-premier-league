var settings = require('../settings').settings;
var _ = require('underscore');

(function() {
    var utility = function() { };
    utility.VERSION = '0.1.0';

    utility.getPlayerFolder = function() {
        return settings['base-folder'] + settings['player-folder'];
    };

    utility.getCSVFilename = function() {
        return settings['csv']['filename'];
    };

    utility.getCSVColumns = function() {
        return settings['csv']['columns'];
    };

    utility.isnull = function(obj) {
        return (obj === null || typeof obj === 'undefined');
    };

    utility.getTempFile = function() {
        return settings['tmp-file'];
    };

    utility.getStatColumns = function() {
        return settings['stat']['columns'];
    };

    utility.getTeams = function() {
        return settings['team'];
    };

    utility.getTeamId = function(name) {
        var teams = _.invert(this.getTeams());
        if (this.isnull(teams[name]) === false) {
            return teams[name];
        } else {
            throw new Error('Team not found');
        }
    };

    utility.isObject = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    };

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = utility;
        }
        exports.utility = utility;
    } else {
        root.utility = utility;
    }
}).call(this);