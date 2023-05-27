import { useState } from "react"
import { Link } from "react-router-dom"

function Title(props) {

    const [productsInput, setProductsInput] = useState("")

    return <header className="mx-4 mt-12 lg:w-3/4 lg:mx-auto ">
        <Link to="#"><p className=" text-gray-500"><i className="fa-solid fa-chevron-left fa-xs"></i> Back to Product Browser</p></Link>
        <h1 className=" text-2xl font-semibold text-center mt-8 mb-4">Browse Products by Category</h1>
        <hr />

        <div className="flex mt-7 items-center">
            <div className="flex justify-center items-center border border-gray-300 w-8 h-8 rounded-full cursor-pointer hover:bg-gray-200 md:hidden">
                <i onClick={() => props.setDisplaySidebar(true)} className="fa-solid fa-bars-staggered"></i>
            </div>
            
            <div className=" relative">
                <i className="fa-solid fa-magnifying-glass text-gray-400 absolute top-3 left-7"></i>
                <input onChange={(e) => setProductsInput(e.target.value)} value={productsInput} placeholder="Search Products" className="w-96 border py-2 px-10 rounded-3xl ml-3 focus:outline-blue-600" />
            </div>
        </div>
    </header>
}

export default Title