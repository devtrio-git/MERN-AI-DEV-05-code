import React, { useEffect, useState } from 'react'

const LifeCycleHandling = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(true)

    console.log("Component Rendered");

    // useEffect(()=>{
    //         console.log("I am running whereever the component renders")
    //     getUsers()
    // })

    // useEffect(()=>{
    //     console.log("useEffect runs only once when the component mounts.")
    //     getUsers()
    // },[])

    useEffect(() => {
        console.log("useEffect runs on mount as well as on count2 update.")
        getUsers()
    }, [count2, count])

    const getUsers = async () => {
        try {
            setLoader(true)
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUsers(data)
            setLoader(false)
            console.log(data, "<-- data")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Use Effect in React JS</h1>
            <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Update Count: {count}</button>

            <button className='btn btn-primary' onClick={() => setCount2(count2 + 1)}>Update Count2:  {count2}</button>

            <div>
                {loader ?
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    : users?.map((item, index) => (
                        <p key={index}>{item?.name}</p>
                    ))}
            </div>
        </div>
    )
}

export default LifeCycleHandling
