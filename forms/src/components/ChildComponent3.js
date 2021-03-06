import React, {Component} from 'react';

export default class ChildComponent3 extends Component {
    
    state = {
        name: "Vukasin",
        newName: ""
    }

    handleChange =(e) => {
        this.setState({newName: e.target.value});
    }

    handleSubmit =(e) => {
        e.preventDefault();
        this.setState({name: this.state.newName});
    }

    shouldComponentUpdate(nextProps, nextState) {

        if(this.state.name === nextState.name){
            console.log("This state and next state are the same!");
            return false;
        }
        console.log("They are not the same");

        return true;

    }

    render() {
        return (
            <div>
                {this.state.name}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}