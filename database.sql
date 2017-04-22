/*
	First name
	Last name
	Phone number
	Membership type
	Silver
	Gold
	Platinum
	Membership expiry date
	Address
	Mailing address
*/

CREATE TABLE IF NOT EXISTS cl_client_lookup;

CREATE TABLE IF NOT EXISTS cl_client (
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
	firstname VARCHAR(30) NOT NULL,
	lastname VARCHAR(60) NOT NULL,
	email VARCHAR(50),
	phone VARCHAR(20),
	address VARCHAR(100),
	mailing_address VARCHAR(100),
	membership TINYINT,
	membership_exp_date TIMESTAMP,
	reg_date TIMESTAMP
);
