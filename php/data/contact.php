<?php 

if(!empty($_POST)){
        // echo 'No input';
        // exit;
}

    $name = '';
    $email = '';
    //$subject = '';
    $message = '';
    $recipient = 'lkeery@uwo.ca';
    
    //Validation
    if(isset($_POST['name'])){
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    }
    
    if(isset($_POST['email'])){
        $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']); 
        $email = filter_var($email, FILTER_SANITIZE_STRING);
    }
    
    // if(isset($_POST['subject'])){
    //     $name = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    // }
    
    if(isset($_POST['message'])){
        $name = $_POST['message'];
    }
    
    $headers = [
        'From' => 'noreply@liamkeery.com',
        'Reply-To'=>$name.'<'.$email.'>'
    ];
    
    if(mail($recipient,$message, $headers)){
        echo '<p>Thank you for your message,'.$name.'. You will recieve a response in 24 hours.</p>';
    } else {
        echo '<p>We are sorry but the email did not go through</p>' ;
    }

?>