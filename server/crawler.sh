# USAGE: ./crawler.sh 'argument for gen-list.js' 'argument for crawler.js'
node gen-list.js $1;
casperjs crawler.js;