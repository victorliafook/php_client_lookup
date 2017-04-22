<?php

function connect_db() {
	$server = 'localhost'; 
	$user = $_ENV["CL_MYSQL_USER"];
	$pass = $_ENV["CL_MYSQL_PASS"];
	$database = 'cl_client_lookup';
	$connection = new mysqli($server, $user, $pass, $database);
	if ($connection->connect_error) {
	    die("Connection failed: " . $connection->connect_error);
	} 
    return $connection;
}