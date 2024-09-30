import React from "react";

interface CounterDisplayProps{
    count:number;
}

const CounterDisplay:React.FC<CounterDisplayProps> = ({count}) => {
    return(
        <div>
            <h2>Current Count: {count}</h2>
        </div>
    );
}

export default CounterDisplay