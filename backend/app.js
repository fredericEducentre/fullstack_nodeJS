const mysql = require('mysql2');
const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

// A définir
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MyAPI
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306
});

// CRUD on users
app.get('/user', (req, res) => {
    // Read One
    // http://localhost:3000/user?id=0
    if (req.query.id) {
        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");

            con.query("Use my_api", function (err, result) {
                if (err) throw err;
                console.log("Switch to my_api database");
            });

            con.query(`SELECT * FROM utilisateur WHERE id=${req.query.id}`, function (err, result) {
                if (err) throw err;
                res.send(result);
            });
        });
    } else {
        // http://localhost:3000/user
        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");

            con.query("Use my_api", function (err, result) {
                if (err) throw err;
                console.log("Switch to my_api database");
            });

            con.query("SELECT * FROM utilisateur", function (err, result) {
                if (err) throw err;
                res.send(result);
            });
        });
    }
})

// CREATE
// curl -d "nom=Alex" -X POST http://localhost:3000/user
app.post('/user', (req, res) => {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");

        con.query("Use my_api", function (err, result) {
            if (err) throw err;
            console.log("Switch to my_api database");
        });
        
        con.query(`INSERT INTO utilisateur (nom) VALUES ('${req.body.nom}')`, function (err, result) {
            if (err) throw err;
            console.log(result);
            res.end()
        });
    });
})

// UPDATE
// curl -d "id=0&nom=Peter" -X PUT http://localhost:3000/user
app.put('/user', (req, res) => {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");

        con.query("Use my_api", function (err, result) {
            if (err) throw err;
            console.log("Switch to my_api database");
        });
        
        con.query(`UPDATE utilisateur SET nom = '${req.body.nom}' WHERE id=${req.body.id}`, function (err, result) {
            if (err) throw err;
            console.log(result);
            res.end()
        });
    });
})

// DELETE
// curl -d "id=0" -X DELETE http://localhost:3000/user
app.delete('/user', (req, res) => {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");

        con.query("Use my_api", function (err, result) {
            if (err) throw err;
            console.log("Switch to my_api database");
        });
        
        con.query(`DELETE FROM utilisateur WHERE id=${req.body.id}`, function (err, result) {
            if (err) throw err;
            console.log(result);
            res.end()
        });
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})