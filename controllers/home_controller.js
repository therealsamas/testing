

module.exports.home = async function(req,res){
	try{
		console.log('hitttt');
		return res.render('index.ejs')
	}catch(error){
		console.error(error);
	}
}

module.exports.espdata = async function(req,res){
	try{
		let data = req.body;
		console.log(data);
		console.log("esp hit");
		return res.status(200).json({
			message:"req was success"
		});
	}catch(error){
		console.error(error);
	}
}
