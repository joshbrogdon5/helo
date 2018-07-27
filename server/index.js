const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
const session = require('express-session');
require('dotenv').config();


const app = express();

app.use(bodyParser.json());

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))


app.post('/api/register', controller.register)
app.post('/api/login', controller.login);


massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err));


app.listen(SERVER_PORT, () => {
    console.log(`Party is hoppin on port ${SERVER_PORT}`)
})