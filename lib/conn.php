<?php

function connect_db() {
	$url = parse_url(getenv("CLEARDB_DATABASE_URL"));

	$server = $url["host"];
	$username = $url["user"];
	$password = $url["pass"];
	$database = substr($url["path"], 1);

	$connection = new mysqli($server, $user, $pass, $database);
	if ($connection->connect_error) {
	    die("Connection failed: " . $connection->connect_error);
	} 
    return $connection;
}