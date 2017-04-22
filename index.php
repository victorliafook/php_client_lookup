<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';
require 'lib/conn.php';
require 'lib/utils.php';

$app = new \Slim\App;

$app->get('/clients/search', function (Request $request, Response $response) {
    $params = $request->getQueryParams();
    $db = connect_db();
    $query = "SELECT * FROM cl_client where 1=1 ";
    
    //implementar geral, extensivel
    $first_name = sanitizeInput($request->getQueryParam('first_name', $default = null));
    if($first_name) $query .= " and LOWER(firstname) like LOWER('%{$first_name}%') ";
    
    $last_name = sanitizeInput($request->getQueryParam('last_name', $default = null));
    if($last_name) $query .= " and LOWER(lastname) like LOWER('%{$last_name}%')";
    
    $phone = sanitizeInput($request->getQueryParam('phone', $default = null));
    if($phone) $query .= " and phone like '%{$phone}%'";
    
	$result = $db->query( $query );
	$data =  array();
	
	while ( $row = $result->fetch_array(MYSQLI_ASSOC) ) {
		$data[] = $row;
	}
	
    $response = $response->withJson($data);
    return $response;
});

$app->run();