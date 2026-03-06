<?php
// =====================================================
// DATABASE CONFIGURATION
// Replace these values with your MilesWeb cPanel details
// =====================================================
define('DB_HOST', 'localhost');       // Usually 'localhost' on MilesWeb
define('DB_USER', 'bharath3305');    // cPanel Database username
define('DB_PASS', 'Bha2006@111');// cPanel Database password
define('DB_NAME', 'palash_training');    // Database name you created in cPanel

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
