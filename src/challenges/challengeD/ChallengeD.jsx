import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/actions'
function ChallengeD() {
    return (
        <div>
            <br/>
            <Component1 />
            <br/>
            <br/>
            <Component2 />
        </div>
    )
}

export default ChallengeD

const Component1 = () => {
    const dispatch = useDispatch()
    const value = useSelector(state => state.value)

    const incrementHandler = () => {
        dispatch(increment(value))


    }

    const decrementHandler = () => {
        dispatch(decrement(value))

    }

    return (
        <>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </>
    )

}

const Component2 = () => {
    const value = useSelector(state => state.value)
    return (
        <>
            <h1>{value}</h1>
        </>
    )
}
