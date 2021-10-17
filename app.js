const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    const archivo = path.join(__dirname, './views/home.html')
    res.sendFile(archivo);
});

app.get('/register', (req, res) => {
    const archivo = path.join(__dirname, './views/register.html')
    res.sendFile(archivo);
});

app.post('/register', (req, res) => {
    req.body;
    res.redirect('/');
});

app.get('/login', (req, res) => {
    const archivo = path.join(__dirname, './views/login.html')
    res.sendFile(archivo);
});

app.listen(3000, () => {
    console.log("El servidor esta corriendo");
}); 
