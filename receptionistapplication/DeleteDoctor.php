<?php

include 'db_connection.php';

header('Access-Control-Allow-Origin: * ');
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://inputs');
$data = json_decode($request_body);

$doctorId = $data->id;

$sql = "DELETE FROM doctors WHERE id='$doctorId';";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("Doctor Deleted.");
}
?>