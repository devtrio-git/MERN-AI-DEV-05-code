import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/authentication/Signup";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/authentication/Login";
import NotFound from "../pages/notFound/NotFound";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/productDetails/ProductDetails";

const publicRoutes = createBrowserRouter([
    {path: "/", element: <Login /> },
    {path: "/signup", element: <Signup /> },
    {path: "/home", element: <Home /> },
    {path: "/about", element: <About /> },
    {path: "/products", element: <Products /> },
    {path: "/product/details/:id", element: <ProductDetails /> },
    {path: "*", element: <NotFound/>}
    
])

export {publicRoutes}

// 1- install react-router-dom
// 2- createBrowserRouter for defining the routes
// 3- RouterProvider for our routes
// 4- for Navigations
    // 4.1 <Link> similar to <a href=""></a>
    // 4.2 <Navlink> give us active tag for styling purpose
    // 4.3 useNavigate hook (for custom/programmatically navigation)
// 5- useParams for dynamic routes   details/:id/:name
// 6- useSearchParams   details?id=1&name=asdasda (homework)