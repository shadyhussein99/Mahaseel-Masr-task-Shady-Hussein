import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Title from "./components/Title"
import SideBar from "./components/sideBar/SideBar"
import Products from "./components/products/Products"
import Footer from "./components/Footer"

function App() {

  const [displaySideBar, setDisplaySideBar] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setDisplaySideBar(true);
      } else {
        setDisplaySideBar(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <Title
        setDisplaySideBar={setDisplaySideBar}
      />
      {displaySideBar &&
        <SideBar
          setDisplaySideBar={setDisplaySideBar}
        />
      }
      <Products />
      <Footer />
    </>
  )
}

export default App
