<?php

include 'db_connection.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$first = $data->first;
$Email = $data->Email;
$username = $data->username;
$contact = $data->contact;
$password = $data->password;
$image = $data->image;

$passwordEncrypt = md5($password);

list($type, $image) = explode(';', $image);
list(, $image)      = explode(';', $image);
$image = base64_decode($image);

$newPath = 'profiles/' . time() . '.jpg';

file_put_contents($newPath, $image);

$sql = "INSERT INTO receptionists (id, first, username, contact, Email, Password, imgPath) VALUES (NULL,'$first', '$username', '$contact','$Email','$password', '$newPath');";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Good! Added user");
}

?>