<?php
// Database connection settings
define('DB_HOST', 'localhost');
define('DB_USER', 'your_db_username');
define('DB_PASS', 'your_db_password');
define('DB_NAME', 'your_db_name');

// Set header for JSON response
header('Content-Type: application/json');

// Connect to the database
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if ($conn->connect_error) {
    echo json_encode(['success' => false, 'message' => 'Database connection failed']);
    exit;
}

// Get username and password from POST data
$username = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
$password = $_POST['password'];

// Look up user in the database
$sql = "SELECT * FROM users WHERE email = ? OR phone = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
        // Successful login
        echo json_encode(['success' => true, 'message' => 'Login successful']);
    } else {
        // Incorrect password
        echo json_encode(['success' => false, 'message' => 'Incorrect password']);
    }
} else {
    // User not found
    echo json_encode(['success' => false, 'message' => 'User not found']);
}

$stmt->close();
$conn->close();
?>
