<?php

header('refresh:0;url=index.html');


$url = $_SERVER['REQUEST_URI'];

$query = ltrim(strstr($url, '?'), '?');



$json = file_get_contents('http://test.hirsch-group.wp.iterative.pl/?' . $query);

print_r($json);


?>