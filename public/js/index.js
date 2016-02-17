

document.getElementById("showall").onclick = function() {
	var todoForm = document.getElementById("todoForm");
	document.getElementById("status").value = 1;
	todoForm.method='GET';
	todoForm.submit();
};

/*
document.getElementById("showinactive").onclick = function() {
   var todoForm = document.getElementById("todoForm");
   document.getElementById("status").value = 0;
	todoForm.method='GET';
	todoForm.submit();
};
*/

function updateStatus() {
	var itemId = this.parentElement.parentElement.id;
	var todoForm = document.getElementById("todoForm");
	document.getElementById("status").value = this.checked ? 0 : 1;
	document.getElementById("itemId").value = itemId;
	document.getElementById("operation").value = "update";
	document.getElementById("todoForm").method= "post";
	todoForm.submit();
}

function deleteItem() {
	var itemId = this.parentElement.parentElement.id;
	var todoForm = document.getElementById("todoForm");
	document.getElementById("itemId").value = itemId;
	todoForm.method='post';
	document.getElementById("operation").value = "delete";
	todoForm.submit();
}

var checkboxes = document.getElementsByName('chk_status');
for(var i=0, n=checkboxes.length;i<n; i++) {
	checkboxes[i].onclick = updateStatus;
}

var deleteButtons = document.getElementsByName('img_item');
for(var i=0, n=deleteButtons.length;i<n; i++) {
	deleteButtons[i].onclick = deleteItem;
}