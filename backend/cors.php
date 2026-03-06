<?php
// =====================================================
// CORS HEADERS - included by all API files
// Allows your React frontend to call these PHP APIs
// =====================================================

// Replace 'https://yourdomain.com' with your actual website domain after deployment
// For local testing you can use '*'
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request from browser
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}
?>
