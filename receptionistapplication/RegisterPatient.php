<?php

include 'db_connection.php';

header('Access-Control-Allow-Origin: * ');
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$Patient = $data->Patient;
$Doctor = $data->Doctor;
$Room = $data->Room;

$sql = "INSERT INTO appointment (id, Patient, Doctor, Room) VALUES (NULL, '$Patient', '$Doctor', '$Room');";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Good! Added user");
}

?>