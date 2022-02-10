import React , {Component} from "react" ;

class AddFruit extends Component {
constructor(props){
super(props);
this.state = {addfruit:"" , array:[]}
this.getValue = this.getValue.bind(this);
this.changeValue = this.changeValue.bind(this) ;
}

getValue () {
this.state.array.push(this.state.addfruit);
this.setState({addfruit : this.state.addfruit});
}   

changeValue (event) {
this.state.addfruit = event.target.value ;
}

render () {
    return (
    <div>
    <p>Welcome to the fruit shop</p>
    <input onChange={this.changeValue}></input>
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