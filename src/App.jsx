import Navbar from "./components/Navbar"
import Title from "./components/Title"
import SideBar from "./components/sideBar/SideBar"
import Products from "./components/products/Products"
import Footer from "./components/Footer"

function App() {


  return (
    <>
      <Navbar />
      <Title />
      <div className="md:grid grid-cols-3">
        <div className="md:col-span-1">
          <SideBar className="md:col-span-1"/>
        </div>
        <div className="md:col-span-2">
          <Products />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
