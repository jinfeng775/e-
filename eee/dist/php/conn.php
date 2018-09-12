<?php
$username = "root";
$password = "root";
$localhost = "localhost";

$conn = new mysqli($localhost,$username);

if($conn->connect_error){
	die("数据库连接失败");
}




?>