import React, { useState } from 'react'

const HigherOrderComponent = (Child, increment) => {
    const HOC = () => {
        const [value, setValue] = useState(0);
        const handleIncrement = () => {
            setValue(value + increment);
        }
        return <Child value={value} incrementHandle={handleIncrement} />
    }
    return HOC
}


function ChallengeC() {
    return (
        <>
            <ComponentA />
            <hr />
            <ComponentB />
            <hr />
            <ComponentC />
        </>
    )
}

export default ChallengeC

const ComponentA = HigherOrderComponent(({value, incrementHandle}) => {
    return (
        <>
            <button onClick={incrementHandle}>Increment by 2</button>
            <h2>{value}</h2>
        </>
    )
},2)

const ComponentB = HigherOrderComponent(({value,incrementHandle}) => {
    return (
        <>
            <button onClick={incrementHandle}>Increment by 20</button>
            <h2>{value}</h2>
        </>
    )
},20)


const ComponentC = HigherOrderComponent(({value, incrementHandle}) => {
    return (
        <>
            <button onClick={incrementHandle}>Increment by 200</button>
            <h2>{value}</h2>
        </>
    )
},200)

