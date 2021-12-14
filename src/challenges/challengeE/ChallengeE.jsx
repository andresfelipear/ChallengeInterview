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
            <p>My props: name:{list.name}; value:{list.value}; color:{list.color}</p>
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
    return (
        <>
            <h3>ComponentC</h3>
            <p>This data come from the ComponenteA = <strong>{context.name}</strong></p>
        </>


    )

}

const ComponentD = () => {
    const context = useContext(DataContext)
    return (
        <>
            <h4>ComponentD</h4>
            <p>This data come from the ComponenteA =<strong>{context.value}</strong> || <strong>{context.color}</strong></p>

        </>

    )
}