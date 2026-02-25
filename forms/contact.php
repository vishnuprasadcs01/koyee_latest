<?php
// Enable internal PHP error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require '../vendor/phpmailer/Exception.php';
require '../vendor/phpmailer/PHPMailer.php';
require '../vendor/phpmailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$receiving_email_address = 'vishnuprasad.cs.001@gmail.com';

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $mail = new PHPMailer(true);

    try {
        // --- Debugging Mode ---
        // Change to 2 to see the full "conversation" between your server and Hostinger
        $mail->SMTPDebug = 0; 

    $mail->isSMTP();                                            
$mail->Host       = 'smtp.gmail.com';                     // Gmail SMTP server
$mail->SMTPAuth   = true;                                 
$mail->Username   = 'vishnuprasad.cs.001@gmail.com';               // Your Gmail address
$mail->Password   = 'yqmrvxhzszbzdikb';                  // 16-character App Password
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;      
$mail->Port       = 587;                          

        // --- Email Headers ---
        // Note: Gmail often rewrites the 'From' header to your Gmail address anyway
        $mail->setFrom('info@koyeecontainerqa.com', 'Koyee International Website');
        $mail->addAddress($receiving_email_address); 
        $mail->addReplyTo($_POST['email'], $_POST['name']);

        $mail->isHTML(false); 
        // $mail->Subject = "Subject:" . strip_tags($_POST['subject']);
        $mail->Body    = "Name: " . strip_tags($_POST['name']) . "\n" .
                         "Email: " . strip_tags($_POST['email']) . "\n\n" .
                         "Phone: " . strip_tags($_POST['phone']) . "\n\n" .
                         "Message:\n" . strip_tags($_POST['message']);

        if($mail->send()) {
            // --- The Redirect ---
            header("Location:http://localhost/koyee.com/contact-us.html?status=success");
            exit(); 
        }

    } catch (Exception $e) {
        // This will display the EXACT error message from PHPMailer
        echo "Mailer Error: " . $mail->ErrorInfo;
    }

} else {
    echo "Invalid Request Method.";
}
?>