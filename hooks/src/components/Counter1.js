import React, {useEffect, useState} from 'react';


const Counter1 = () => {
    // const [counter, setCounter] = useState(initialFunction());
    const [state, setState] = useState({counter: 4, color: "blue"});
    const {counter, color} = state;

    const handleDecrement = () => {
        // setCounter((prevState) => prevState - 1 );
        setState((prevState) => {
            return {...prevState, counter: prevState.counter - 1};
        })
    }

    // useEffect(() => {
    //     console.log("render");
    // });

    //componentDidMount
    // useEffect(() => {
    //     console.log("render");
    // }, []);

    // useEffect(() => {
    //     console.log("Render");
    // }, [state.color]);

    useEffect(() => {
        console.log("Hello World!");

        return () => {
            console.log("Do some cleanup");
        };
    }, []);

    return(
        <div>
            <button onClick={handleDecrement}>-</button>
            <span>{counter}</span>
            <span>{color}</span>
            <button>+</button>
            <button onClick={() => setState((prevState) => {
                return {...prevState, color: "red"}
            })}>Change color</button>
        </div>
    )
}

export default Counter1;