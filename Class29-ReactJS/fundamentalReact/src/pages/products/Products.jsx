import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom';

const Products = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    setData(null)
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const resData = await response.json()
      console.log(resData)
      setData(resData)
    } catch (error) {
      console.log(error)
      setData([])
    }
  }
  return (
    <div>
      <Navbar />

      <div className='container'>
        <div className='d-flex flex-wrap justify-content-between'>
        {data?.map((item, key) => (
          <div className="card" style={{width: "12rem"}}>
            <img src={item?.image} className="card-img-top" alt="..." height={200}/>
              <div className="card-body">
                <h5 className="card-title">{item?.title}</h5>
                <p className="card-text">{item?.description?.slice(0,50)+ "..."}</p>
                <Link to={`/product/details/${item?.id}`} className="btn btn-primary">View Details</Link>
              </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Products
