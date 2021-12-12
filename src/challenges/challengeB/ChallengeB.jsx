import React,{useState, useEffect} from 'react'


function ChallengeB() {

    const [todos,setTodos] = useState([{
        userId:'',
        id:'',
        title:'',
        completed:'' 
    }])

    const url = "http://jsonplaceholder.typicode.com/todos";
    fetch(url).then(res=>res.json()).then(response =>{
        console.log(response);
        // setTodos({
        //     userId: response
        // })
    })
    return (
        <div>
            
        </div>
    )
}

export default ChallengeB
