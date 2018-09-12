<?php
$id = $_REQUEST["id"];
include_once "conn.php";
$conn->select_db("mydb");
$sql = "delete from wq where id='$id'";
$conn->query($sql);
?>