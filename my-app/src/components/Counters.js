import React, {Component} from "react";
import ChildCounter from "./ChildCounter";

class Counters extends Component {
    state = {
        counters: [
            {id: 0, value: 0},
            {id: 1, value: 1},
            {id: 2, value: 2},
            {id: 3, value: 3}
        ]
    }

    handleIncrement = (id) => {
        console.log(id);

        //Spread operator
        // const counters = [...this.state.counters];

        this.setState({
            counters: this.state.counters.map((item) => {
                return item.id === id ? {...item, value: item.value + 1} : item
            }),
        });
    };

    handleDelete = id => {
        this.setState((previousState) => ({
            counters: previousState.counters.filter((item) => item.id !== id)
            // filter vraca sve sto ne spada u uslov, pa ako stavimo item.id === id onda ce samo jednu stvar na ekranu da ostavi
        }))
    };

    // handleDelete = (id) => {
    //     this.setState({
    //         counters: this.state.counters.filter((counter) => counter.id !== id);
    //     });  
    // };

    render() {
        return (
            <div>
                {this.state.counters.map((counter) => (
                    <ChildCounter 
                    key={counter.id} 
                    // id={counter.id} 
                    // value={counter.value} 
                    counter={counter}
                    onIncrement={this.handleIncrement} 
                    onDelete={this.handleDelete}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;