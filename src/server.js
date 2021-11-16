require('dotenv').config();
const express = require('express');
const app = express();
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const port = process.env.PORT || 2000;
const route = require('./routes/web');
const DB = require('./app/config/mongoDB/index');
const flash = require('express-flash');
const session = require('express-session');
const mongoStore = require('connect-mongo');

app.use(express.json()); //body 
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); //statis public
app.set('view engine', 'ejs'); // register the template engine
app.set('views', path.join(__dirname, '/resources/views')); // views directory
app.use(expressLayouts);

//connect db database
DB.connectDB();
//SETTING EXPRESS-SESSION MIDDLEWARES
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    store: mongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/pizza',
        collectionName: 'sessions'
    }),
    cookie: { maxAge: 24 * 60 * 60 * 1000 } //86400 seconds *1000 miliseconds = 24hour 
}));
//SETTING EXPRESS-FLASH MIDDLEWARES
app.use(flash());
//Globle middlewares
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
})
route(app);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})