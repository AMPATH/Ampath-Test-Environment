FROM node:8-alpine as build

RUN apk update && apk add git && apk add bash
RUN git clone https://github.com/AMPATH/ng2-amrs.git
WORKDIR /ng2-amrs
RUN git fetch && git checkout test-poc
RUN ls -alh
RUN apk add --no-cache --virtual .gyp python make g++ \
    && npm install && npm install -g @angular/cli && npm install -g increase-memory-limit \
    && apk del .gyp
RUN export NODE_OPTIONS=--max_old_space_size=4096 && npm run build-prod



FROM nginx:1.17.1-alpine
COPY --from=build /ng2-amrs/dist/ngx-amrs /usr/share/nginx/html/
