FROM mysql:latest
ENV MYSQL_ROOT_PASSWORD=1qaz2wsx
ENV MYSQL_USER=springuser
ENV MYSQL_PASSWORD=C0kywtVj#

COPY mysql.sql mysql.sql
COPY mysql.sh mysql.sh
# RUN ["mysql", "start"]
ENTRYPOINT ["mysql.sh"]

EXPOSE 3306