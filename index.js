// IMPORT Express Server
const e1 = require('express');
const app = e1();

//SEARCH API - Updated
app.get('/search', (req, res) => {
    res.send('<html><body>INSIDE SEARCH API..</body></html>');
});

//VIEW API
app.get('/view', (req, res) => {
    res.send('<html><body>INSIDE VIEW API..</body></html>');
});

//Login API
app.post('/login', (req, res) => {
    res.send('<html><body>INSIDE LOGOIN API..</body></html>');
});

//UPDATE API
app.put('/updateprofile', (req, res) => {
    res.send('<html><body>INSIDE UPDATE PROFILE API..</body></html>');
});

//DELETE API
app.delete('/del', (req, res) => {
    res.send('<html><body>INSIDE DELETE API..</body></html>');
});

//REGISTER API
app.post('/register', (req, res) => {
    res.send('<html><body>INSIDE REGISTER API..</body></html>');
});

//PAYMENT API
app.post('/payment', (req, res) => {
    res.send('<html><body>INSIDE PAYMENT API..</body></html>');
});

// START THE EXPRESS SERVER. 5000 is the PORT NUMBER
app.listen(5000, () =>
    console.log('EXPRESS Server Started at Port No: 5000'));


