import React, { useState } from 'react'


const ChallengeA = () => {
    const [list, setList] = useState([]);
    const [inputText, setInputText] = useState("")

    const handleChange = (e) => {
        setInputText(e.target.value)

    }

    const handleSubmit = () => {
        if (inputText !== "") {
            setList([...list, inputText])
            setInputText("")
        }
    }

    const handleClick = (item) => {
        setList([...list.filter(e => e !== item)])
    }

    return (
        <div>
            <input type="text" value={inputText} onChange={handleChange} />
            <br /> <br />
            <button onClick={handleSubmit}> Add </button>
            <ul>
                {
                    list.length > 0 && list.map((item, index) => {
                        return (
                            <li key={index} onClick={() => handleClick(item)}>{item} </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ChallengeA
