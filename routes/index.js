var express = require('express');
var router = express.Router();

const sql = require('../utils/sql');

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

module.exports = router;
