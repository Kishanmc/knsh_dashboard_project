
<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $userType = $_POST['userType'];

    // Check if the email already exists
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo json_encode(["status" => "error", "message" => "Email already exists!"]);
    } else {
        $sql = "INSERT INTO users (email, password, userType) VALUES ('$email', '$password', '$userType')";
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["status" => "success", "message" => "User registered successfully!"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error: " . $conn->error]);
        }
    }

    $conn->close();
}
?>
