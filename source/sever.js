const express = require('express'); //Quan trọng "nên nhớ "
const path = require('path'); //Quan trọng "nên nhớ "
const app = express(); //Quan trọng "nên nhớ "
const port = 3000; //Quan trọng "nên nhớ "

app.set('views', path.join(__dirname, 'views')); //Quan trọng "nên nhớ "
app.set('view engine', 'ejs') //Quan trọng "nên nhớ "

// Route mặc định
app.get('', (req, res) => {
  res.render('index0.ejs')
});

// Route để trả về file ejs
app.get('/test', (req, res) => {
  res.render('index1.ejs') // Đường dẫn tới file ejs
});


app.get('/hao', (req, res) => {
  res.render('index2.ejs');
});

// Khởi chạy server
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
