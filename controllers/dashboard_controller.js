
module.exports.page = async function(req,res){
	try{
		console.log('inside dashboard');
		return res.render('dashboard.ejs');
	}catch(error){
		console.error(error);
	}
}