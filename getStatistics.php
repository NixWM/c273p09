<?php

include "dbFunctions.php";

$response = array();
$query = "SELECT * FROM statistics";
$result = mysqli_query($link, $query);

while($row = mysqli_fetch_assoc($result)){
    $response[] = $row;
}

echo json_encode($response);
?>