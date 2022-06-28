<?php 

    include 'db_connection.php';

    $sql =  "SELECT * FROM receptionists;";
    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result);

    if($resultCheck > 0){

    } else {
        echo "<h1> No Data Found on DB. </h1>";
    }


?>