import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Layout } from '../../higherOrderComponent/Layout';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';

const ProductDetails2 = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch()

    const id = searchParams.get("id");
    const name = searchParams.get("name");

    console.log(id,name)

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        setData(null)
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const resData = await response.json()
            console.log(resData)
            setData(resData)
        } catch (error) {
            console.log(error)
            setData({})
        }
    }
    return (
        <Layout>
        <div>
            <h1>Product Details</h1>
            <div className='container'>
                <button onClick={()=>navigate(-1)}>Go back</button>
                <button className='btn btn-primary' onClick={()=>dispatch(addToCart(data))}>Add to Cart</button>
                {data === null ? <h1>Loading...</h1> :
                <div >
                    <div className="card" >
                        <img src={data?.image} className="card-img-top" alt="..." height={200} width={200} />
                        <div className="card-body">
                            <h5 className="card-title">{data?.title}</h5>
                            <h6 className="card-title">{data?.category} - ${data?.price}</h6>
                            <p className="card-text">{data?.description}</p>
                        </div>
                    </div>
                </div>
               }
            </div>
        </div>
        </Layout>
    )
}

export default ProductDetails2
