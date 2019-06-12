FROM quay.io/presslabs/wordpress-runtime:5.2-7.3.4-r154
COPY --chown=www-data:www-data wp-content/ /var/www/html/wp-content/
