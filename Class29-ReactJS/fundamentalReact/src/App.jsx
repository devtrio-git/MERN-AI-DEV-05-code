import { RouterProvider } from "react-router-dom"
import PrimaryButton from "./components/buttons/PrimaryButton"
import Counter from "./components/counter/Counter"
import Navbar from "./components/navbar/Navbar"
import TodoApp from "./components/TodoApplication/TodoApp"
import LifeCycleHandling from "./components/useEffect/LifeCycleHandling"
import UnmountExample from "./components/useEffect/UnmountExample"
import Signup from "./pages/authentication/Signup"
import { publicRoutes } from "./routes/router"

function App() {

  return (
    <>
      {/* <Navbar />
    <div className="container">
      <h1>Ashar Ahmed</h1>
      <div className="d-flex">
      <PrimaryButton title="Login" text="asdasd"/>

      <PrimaryButton title="Signup" ></PrimaryButton>
      </div>
    </div> */}

      {/* <Counter /> */}

      {/* <LifeCycleHandling /> */}
      {/* <UnmountExample /> */}

      {/* <TodoApp /> */}

      {/* <Signup /> */}

      <RouterProvider router={publicRoutes}/>
    </>
  )
}

export default App
