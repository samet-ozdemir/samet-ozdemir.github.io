<?php
header('Content-Type: application/json');

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$human = $_POST['human'];

// Form doğrulama
if(empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL) || !empty($human)) {
    echo json_encode(['message' => 'Tüm alanları doğru doldurun.']);
    exit;
}

// E-posta gönderme işlemi
$to = 'talkshow@outlook.com'; // Hedef e-posta adresi
$subject = 'Yeni Mesaj';
$body = "Ad: $name\nE-posta: $email\nMesaj:\n$message";
$headers = "From: $email";

if(mail($to, $subject, $body, $headers)) {
    echo json_encode(['message' => 'Mesajınız başarıyla gönderildi!']);
} else {
    echo json_encode(['message' => 'Mesaj gönderilemedi. Lütfen tekrar deneyin.']);
}
?>
