import react from "react";

class AddCanned extends react.Component {
    constructor(props){
        super(props);
        this.state = {addcaned:"" , array:[]}
        this.cannedValue = this.cannedValue.bind(this);
        }
        
        cannedValue () {
        let inp = document.getElementById("inp");
        this.setState({addcaned:inp.value});
        this.state.array.push(inp.value);
        inp.value = "" ;
        }
        
        render () {
            return (
            <div>
            <p>Canned component</p>
            <input id="inp"></input>
            <button onClick={this.cannedValue}>click</button>
            <p>{this.state.addcaned}</p>
            <ul>
                {this.state.array.map((item)=>{
                    return <li>{item}</li>
                })}
            </ul>
            </div>
            )
        }

}

export default AddCanned ;