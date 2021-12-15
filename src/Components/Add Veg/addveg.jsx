import React , {Component} from "react" ;

class AddVeg extends Component {
constructor (props) {
super (props);
this.state = {vegName:"" , array : []} ;
this.vegValue = this.vegValue.bind(this);
}

vegValue () {
let inp = document.getElementById("input");
this.setState({vegName : inp.value});
this.state.array.push(inp.value);
inp.value = "" ;
}
       render () {
        return (
            <div>
                <p>This is adding veg component</p>
                <input id="input"></input>
                <button onClick={this.vegValue}>click</button>
                <p>{this.state.vegName}</p>
                <ul>
                    {this.state.array.map((item)=>{
                        return <li>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default AddVeg ;

