<?php
	$zhanghua = $_POST["zhanghu"];
	$mimaa = $_POST["mima"];
	$spid = $_POST["spid"];
	include_once "conn.php";
	$conn->select_db("eee");
	
    $sql="update myeee set spid='$spid' where zhanghu='$zhanghua'";
   $conn->query($sql);
?>