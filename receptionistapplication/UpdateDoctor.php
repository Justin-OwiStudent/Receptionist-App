<?php

include 'db_connection.php';

header('Access-Control-Allow-Origin: * ');
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://inputs');
$data = json_decode($request_body);

$updatedName = $data->NameSurname;
$updatedAge = $data->Age;
$updatedEmail = $data->Email;
$updatedContact = $data->Contact;
$doctorId = $data->id;


$sql = "UPDATE doctors SET NameSurname='$updatedName', Age='$updatedAge', Email='$updatedEmail', Contact='$updatedContact' WHERE id = '$doctorId'";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("Patient information Updated.");
}

?>