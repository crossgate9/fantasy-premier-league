# USAGE: ./crawler.sh 'argument for gen-list.js' 'argument for crawler.js'
node crawler/gen-list.js $2;
casperjs $1 crawler/crawler.js;