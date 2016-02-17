
var serviceRequest = require('superagent');

/*
 * GET home page.
 */

exports.index = function(req, res) {
	var items;
	if(req.method == 'POST'){
		var item = req.body["item"];
		if(req.body["operation"] == 'update') {
			var requestBody = {
				"status": req.body["status"]
			}
			serviceRequest
			.put('http://localhost:8000/api/item/status/' + req.body["status"] + '/' + req.body["itemId"])
			.set('Content-Type', 'application/json')
			.send(requestBody)
			.end(function(error, response){
				if(error) { 
					console.log("Error: " + error);
				}
				res.redirect('/');
			});
		} else if(req.body["operation"] == 'delete') {
			console.log("Got request....delete");
			var item = req.body["itemId"];
			serviceRequest
			.delete('http://localhost:8000/api/item/delete/' + item)
			.send(requestBody)
			.end(function(error, response){
				if(error) { 
					console.log("Error: " + error);
				}
				res.redirect('/');
			});
		} else {
			var requestBody = {
				"name":item,
				"status":1
			}
			serviceRequest
			.post('http://localhost:8000/api/item/add')
			.set('Content-Type', 'application/json')
			.send(requestBody)
			.end(function(error, response){
				if(error) { 
					console.log("Error: " + error);
				}
				res.redirect('/');
			});
		}
	} else {
		var url = 'http://localhost:8000/api/item/getAll';
		var reqUrl = req.url;
  		console.log("Inside 0" + req.url);
		if(reqUrl != "" && reqUrl.length > 5) {
			var paramTest = reqUrl.split("&")[1].split("=")[1];
			if(paramTest != undefined && paramTest != "" && paramTest == "0"){
				url = 'http://localhost:8000/api/item/getItemByStatus/' + paramTest;
			}
		}
		console.log("url :" + url);
		serviceRequest
		.get(url)
		.end(function(err, resp){
			if(resp != undefined && resp != null && resp.status == 200) {
				items = JSON.parse(resp.text);
				res.render('index', { title: 'Todo Exmaple', foo: {bar:'baz'},  items: items});
			} else {
				//Service down - message
			}
		});
	}
};
