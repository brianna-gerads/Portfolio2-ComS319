<?php

//data base info
$dbhost='dbosch-pi-2.student.iastate.edu';
$dbuser='bri';
$dbpassword='GbXTwLcWHLTrtApd';

//get variables
$username = $_POST['username'];
$password = $_POST['password'];

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
	printf("Username does not exist!");
	exit();
}
else
{
	//check if password matches
	while($row = mysqli_fetch_assoc($checkName))
	{
		if($password == $row['password'])
			{
				printf("loginSUCCESS);
				exit();
			}
		else
		{
			printf("Password does not match given username");
			exit();
		}
	}
}
?>
