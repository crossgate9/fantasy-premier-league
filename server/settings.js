(function() {
    settings = {
        'base-folder': './',
        'player-folder': 'player/',
        'csv': {
            'filename': 'player.csv',
            'columns': {
                'name': 'Name',
                'po': 'Percentage Owned',
                'position': 'Position',
                'total': 'Total Points',
                'price': 'Price',
                'form': 'Form',
                'ppg': 'Points Per Game',
                'ppp': 'Points Per Price',
                'no': 'Number',
                'team': 'Team'
            }
        }
    };

    exports.settings = settings;
}).call(this);