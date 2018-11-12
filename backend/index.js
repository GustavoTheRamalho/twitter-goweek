const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(
    'mongodb://goweek:senha123@ds045087.mlab.com:45087/goweek-gusr', 
    {
        useNewUrlParser: true,
    }
);

app.use((req, res, next) => {
    req.io = io;
    return next();
});
app.use(cors());
app.use(express.json());
app.use(require('./src/routes'));

server.listen(PORT, () => {
    console.log ('kk server started on port ' + PORT);
});