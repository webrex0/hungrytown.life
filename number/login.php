<?php
// Define the valid username and password
$validUsername = "user";
$validPassword = "password";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    if ($username === $validUsername && $password === $validPassword) {
        // Redirect to "numero.html" if login is successful
        header("Location: numero.html");
        exit;
    } else {
        echo "Login failed. Please check your username and password.";
    }
}
?>
