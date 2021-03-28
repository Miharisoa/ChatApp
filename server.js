var app = require('express')();
var http = require('http').createServer(app);

const PORT = 3001;

app.get('/', (req, res) => res.send('hello!'));
http.listen(PORT, () => {
    console.log('listening on *:3000');
});