<?php
// =====================================================
// ARTICLES API
// GET  /api/articles.php        - Fetch all articles
// POST /api/articles.php        - Create a new article
// GET  /api/articles.php?id=5   - Fetch single article + increment views
// =====================================================
require_once 'cors.php';
require_once 'db.php';

$conn = getConnection();
$method = $_SERVER['REQUEST_METHOD'];

// ---- GET: Fetch articles ----
if ($method === 'GET') {
    $id = isset($_GET['id']) ? intval($_GET['id']) : null;

    if ($id) {
        // Increment views every time an article is opened
        $conn->query("UPDATE articles SET views = views + 1 WHERE id = $id");

        // Fetch single article with its comments
        $stmt = $conn->prepare("SELECT * FROM articles WHERE id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $article = $stmt->get_result()->fetch_assoc();

        if (!$article) {
            http_response_code(404);
            echo json_encode(["error" => "Article not found"]);
            exit();
        }

        // Fetch comments for this article
        $cStmt = $conn->prepare("SELECT * FROM article_comments WHERE article_id = ? ORDER BY created_at ASC");
        $cStmt->bind_param("i", $id);
        $cStmt->execute();
        $comments = $cStmt->get_result()->fetch_all(MYSQLI_ASSOC);

        $article['tags'] = $article['tags'] ? explode(',', $article['tags']) : [];
        $article['commentList'] = $comments;
        echo json_encode($article);

    } else {
        // Fetch all articles (newest first)
        $result = $conn->query("SELECT * FROM articles ORDER BY created_at DESC");
        $articles = [];
        while ($row = $result->fetch_assoc()) {
            $row['tags'] = $row['tags'] ? explode(',', $row['tags']) : [];
            $articles[] = $row;
        }
        echo json_encode($articles);
    }
}

// ---- POST: Create a new article ----
elseif ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $title    = isset($data['title'])    ? trim($data['title'])    : '';
    $author   = isset($data['author'])   ? trim($data['author'])   : '';
    $content  = isset($data['content'])  ? trim($data['content'])  : '';
    $tags     = isset($data['tags'])     ? trim($data['tags'])     : '';
    $imageUrl = isset($data['imageUrl']) ? trim($data['imageUrl']) : '';

    if (!$title || !$author || !$content) {
        http_response_code(400);
        echo json_encode(["error" => "Title, author, and content are required."]);
        exit();
    }

    $stmt = $conn->prepare(
        "INSERT INTO articles (title, author, content, tags, image_url) VALUES (?, ?, ?, ?, ?)"
    );
    $stmt->bind_param("sssss", $title, $author, $content, $tags, $imageUrl);

    if ($stmt->execute()) {
        $newId = $conn->insert_id;
        http_response_code(201);
        echo json_encode([
            "success" => true,
            "id"      => $newId,
            "message" => "Article published successfully!"
        ]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to save article: " . $stmt->error]);
    }
}

// ---- Method Not Allowed ----
else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed."]);
}

$conn->close();
?>
