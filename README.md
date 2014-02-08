fantasy-premier-league
======================

An assistance application for uk.eurosport.yahoo.com/fantasy/premier-league

USAGE
-----

1. Rename the file _account.js.sample_ to _account.js_ and change the _email_ and _password_ with your YAHOO! account;
2. Run _bower install_;
3. Run _npm install_;
4. Run the _crawler.sh_ script. It will take some time to get all the players' info;

	The optinos for crawler.sh is as following:
	
  **--proxy=xx.xx.xx.xx:xx:** Set Proxy, to ensure it won't be banned by the server

	**--refresh-player="true":** All the players information will be re-fetched. Or leave it along to run only for missing players.

5. Run the _output.sh_ script to get CSV file. You can find _player.csv_ under the server folder.

NOTICE: You can change application settings in the _settings.js_.