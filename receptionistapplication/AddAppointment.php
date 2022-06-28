<?php

include 'db_connection.php';

header('Access-Control-Allow-Origin: * ');
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$Patient = $data->PatientName;
$Doctor = $data->DoctorName;
$Room = $data->RoomName;
$AppointmentTime = $data->AppointmentTime;
$AppointmentDate = $data->AppointmentDate;

$sql = "INSERT INTO appointment (Patient, Doctor, Room, AppointmentTime, AppointmentDate) VALUES ('$Patient', '$Doctor', '$Room', '$AppointmentTime', '$AppointmentDate');";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Good! Added appointment");
}

?>