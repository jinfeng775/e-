<?php
$zhanghua = $_POST["zhanghu"];
$mimaa = $_POST["mima"];
$spid = $_REQUEST["spid"];
include_once "conn.php";
$conn->select_db("eee");
$sql = "insert into myeee (zhanghu,mima,spid) values ('$zhanghua','$mimaa','$spid')";
$conn->query($sql);
?>