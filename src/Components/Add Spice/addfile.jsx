import React , {Component} from "react" ;

class AddSpice extends Component {
constructor (props) {
super(props);
this.state = {addSpice: "", array : []}
this.inputValue = this.inputValue.bind(this) ;
}

inputValue () {
let input = document.getElementById("input");
this.setState({addSpice:input.value}) ;
this.state.array.push(input.value);
console.log(input.value);
input.value = "" ;
}


render () {
    return (
        <div>
            <p>Add Spice componnnt</p>
            <input id="input"></input>
            <button onClick={this.inputValue}>Click</button>
            <p>{this.state.addSpice}</p>
            <ul>
                {this.state.array.map((item)=>{
                   return <li>{item}</li>
                })}
            </ul>
        </div>
    )
}

}

export default AddSpice ;