var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const PORT = 3001;

io.on('connection', (socket) => {
    console.log('a user connected');
});

app.get('/', (req, res) => res.send('hello!'));
http.listen(PORT, () => {
    console.log('listening on *:3001');
});