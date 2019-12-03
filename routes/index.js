var express = require('express');
var router = express.Router();

const mailer = require('nodemailer');
require('dotenv').config();
var auth = require('../config/mailcreds');
const sql = require('../utils/sql');

const transporter = mailer.createTransport({
	service: 'gmail',
	auth: {
		user: auth.user,
		pass: auth.pass
	}
});

router.get('/', function(req, res, next) {
  
  let query = "SELECT * FROM tbl_projects";

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        res.render('index', { projectData: result });
    })
});

router.get('/project/:target', (req, res) => {
  let query = `SELECT * FROM tbl_projects WHERE id="${req.params.target}"`;

  sql.query(query, (err, result) => {
    if (err) { console.log(err); }
    
    console.log(result);

    res.json(result[0]);
  })
});

router.post('/mail', (req, res) => {
	console.log('hit mail route');
	console.log('body: ', req.body);

	// get the mail options from the form -> the url params using bodyParser middleware

	const mailOptions = {
		from: req.body.usermail,
		to: auth.user,
		replyTo: req.body.usermail,
		subject: `CONTACT REQUEST FROM PORTFOLIO: ${req.body.name || 'none'}`, // Subject line
		text: req.body.message
	};

	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			console.log("failed... ", err);
			res.json(err);
		} else {
			console.log("success! ", info);
			res.json(info);
		}
	});
})

module.exports = router;
