import React, { useState, useEffect } from 'react'


function ChallengeB() {

    const [todos, setTodos] = useState([])

    const url = "http://jsonplaceholder.typicode.com/todos";

    useEffect(() => {
        fetch(url).then(res => res.json()).then(response => {
            setTodos(response);
        })
    }, [])

    return (
        <div>
            <ul>
                {
                    todos.map((todo, key) => {
                        return (
                            <li key={key}>
                               userId: {todo.userId} <br/>
                               Id: {todo.id} <br/>
                               title: {todo.title} <br/>
                               completed: {todo.completed} <br/> <br/>
                            </li>
                            
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default ChallengeB
