import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Layout } from '../../higherOrderComponent/Layout';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';

const Products = () => {
  const { data, loading, error } = useFetch("https://fakestoreapi.com/products");

  const dispatch = useDispatch()

  return (
    <Layout>
    <div>
      <div className='container'>
        <div className='d-flex flex-wrap justify-content-between'>
          {
            loading && <h1>Loading...</h1>
          }
          {
            error && <h3 className='text-danger'>{error}</h3>
          }
          {!loading && !error && data?.map((item, key) => (
            <div className="card" style={{ width: "12rem" }}>
              <img src={item?.image} className="card-img-top" alt="..." height={200} />
              <div className="card-body">
                <h5 className="card-title">{item?.title}</h5>
                <p className="card-text">{item?.description?.slice(0, 50) + "..."}</p>
                {/* <Link to={`/product/details/${item?.id}`} className="btn btn-primary">View Details</Link> */}
                <Link to={`/product/details?id=${item?.id}`} className="btn btn-primary">View Details</Link>
                <button onClick={()=>dispatch(addToCart(item))} className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Products
