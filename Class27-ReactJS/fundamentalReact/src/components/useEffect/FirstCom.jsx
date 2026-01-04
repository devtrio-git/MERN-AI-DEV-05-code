import React, { useEffect, useState } from 'react'

const FirstCom = () => {
    const [count, setCount] = useState(0)
    console.log("first component renders")

    useEffect(() => {
        console.log("first component mount")

        let interval = setInterval(() => {
            console.log("first Interval Runs after 5 sec")
            setCount(prev => prev + 1)
        }, 5000);

        return () => { // when component unmount I am trigger
            console.log("I am dead")
            clearInterval(interval)
        }
    }, [])

    return (
        <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>
            <h1>First Component</h1>
            <h3>{count}</h3>
        </div>
    )
}

export default FirstCom
