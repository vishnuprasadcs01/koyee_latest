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

$receiving_email_address = 'vishnuprasad.cs.01@gmail.com';

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $mail = new PHPMailer(true);

    try {
        // --- Debugging Mode ---
        // Change to 2 to see the full "conversation" between your server and Hostinger
        $mail->SMTPDebug = 0; 

     $mail->isSMTP();                                            
$mail->Host       = 'smtp.protonmail.ch';             
$mail->SMTPAuth   = true;                             
$mail->Username   = 'koyeeintl@proton.me'; // Use the email associated with the token
$mail->Password   = 'koyeeintl@2026#'; // The token you just copied
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;      
$mail->Port       = 587;                           

        // --- Email Headers ---
        // Note: Gmail often rewrites the 'From' header to your Gmail address anyway
        $mail->setFrom('koyeeintl@proton.me', 'Koyee International Website');
        $mail->addAddress($receiving_email_address); 
        $mail->addReplyTo($_POST['email'], $_POST['name']);

        $mail->isHTML(false); 
        // $mail->Subject = "Subject:" . strip_tags($_POST['subject']);
        $mail->Body    = "Name: " . strip_tags($_POST['name']) . "\n" .
                         "Email: " . strip_tags($_POST['email']) . "\n\n" .
                         "Message:\n" . strip_tags($_POST['message']);

        if($mail->send()) {
            echo 'OK'; 
        }

    } catch (Exception $e) {
        // This will display the EXACT error message from PHPMailer
        echo "Mailer Error: " . $mail->ErrorInfo;
    }

} else {
    echo "Invalid Request Method.";
}
?>