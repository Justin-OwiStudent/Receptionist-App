<?php

include 'db_connection.php';

header('Access-Control-Allow-Origin: * ');
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$NameSurname = $data->NameSurname;
$Age = $data->Age;
$Gender = $data->Gender;
$Email = $data->Email;
$Contact = $data->Contact;

$sql = "INSERT INTO patients (ProfileImage, NameSurname, Age, Gender, Email, Contact) VALUES (NULL,'$NameSurname','$Age','$Gender','$Email','$Contact');";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Good! Added appointment");
}

?>