const express = require('express');
const app = express()

const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send('Hola, mundo!');
  });
  
  app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });