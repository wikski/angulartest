const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');
const path          = require('path');

User = require('./models/user')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('localhost', 'angulartest')

const db = mongoose.connection;

// serve front end
app.get('/', function(req, res, next){
    res.status(200).sendFile(path.join(__dirname+'../public/index.html'));
});

// symlink front end assets
app.use('/scripts', express.static(__dirname + '/node_modules/'));

// get users
app.get('/api/users', function(req, res){
    User.getUsers(function(err, users){
        if(err){
            throw err;
        }
        res.json(users);
    })
});

// create user
app.post('/api/users', function(req, res){
    let user = req.body;
    User.addUser(user, function(err, user){
        if(err){
            throw err;
        }
        res.status(200).send({status: 200});
    })
});

app.listen(3000);
console.log( 'running on http://localhost:3000' )