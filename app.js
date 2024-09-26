const express = require('express');
const app = express()
const path = require('path')

const port = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname,'views'))

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
    res.render('index', { message: 'Prueba de Express y EJS'})
  });
  
app.get('/mensaje', (req, res) => {
res.send('Este es un mensaje enviado con un método GET.');
});




app.listen(port, () => {
console.log(`Servidor escuchando en el puerto ${port}`);
});