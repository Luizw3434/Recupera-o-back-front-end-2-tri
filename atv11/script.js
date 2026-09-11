const express = require('express');
const app = express();

app.get('/sobre', (req, res) => {
  res.send('seja muito bem vindo ao projeto recupera');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});