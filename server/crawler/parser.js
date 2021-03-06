(function() {
    var parser = function() { };
    parser.VERSION = '0.1.0';

    var cheerio = require('cheerio'),
        utility = require('../lib/utility');

    var columnCount = 23;

    parser.prototype.stat = function(html) {
        var $ = cheerio.load(html),
            $td = $('td'),
            count = $td.length,
            week = count / columnCount - 1;

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
                stat[idx] += parseInt($($td[i*columnCount+c]).text(), 10);
            }
        }
        
        return stat;
    };

    parser.prototype.detail = function(html) {
        var $ = cheerio.load(html),
            $td = $('td'),
            count = $td.length,
            week = count / columnCount - 1;

        var columns = utility.getStatColumns();
        var i, idx, c;
        var detail = {};

        for (i = 0; i < week; i++) {
            c = 0;
            detail[i] = {};
            for (idx in columns) {
                c++;
                detail[i][idx] = parseInt($($td[(week-i-1)*columnCount+c]).text(), 10);
            }
        }

        return detail;
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