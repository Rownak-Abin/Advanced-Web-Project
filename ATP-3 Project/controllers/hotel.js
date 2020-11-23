const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();
const { check, validationResult } = require('express-validator'); 
var path = require('path');



router.get('/hotels', (req, res)=>{

	


	userModel.getAllhot(function(results){

		res.render('hotels', {hotel: results});

	});
	
	
	
});

router.get('/details/:id', (req, res)=>{

	var i = req.params.id;

	console.log(i);

	userModel.getHotById(i, function(results){

	res.render('hoteldetails', {det: results} );
	
	});
});


router.post('/details/:id', (req, res)=>{



		var image = req.files.pict;
		console.log(image);

		var tpath = path.dirname(require.main.filename) + "/public/assets/imgs/" + image.name;

		var dirpic = "/public/assets/imgs/" + image.name;

		console.log(tpath);


		
		image.mv(tpath, function(err){

			if(err){ res.send("something wrong;");}
			else{

				console.log("success picture");

			}


		});



	var newUser = {
		Cname : req.body.name,
		Cemail : req.body.email,
		password : req.body.pass,
		hotel: req.body.hotelnm,
		status: "Pending",
		payable: req.body.cos,
		picture: dirpic
	};

	


	userModel.insertHotClient(newUser, function(status){


		

		res.redirect('/home');

	});

	
	
	});



	router.get('/hotels/:id', (req, res)=>{


		var w = req.params.id;


		if(w!=null || w!=undefined )
		{

		userModel.search(w, function(results){

			
			var str = "";
				for(i=0;i<results.length;i++)
					{
					   str+='<div style="position: relative; width:980px; height: 205px; background-color: #ccffff; border-radius:2px;box-shadow: 2px 5px 28px -11px rgba(0,0,0,0.75); left: 300px; margin-top:25px; "><img src= "'+results[i].picone+'" width="200px;" height="150px;" style="border:1px solid black; padding:2px;  float:left; margin-right:10px; margin-bottom:5px; position:relative; top:30px; left:20px;"><h3 style="position: relative; top:27px; left:35px; font-family: Georgia ;font-weight: bold">'+results[i].hname+'</h3><h4 style="position: relative;left:35px; top: 35px; color: #B22222; ">Room :'+results[i].roomname+'</h4><h5 style="position: relative;left:30px; top: 50px;  ">Price : '+results[i].price+'</h5><a href="/hotel/details/'+results[i].id+'" class="Rqbutton" style="position: relative; padding-top:  10px; padding-bottom:10px; top:-30px; left:450px">Request</a> </div>';
					    
					}

					console.log(str);
				res.send(str);


		});

	}

	/*str+='<div style="position: relative; width:980px; height: 205px; background-color: #ccffff; border-radius:2px;box-shadow: 2px 5px 28px -11px rgba(0,0,0,0.75); left: 300px; margin-top:25px; "><img src= "'+results[i].picone+'" width="200px;" height="150px;" style="border:1px solid black; padding:2px;  float:left; margin-right:10px; margin-bottom:5px; position:relative; top:30px; left:20px;"><h3 style="position: relative; top:27px; left:35px; font-family: Georgia ;font-weight: bold">'+results[i].tname+'</h3><h4 style="position: relative;left:35px; top: 35px; color: #B22222; ">Seller :'+results[i].seller+'</h4><h5 style="position: relative;left:30px; top: 50px;  ">Tour duration : '+results[i].duration+'</h5><a href="/home/details/'+results[i].id+'" class="Rqbutton" style="position: relative; padding-top:  10px; padding-bottom:10px; top:-30px; left:450px">Request</a> </div>';*/
	});


module.exports = router;

