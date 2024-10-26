<?php
$servername = "localhost";
$username = "root";  // Default username for XAMPP MySQL
$password = "";      // Leave empty for XAMPP
$dbname = "fundraising_db";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>
