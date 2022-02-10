import React, {Component} from 'react';

class TextArea extends Component {
    state = {
        description: "Content of textarea"
    };

    handleChange = e => {
        this.setState({description: e.target.value})
    }

    render() {
        return (
            <form>
                <textarea value={this.state.description} onChange={this.handleChange}/>
            </form>
        )
    }

}

export default TextArea;