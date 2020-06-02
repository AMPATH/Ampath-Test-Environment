FROM node:8-alpine as user_app_build

RUN apk update && apk add git && apk add bash
RUN git clone https://github.com/AMPATH/ng2-user-management.git
WORKDIR /ng2-user-management
RUN ls -alh
RUN apk add --no-cache --virtual .gyp python make g++ \
    && npm install && npm install -g @angular/cli && npm install -g increase-memory-limit \
    && apk del .gyp
RUN export NODE_OPTIONS=--max_old_space_size=4096 && npm run build
RUN ls -al 

FROM nginx:1.17.1-alpine
RUN ls -al home
COPY --from=user_app_build ng2-user-management/dist /usr/share/nginx/html/ 
