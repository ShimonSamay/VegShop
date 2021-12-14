import React , {Component} from "react" ;

class AddFruit extends Component {
constructor(props){
super(props);
this.state = {addfruit:"" , array:[]}
this.getValue = this.getValue.bind(this);
}

getValue () {
let inp = document.getElementById("inp");
this.setState({addfruit:inp.value});
this.state.array.push(inp.value);
inp.value = "" ;
}

render () {
    return (
    <div>
    <p>Welcome to the fruit shop</p>
    <input id="inp"></input>
    <button onClick={this.getValue}>click</button>
    <p>{this.state.addfruit}</p>
    <ul>
        {this.state.array.map((item)=>{
            return <li>{item}</li>
        })}
    </ul>
    </div>
    )
}
}
export default AddFruit ;