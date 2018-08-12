<?php
header("content-type","text/html;charset=utf-8");

	$userid = $_POST["userid"];
	$con = mysql_connect("localhost","root","root") or die("数据库连接失败");
	mysql_select_db("origin",$con);
	$sqlStr="select * from users where userid='".$userid."'";
	$result=mysql_query($sqlStr,$con);
	mysql_close($con);
	$rows = mysql_num_rows($result);
	if($rows>0){
		echo "1"
	}else {
		echo "0";
	}
?>