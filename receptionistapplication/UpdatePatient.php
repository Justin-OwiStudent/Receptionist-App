<?php

include 'db_connection.php';

header('Access-Control-Allow-Origin: * ');
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://inputs');
$data = json_decode($request_body);

$updatedName = $data->NameSurname;
$updatedAge = $data->Age;
$updatedGender = $data->Gender;
$updatedEmail = $data->Email;
$updatedContact = $data->Contact;
$patientId = $data->id;


$sql = "UPDATE patients SET NameSurname='$updatedName', Age='$updatedAge', Gender='$updatedGender', Email='$updatedEmail', Contact='$updatedContact' WHERE id = '$patientId'";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("Patient information Updated.");
}

?>