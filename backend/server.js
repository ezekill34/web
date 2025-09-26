require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Inicializar DB
const initSql = fs.readFileSync(__dirname + '/migrations/init.sql', 'utf8');
db.exec(initSql);

// Rutas
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));