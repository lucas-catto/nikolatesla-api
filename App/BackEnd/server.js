
const express = require('express');
const mysql   = require('mysql');
const cors    = require('cors');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'NikolaTesla'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conexão com o banco de dados estabelecida.');
});

const app = express();

app.use(cors());

app.get('/nikola', (req, res) => {

    let sql = 'SELECT * FROM Nikola';

    db.query(sql, (err, results) => {

        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
