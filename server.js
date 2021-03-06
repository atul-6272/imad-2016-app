var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article-one', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/ui/profile.html', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
});
app.get('/article-two', function (req, res) {
    res.send('article two is served and it will be requested')
});
app.get('/article-three', function (req, res) {
    res.send('article three is served and it will be requested')
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/road.jpg', function (req, res) {
res.sendFile(path.join(__dirname, 'ui','road.jpg'));
});

app.get('/ui/download.png', function (req, res) {
res.sendFile(path.join(__dirname, 'ui','download.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
