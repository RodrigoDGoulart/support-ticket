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

app.post('/add', (req, res) => {
    const { desc } = req.body;
    const { profile } = req.body;
    const { priority } = req.body;

    let sql = " INSERT INTO tickets ( descricao , nome , prioridade ) VALUES (?, ?, ?)"
    db.query(sql, [desc, profile, priority], (err, result) => {
        console.log(err);
    })
})

app.get("/tickets", (req, res) => {
    let sql = "SELECT * FROM tickets";

    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

app.put("/edit", (req, res) => {
    const { id } = req.body;
    const { descricao } = req.body;
    const { nome } = req.body;
    const { prioridade } = req.body;

    let sql = "UPDATE tickets SET nome = ?, descricao = ?, prioridade = ? WHERE id = ?";

    db.query(sql, [nome, descricao, prioridade, id], (err, result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})

app.listen(3001, () => {
    console.log("rodando")
})