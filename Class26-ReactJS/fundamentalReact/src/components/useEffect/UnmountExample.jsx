import React, { useState } from 'react'
import FirstCom from './FirstCom'
import SecondCom from './SecondCom'

const UnmountExample = () => {
    const [toggle, setToggle] = useState(false)
    console.log("parent component")
    return (
        <div>
            <h1>useEFfect Unmount Example</h1>
            <button className='btn btn-primary' onClick={() => setToggle(!toggle)}>Toggle</button>
            <div className='d-flex gap-3'>
                {
                    toggle ?
                        <FirstCom />
                        :
                        <SecondCom />
                }
            </div>
        </div>
    )
}

export default UnmountExample
