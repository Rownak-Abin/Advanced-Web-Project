//declaration
const express 			= require('express');	
const bodyParser 		= require('body-parser');
const exSession 		= require('express-session');
const cookieParser 		= require('cookie-parser');
const login				= require('./controllers/login');
const rate				= require('./controllers/rate');
const search			= require('./controllers/search');
const home				= require('./controllers/home');
const logout			= require('./controllers/logout');
const hotel				= require('./controllers/hotel');
const path				= require('path');
const fileUpload 		= require('express-fileupload');

const { check, validationResult } = require('express-validator'); 
const _ 				= require('lodash');
const app				= express();
const port				= 3000;


//configuration
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


//middleware
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(fileUpload({
    createParentPath: true
}));




app.use('/home', home);
app.use('/login', login);
app.use('/rate', rate);
app.use('/search', search);
app.use('/logout', logout);
app.use('/hotel', hotel);
/*
app.use('/user', user);
app.use('/employee', employee);
app.use('/eusers', eusers);
*/

//router
app.get('/', (req, res)=>{
	res.send('Welcome');
});

//server startup
app.listen(port, (error)=>{
	console.log('server strated at '+port);
});