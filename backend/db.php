<?php
// =====================================================
// DATABASE CONFIGURATION
// Replace these values with your MilesWeb cPanel details
// =====================================================
define('DB_HOST', 'localhost');       // Usually 'localhost' on MilesWeb
define('DB_USER', 'palashtr1_bharath3305');    // cPanel Database username (with prefix)
define('DB_PASS', 'Bha2006@111');         // cPanel Database password
define('DB_NAME', 'palashtr1_palash_training'); // Database name (with cPanel prefix)

function getConnection() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($conn->connect_error) {
        http_response_code(500);
        die(json_encode(["error" => "Database connection failed: " . $conn->connect_error]));
    }
    $conn->set_charset("utf8mb4");
    return $conn;
}
?>
