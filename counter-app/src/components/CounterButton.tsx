import React from "react";

interface CounterButtonProps {
    onIncrement : () => void;
}

const CounterButton:React.FC<CounterButtonProps> = ({onIncrement}) =>{
    return(
        <button onClick={onIncrement}>
            Increment Count
        </button>
    );
}

export default CounterButton