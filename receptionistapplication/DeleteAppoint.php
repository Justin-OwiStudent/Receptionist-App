<?php

include 'db_connection.php';

header('Access-Control-Allow-Origin: * ');
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://inputs');
$data = json_decode($request_body);

$appointId = $data->id;

$sql = "DELETE FROM appointment WHERE id='$appointId';";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("Appointment Deleted.");
}
?>