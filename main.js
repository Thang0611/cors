const express = require('express');
const app = express();

// Middleware để thiết lập CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500'); // Cho phép origin này truy cập
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Các phương thức HTTP được phép
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Các tiêu đề được phép
    next();
});

app.get('/data', (req, res) => {
    res.json({ message: 'CORS is working!' });
});

app.listen(3000, () => {
    console.log('API is running on port 3000');
});
