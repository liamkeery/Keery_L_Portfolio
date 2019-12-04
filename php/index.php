<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact Form</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>

<form action="data/contact.php" method="post">
<label for="name-field">Name:</label>
<input name="name" id="name-field" type="text" placeholder="Your Name">
<br>
<br>
<label for="email-field">Email:</label>
<input name="email" id="email-field" type="text" placeholder="Your email">
<br>
<br>
<!-- <label for="subject-field">Subject:</label>
<input name="subject" id="subject-field" type="text" placeholder="Subject">
<br>
<br> -->
<label for="message-area">Message:</label>
<textarea name="message" id="message-area" rows="10" cols="30" placeholder="Your Message"></textarea>
<br>
<br>
<button type="submit">Submit</button>
</form>
</body>
</html>
