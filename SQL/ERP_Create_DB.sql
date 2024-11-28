CREATE DATABASE academic_erp;
CREATE USER 'erp_user'@'localhost' IDENTIFIED BY 'erp_user';
GRANT ALL PRIVILEGES ON academic_erp.* TO 'erp_user'@'localhost';
FLUSH PRIVILEGES;

