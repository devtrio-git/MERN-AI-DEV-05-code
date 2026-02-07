import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Layout } from '../../higherOrderComponent/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../store/slices/counterSlice'

const About = () => {
  const globalCount = useSelector((state)=>state?.counter?.value);

  const dispatch = useDispatch()

  return (
    <Layout>
      <div>
        <h1>About</h1>
        <h1>Counter {globalCount}</h1>
        <button onClick={()=> dispatch(incrementByAmount(5))}>Increment by 5</button>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
      </div>
    </Layout>
  )
}

export default About
