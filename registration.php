<?php

//data base info
//data base info
$dbhost='dbosch-pi-2.student.iastate.edu';
$dbuser='bri';
$dbpassword='GbXTwLcWHLTrtApd';

//get variables
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];


//connect to database
$con = new mysqli($dbhost, $dbuser, $dbpassword);

//check connection
if(mysqli_connect_errno())
{
	printf("Connect failed: %s\n", mysqli_connect_error());
	exit();
}

//check if username exists
$checkName = mysqli_query($con,"SELECT * FROM `db309SD`.`members` WHERE `username` = '".$username."'");
$rows = mysqli_num_rows($checkName);
if($rows == 0)
{
	//add new account
	$add = mysqli_query($con,"INSERT INTO `db309SD`.`members` (`username`, `password`, `email`) VALUES ('".$username."', '".$password."', '".$email."');");
	
	if($add)
	{	
		printf("Account created!");
		exit();
	}
	else
	{
		printf("Error : %s\n", mysqli_sqlstate($con));
		exit();
	}
}
else
{
	printf("Username already exists!");
	exit();
}
?>
