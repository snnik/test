create database blog_newdb default character set utf8 collate utf8_general_ci;
create user 'springusr'@'localhost' identified by 'C0kywtVj#';
grant usage on *.* to 'springusr'@'localhost';
grant all privileges on blog_newdb.* to 'springusr'@'localhost';
flush privileges;