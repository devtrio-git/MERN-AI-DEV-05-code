import PrimaryButton from "./components/buttons/PrimaryButton"
import Navbar from "./components/navbar/Navbar"

function App() {

  return (
    <>
      <Navbar />
    <div className="container">
      <h1>Ashar Ahmed</h1>
      <div className="d-flex">
      <PrimaryButton title="Login" text="asdasd"/>

      <PrimaryButton title="Signup" ></PrimaryButton>
      </div>
    </div>

    </>
  )
}

export default App
