import { useState } from "react"
import Navbar from "./components/Navbar"
import Title from "./components/Title"
import SideBar from "./components/sideBar/SideBar"
import Products from "./components/products/Products"
import Footer from "./components/Footer"

function App() {

  const [displaySidebar, setDisplaySidebar] = useState("")

  return (
    <>
      <Navbar />
      <Title 
        setDisplaySidebar={setDisplaySidebar}
      />
      <div className="md:grid grid-cols-3 lg:w-3/4 lg:mx-auto">
        <div className="md:col-span-1">
          <SideBar className=""
          displaySidebar={displaySidebar}
            setDisplaySidebar={setDisplaySidebar}
          />
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
