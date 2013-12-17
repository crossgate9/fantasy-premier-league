(function() {
    var parser = function() { };
    parser.VERSION = '0.1.0';

    var cheerio = require('cheerio'),
        utility = require('../utility');
    parser.prototype.process = function(html) {
        var $ = cheerio.load(html),
            $td = $('td'),
            count = $td.length,
            week = count / 23 - 1;

        // stat by each week
        var columns = utility.getStatColumns();
        var stat = {};
        var i, idx, c;
        for (idx in columns) {
            stat[idx] = 0;
        }

        for (i = 0; i < week; i++) {
            c = 0;
            for (idx in columns) {
                c++;
                stat[idx] += parseInt($($td[i*23+c]).text(), 10);
            }
        }
        
        return stat;
    };

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = parser;
        }
        exports.parser = parser;
    } else {
        root.parser = parser;
    }
}).call(this);