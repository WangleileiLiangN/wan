import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'axios'
class Marry extends React.Component{
//	constructor(props){
//		super(props)
//		this.state = {
//			name:'wang'
//		}
//	}
//	componentDidMount(){
//		this.Son = $.get('./src/index.json').then(function(res){
//			console.log(res)
//		}.bind(this))
//	}

	render(){
		return(
			<div>nihao</div>
		)
	}

}
ReactDOM.render(
	<Marry/>,
	document.getElementById("app")
)
console.log('ok')
