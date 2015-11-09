<?php

//data base info
//data base info
$dbhost='dbosch-pi-2.student.iastate.edu';
$dbuser='bri';
$dbpassword='GbXTwLcWHLTrtApd';

//get variables
$pullStats = $_POST['stats'];

//connect to database
$con = new mysqli($dbhost, $dbuser, $dbpassword);

//check connection
if(mysqli_connect_errno())
{
	printf("Connect failed: %s\n", mysqli_connect_error());
	exit();
}

//change for highscore variable
$rows = mysqli_query($con, "SELECT username, wins FROM db309SD.members ORDER BY highscore DESC LIMIT 10");


//change for highscore variable
$numRows  = mysqli_num_rows($rows);
for($i = 0; $i< $numRows; $i++)
{
	$row = mysqli_fetch_array($rows);
	printf("%20s\t%20d\n",$row['username'],$row['highscore']);
}
?>
