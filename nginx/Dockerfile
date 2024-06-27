FROM nginx

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/nginx.conf

#RUN mkdir /var/www/html -p && touch /var/www/html/index.php

EXPOSE 8080