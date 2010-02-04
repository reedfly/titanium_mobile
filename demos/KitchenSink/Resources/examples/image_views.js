// create table view data object
var data = [
	{title:'Basic', hasChild:true, test:'../examples/image_view_basic.js'},
	{title:'Animated', hasChild:true, test:'../examples/image_view_animated.js'},
	{title:'Image Blob', hasChild:true, test:'../examples/image_view_blob.js'},

];

// create table view
var tableview = Titanium.UI.createTableView({
	data:data
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
		var win = Titanium.UI.createWindow({
			url:e.rowData.test,
			title:e.rowData.title
		});
		Titanium.UI.currentTab.open(win,{animated:true})
	}
});

// add table view to the window
Titanium.UI.currentWindow.add(tableview);