(function() {
    settings = {
        'base-folder': './',
        'player-folder': 'player/',
        'tmp-file': 'tmp.txt',
        'firebase': 'https://fantasy-premier-league.firebaseio.com/',
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
                'gp': 'Game Played',
                'g': 'Goal',
                'a': 'Assist',
                'wg': 'Winning Goal',
                'spg': 'Set-Piece Goal',
                'pg': '',
                'sot': 'Shot on Target',
                'sc': 'Successful Cross',
                'og': 'Own Goal',
                'pi': 'Pass Intercepted',
                'pc': 'Penalty Commited',
                'pm': 'Penalty Kick Missed',
                'ps': 'Penalty Kick Save',
                'sv': 'Save',
                'bs': 'Blocked Shot',
                'cs': 'Clean Sheet',
                'fc': 'Foul Commited',
                'fw': 'Winning a Foul',
                'tw': 'Winning a Tackle',
                'yc': 'Yellow Card',
                'rc': 'Red Card',
                'ga': 'Goal Allowed',
                'no': 'Number',
                'team': 'Team'
            }
        },
        'stat': {
            'columns': {
                'gp': 'Game Played',
                'g': 'Goal',
                'a': 'Assist',
                'wg': 'Winning Goal',
                'spg': 'Set-Piece Goal',
                'pg': '',
                'sot': 'Shot on Target',
                'sc': 'Successful Cross',
                'og': 'Own Goal',
                'pi': 'Pass Intercepted',
                'pc': 'Penalty Commited',
                'pm': 'Penalty Kick Missed',
                'ps': 'Penalty Kick Save',
                'sv': 'Save',
                'bs': 'Blocked Shot',
                'cs': 'Clean Sheet',
                'fc': 'Foul Commited',
                'fw': 'Winning a Foul',
                'tw': 'Winning a Tackle',
                'yc': 'Yellow Card',
                'rc': 'Red Card',
                'ga': 'Goal Allowed'
            }
        },
        'team': {
            0: 'Arsenal',
            1: 'Aston Villa',
            2: 'Cardiff City',
            3: 'Chelsea',
            4: 'Crystal Palace',
            5: 'Everton',
            6: 'Fulham',
            7: 'Hull City',
            8: 'Liverpool',
            9: 'Manchester City',
            10: 'Manchester United',
            11: 'Newcastle',
            12: 'Norwich City',
            13: 'Southampton',
            14: 'Stoke City',
            15: 'Sunderland',
            16: 'Swansea City',
            17: 'Tottenham Hotspur',
            18: 'West Bromwich',
            19: 'West Ham United'
        },
        // xxxx to get online, set manually temporarily
        'fixture': {
            0: 8, 8: 0
        }
    };

    exports.settings = settings;
}).call(this);