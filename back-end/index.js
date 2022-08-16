const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "rodrigo",
    password: "fatec",
    database: "support-ticket-bd"
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(3001, () => {
    console.log("rodando")
})