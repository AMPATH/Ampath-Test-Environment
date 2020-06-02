FROM keymetrics/pm2:latest-alpine

RUN apk update && apk add git && apk add bash
RUN git clone https://github.com/AMPATH/amrs-slackfeedback-server.git /opt/amrs-slackfeedback-server
RUN npm install -g babel-cli
WORKDIR /opt/amrs-slackfeedback-server/

RUN npm install

CMD ["pm2-docker", "start", "/opt/amrs-slackfeedback-server/config/pm2_config.json" ]