const express = require('express');
const { redirect, cookie } = require('express/lib/response');
const app = express();

// Middleware để thiết lập CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // Cho phép origin này truy cập
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Các phương thức HTTP được phép
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type , X-PINGOTHER'); // Các tiêu đề được phép
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});


app.get('/simple', (req, res) => {

    res.json({ message: 'Simple Request is working!' });
});


app.get('/preflight', (req, res) => {

    res.json({ message: 'Preflighted Request is working!' });
});

app.get('/redirect', (req, res) => {

    // res.redirect(307, 'http://localhost:3000/simple');
    res.redirect( 'http://localhost:3000/simple');
});

app.get('/credentials', (req, res) => {

    res.cookie('bear_token',"12313213123123")
    res.json({ message: 'Request with Credentials is working!' });
});


app.post('/preflight-credentials', (req, res) => {
    res.cookie('bear_token',"12313213123123")
    res.json({ message: 'Preflight Request with Credentials is working!' });
});



app.listen(3000, () => {
    console.log('API is running on port 3000');
});
