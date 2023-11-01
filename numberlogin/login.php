<?php
session_start();

function getUserData($filename) {
    $users = [];
    $lines = file($filename, FILE_IGNORE_NEW_LINES);
    if ($lines) {
        foreach ($lines as $line) {
            list($username, $password) = explode(':', $line);
            $users[trim($username)] = trim($password);
        }
    }
    return $users;
}

$usersFile = 'users.txt';
$users = getUserData($usersFile);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    if (isset($users[$username]) && $users[$username] === $password) {
        // Login successful, store user information in the session
        $_SESSION['username'] = $username;
        header("Location: numberlogin/numero.html");
        exit;
    } else {
        echo "Login failed. Please check your username and password.";
    }
}
?>
