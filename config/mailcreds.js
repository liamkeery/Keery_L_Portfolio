const mailcreds = {
    service: "Outlook365",
    user: process.env.EMAIL, // your email (gmail) goes here, don't use mine
    pass: process.env.PASSWORD // see above
}

module.exports = mailcreds;