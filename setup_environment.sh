#!/bin/sh

sudo apt-get update

curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

sudo apt-get install -y gcc g++ make

curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn

sudo apt-get update
sudo npm install -g -y @angular/cli@8.2.2
sudo npm install -g -y pm2

git clone https://github.com/tranthaibinh111/yen-shop-angular.git
cd yen-shop-angular
npm install
npm run build:ssr

pm2 start dist/server.js --name yenvangmiennam
netstat -plutn | grep LISTEN

sudo apt-get install -y nginx
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install -y python-certbot-nginx

sudo ufw enable
sudo ufw allow 'Nginx Full'
sudo ufw allow 'OpenSSH'
#sudo certbot --nginx -d yenvangmiennam.com -d www.yenvangmiennam.com
#sudo certbot renew --dry-run
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/yenvangmiennam_com.key -out /etc/ssl/certs/yenvangmiennam_com.crt
