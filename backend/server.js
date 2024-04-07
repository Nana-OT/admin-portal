const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "global"
})

app.get("/members", (req, res) => {
    const sql = "SELECT * FROM members";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);

    })
})

app.get("/singers", (req, res) => {
    const sql = "SELECT * FROM members WHERE role = ?";
    const role = "Singer"; // Role to filter by

    db.query(sql, [role], (err, data) => {
        if(err) return res.status(500).json({ error: "Internal Server Error" });
        return res.status(200).json(data);
    });
});

app.listen(8081, () => {
    console.log('listening')
})