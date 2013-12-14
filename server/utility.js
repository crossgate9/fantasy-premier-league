var settings = require('./settings').settings;

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

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = utility;
        }
        exports.utility = utility;
    } else {
        root.utility = utility;
    }
}).call(this);