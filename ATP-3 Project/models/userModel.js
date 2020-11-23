const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from user where Cname='"+user.Cname+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){

				console.log(results[0].Cemail);
					console.log("ooo");
				callback(results);
			}else{
				callback(false);
			}
		});
	},
	
	getAll: function(callback){
		var sql = "select * from tours";
		db.getResults(sql, function(results){
			callback(results);
		});
	},

	getById: function(Sid, callback){

		var sql = "select * from tours where id='"+Sid+"'";
		db.getResults(sql, function(results){
			//console.log(results[0].seller);
				callback(results);
		});



	},

	insertClient: function(newUser, callback){
		var sql= "INSERT INTO user (Cname,Cemail,password,tour,status,payable,picture) VALUES ( '"+newUser.Cname+"','"+newUser.Cemail+"','"+newUser.password+"','"+newUser.tour+"', '"+newUser.status+"','"+newUser.payable+"','"+newUser.picture+"')";
		db.execute(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}

		});
	},

	insertRating: function(rating, tourname, callback){
		var sql= "UPDATE tours SET rating= rating+" +(rating/5)+ " WHERE tname= '"+tourname+"'";
		db.execute(sql, function(results){
			console.log("query done");

			if(results.length >0 ){
				console.log("query done 2");
				callback(true);
			}else{
				callback(false);
			}

		});
	},

	search: function(key, callback){
		var sql = "SELECT * FROM tours WHERE place LIKE '"+key+"%' ";
		console.log(sql);
		db.getResults(sql, function(results){

			console.log("dataset length "+results.length);
			if(results.length > 0){
				callback(results);
			}else{
				callback(false);
			}
		});
	},
	

}

//LIKE ''"+key+"''%' and type !='admin'