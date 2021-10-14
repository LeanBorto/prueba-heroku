const express = require('express');
const app = express();
const path = require('path');
<<<<<<< HEAD
=======
const port = process.env.PORT || 3000
>>>>>>> 32f295dac6dd8b45ecea3996ff281fd0ba2a6c7a

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

app.listen(3030, () => {
    console.log("Bien ahí");
}); 
