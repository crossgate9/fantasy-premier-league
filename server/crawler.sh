# USAGE: ./crawler.sh 'argument for gen-list.js' 'argument for crawler.js'
node crawler/gen-list.js $1;
casperjs crawler/crawler.js;