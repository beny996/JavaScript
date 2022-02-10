import React, {Component} from 'react';

export default class ChildComponent2 extends Component {
    
    componentWillUnmount() {
        alert("This component will be unomunt")
    }

    render() {
        return (
            <div>
                I am a child componenet
            </div>
        )
    }
}