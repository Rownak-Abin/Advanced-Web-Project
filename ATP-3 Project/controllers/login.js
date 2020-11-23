const express 		= require('express');
const userModel		= require.main.require('./models/userModel');
const router 		= express.Router();
const { check, validationResult } = require('express-validator'); 

router.get('/', (req, res)=>{
	res.render('login');
});

router.post('/', [
	check('uname').not().isEmpty().withMessage('Name must be filled!'),
	check('password').not().isEmpty().withMessage('Password must be filled!')

	], (req, res)=>{

	const errors = validationResult(req); 


	if (!errors.isEmpty()) { 
		const alert = errors.array();
       res.render('login', {alert});
    } 

    else{


	var user = {
		Cname: req.body.uname,
		password: req.body.password
	};

	userModel.validate(user, function(results){

		
		

		console.log("loged in with table");

		var i = results[0].id;
		
			
			req.session.uname = req.body.uname;
			
				res.render('clientForm', {info: results});
		
	});

}
});


	

module.exports = router;