<?php
include_once "conn.php";
$conn->select_db("eee");
$sql = "select * from myeee";
$result = $conn->query($sql);
$newArr = [];
if($result->num_rows>0){
	while($row = $result->fetch_assoc()){
		array_push($newArr,$row);
	}
}
$json = json_encode($newArr,JSON_UNESCAPED_UNICODE);
echo $json;

?>