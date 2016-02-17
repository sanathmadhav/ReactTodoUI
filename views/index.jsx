var React = require('react');
var Layout = require('./layout');

var Index = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  handleRequest: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
	var tableRow = this.props.items;
	//console.log("Row :: " + tableRow);
    return (
		<html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
		</head>
		<body>
		<div>
        <h1>{this.props.title}</h1>
		<form action="/" method="post" id="todoForm">
		<div>
			<input key="item" id="item" name="item"/>&nbsp;&nbsp;
			<input key="status" id="status" name="status" type="hidden"/>
			<input key="itemId" id="itemId" name="itemId" type="hidden"/>
			<input key="operation" id="operation" name="operation" type="hidden"/>
			<input key="add" type="submit" value="Add"/>&nbsp;&nbsp;
			<input key="showall" type="button" id="showall" value="Show All"/>&nbsp;&nbsp;
			<input key="showinactve" type="button" id="showinactive" value="Show Inactive" onClick="{this.testCall()}"/>&nbsp;&nbsp;
		</div>
		</form>
		<br/>
			<table>
				<tbody>
				{tableRow.map(function(tableItem, i){
					var itemRow;
					if(tableItem.status == 0) {
						itemRow = <span><td><input name="chk_status" type="checkbox" checked="true"/></td>
						<td><strike>{tableItem.name}</strike></td></span>;
					} else {
						itemRow = <span><td><input name="chk_status" type="checkbox" /></td>
						<td>{tableItem.name}</td></span>;
					}
					return (
						<tr key={tableItem._id} id={tableItem._id}>
							{itemRow}
							<td><img name="img_item" src="/images/remove.png"/></td>
						</tr>
					)
				})}
				</tbody>
			</table>
		</div>
		<script src="/js/index.js"></script>
		</body>
		</html>
    );
  }
});

module.exports = Index;
