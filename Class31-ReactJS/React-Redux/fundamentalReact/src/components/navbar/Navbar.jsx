import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../store/slices/cartSlice';

const Navbar = ({ }) => {
    const globalCount = useSelector((state) => state?.counter?.value);
    const cartList = useSelector(state => state?.cart?.cart)
    console.log(cartList, "<-- state")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link nav-active" : "nav-link"} aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => isActive ? "nav-link nav-active" : "nav-link"}
                                    // className="nav-link nav-active"
                                    to="/about"
                                >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => isActive ? "nav-link nav-active" : "nav-link"}
                                    // className="nav-link nav-active"
                                    to="/products"
                                >Products</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <div className="d-flex" role="search" action="#">
                            {/* <h2></h2> */}
                            {/* <p>Count:{count}</p> */}
                            <button type="button" class="btn btn-primary position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <FaCartShopping />
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartList?.length}
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </button>
                            {/* <button onClick={() => navigate("/")} className="btn btn-outline-danger" >Log out</button> */}
                        </div>

                        {/* sidebar */}

                        {/* sidebar */}
                    </div>
                </div>


            </nav>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">My Cart</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    {
                        cartList?.length > 0 ?
                            cartList?.map((item, key) => (
                                <div className="card mb-3" style={{}}>
                                    <div className="card-body">
                                        <div className='d-flex gap-3'>
                                            <div>
                                                <img src={item?.image} style={{ width: "30px" }} />
                                            </div>
                                            <div>
                                                <h5 className="card-title">
                                                    {item?.title}

                                                </h5>
                                                <p className="card-text">
                                                    ${item?.price} | Quantity {item?.quantity}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button onClick={()=> dispatch(removeFromCart(item?.id))} className="btn btn-danger">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                            :
                            <div><h5>Your cart is empty.</h5></div>
                    }

                </div>
            </div>
        </>
    )
}

export default Navbar
