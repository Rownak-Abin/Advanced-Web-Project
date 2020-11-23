const express 		= require('express');
const userModel		= require.main.require('./models/userModel');
const router 		= express.Router();

router.get('/', (req, res)=>{
	res.render('login');
});

router.post('/', (req, res)=>{




	var user = {
		Cname: req.body.uname,
		password: req.body.password
	};

	userModel.validate(user, function(results){

		
		

		console.log("loged in with table");
		
			
			req.session.uname = req.body.uname;
			
				res.render('clientForm', {info: results});
		
	});
});


	

module.exports = router;