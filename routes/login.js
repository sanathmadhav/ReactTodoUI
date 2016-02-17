
/*
 * GET users listing.
 */

exports.login = function(req, res)	{
	//res.send("respond with a resource");
	res.render('login', { title: 'Todo Exmaple', foo: {bar:'baz'},  items: items});
};