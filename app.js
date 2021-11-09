const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.sendFile(__dirname + "/public/views/home.html")

});

app.get('/about', (req, res) => {

    res.sendFile(__dirname + "/public/views/about.html")

});

app.get('/works', (req, res) => {

    res.sendFile(__dirname + "/public/views/works.html")
})

app.get('/sherlocks-actors', (req, res) => {

    res.sendFile(__dirname + "/public/views/photo-gallery.html")
})

app.listen(3001, () => {
    console.log("server is running!");
});