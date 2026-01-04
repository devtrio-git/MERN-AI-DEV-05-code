import React, { useEffect, useState } from 'react'

const SecondCom = () => {
    const [count, setCount] = useState(0)
    console.log("second component renders")

    useEffect(() => {
        console.log("first component mount")
    }, [])

    return (
        <div style={{ backgroundColor: "yellow", padding: '10px' }}>
            <h1>Second Component</h1>
             <h3>{count}</h3>
        </div>
    )
}

export default SecondCom
