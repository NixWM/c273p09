<?php

include "dbFunctions.php";

$id = $_GET['id'];


$response = array();
$query = "SELECT * FROM statistics where id =$id";
$result = mysqli_query($link, $query);

$response = mysqli_fetch_assoc($result);

echo json_encode($response);

?>