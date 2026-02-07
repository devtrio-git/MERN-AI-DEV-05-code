import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import useCounter from '../../hooks/useCounter'
import { Layout } from '../../higherOrderComponent/Layout';

const Home = () => {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <Layout name="Asa">
      <div>
        <h1>Home</h1>
        <h2>Count: {count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </Layout>
  )
}

export default Home
