<?php
header("content-type","text/html;charset=utf-8");

	$useremail = $_POST["useremail"];
	$userpass = $_POST["userpass"];
	$con = mysql_connect("localhost","root","root") or die("数据库连接失败");
	mysql_select_db("origin",$con);
	$sqlStr="select * from users where useremail='".$useremail."'";
	$result=mysql_query($sqlStr,$con);
	mysql_close($con);
	$rows = mysql_fetch_array($result);
	if($rows>0){
		if($rows['userpass'] == $userpass){
			echo "1";
		}else{
			echo "0";
		}
	}else {
		echo "-1";
	}
?>