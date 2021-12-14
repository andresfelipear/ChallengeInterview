import React, { createContext, useContext } from 'react'

const DataContext = createContext();


function ChallengeE() {
    return (
        <div>
            <ComponentA />

        </div>
    )
}

export default ChallengeE


const ComponentA = () => {
    const list = {
        name: 'hello',
        value: 0,
        color: 'red'
    }

    return (
        <DataContext.Provider value={list}>
            <h1>ComponentA</h1>
            <ComponentB />
        </DataContext.Provider>
    )

}

const ComponentB = () => {
    return (
        <>
            <h2>ComponentB</h2>
            <ComponentC />
            <ComponentD />
        </>

    )
}

const ComponentC = () => {
    const context = useContext(DataContext)
    console.log(context)
    return (
        <h3>ComponentC</h3>
    )

}

const ComponentD = () => {
    return (
        <h4>ComponentD</h4>
    )
}