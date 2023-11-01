<?php
session_start();

// Replace with your actual database connection code
$servername = "localhost";
$username = "user8899";
$password = "pass8899";
$dbname = "HQuser";

// Create a database connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Validate user against the database
    $sql = "SELECT * FROM users WHERE username = ? AND password = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        // Login successful, store user information in the session
        $_SESSION['username'] = $username;
        header("Location: numero.html");
        exit;
    } else {
        echo "Login failed. Please check your username and password.";
    }

    $stmt->close();
}

$conn->close();
?>
