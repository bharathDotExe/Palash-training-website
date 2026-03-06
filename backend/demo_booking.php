<?php
// =====================================================
// DEMO BOOKING API
// POST /api/demo_booking.php  - Save a new demo booking
// GET  /api/demo_booking.php  - Fetch all bookings (admin use)
// =====================================================
require_once 'cors.php';
require_once 'db.php';

$conn = getConnection();
$method = $_SERVER['REQUEST_METHOD'];

// ---- POST: Save a new demo booking ----
if ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $fullName = isset($data['fullName']) ? trim($data['fullName']) : '';
    $email    = isset($data['email'])    ? trim($data['email'])    : '';
    $phone    = isset($data['phone'])    ? trim($data['phone'])    : '';
    $course   = isset($data['course'])   ? trim($data['course'])   : '';

    if (!$fullName || !$email || !$phone || !$course) {
        http_response_code(400);
        echo json_encode(["error" => "All fields (name, email, phone, course) are required."]);
        exit();
    }

    // Basic email validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid email address provided."]);
        exit();
    }

    $stmt = $conn->prepare(
        "INSERT INTO demo_bookings (full_name, email, phone, course) VALUES (?, ?, ?, ?)"
    );
    $stmt->bind_param("ssss", $fullName, $email, $phone, $course);

    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode([
            "success" => true,
            "message" => "Demo booked successfully! We will contact you shortly."
        ]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to save booking: " . $stmt->error]);
    }
}

// ---- GET: Fetch all bookings (for admin viewing in phpMyAdmin or a dashboard) ----
elseif ($method === 'GET') {
    // OPTIONAL: Add a secret key check here to protect this endpoint
    // if (!isset($_GET['key']) || $_GET['key'] !== 'your_secret_key') {
    //     http_response_code(403);
    //     echo json_encode(["error" => "Forbidden"]);
    //     exit();
    // }
    
    $result = $conn->query("SELECT * FROM demo_bookings ORDER BY booked_at DESC");
    $bookings = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($bookings);
}

// ---- Method Not Allowed ----
else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed."]);
}

$conn->close();
?>
