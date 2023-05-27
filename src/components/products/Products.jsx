import { useState } from "react"
import SingleProduct from "./SingleProduct"
import { useSelector } from "react-redux"

function Products() {

    const totalProducts = useSelector((state) => state.category.value.products)

    const [productsNumber, setProductsNumber] = useState(20)   // Number of initially displayed products
    const displayedProducts = totalProducts.slice(0, productsNumber)

    return <section className="mx-4 mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {displayedProducts.map((value, index) => {
            return <SingleProduct
                key={index}
                image={value.image}
                product={value.type}
                description={value.description}
                className="col-span-1"
            />
        })}

        {/* To hide the (Show More) button when all products are displayed */}
        {displayedProducts.length !== totalProducts.length &&
            <div className=" flex justify-center col-span-2 md:col-span-3 lg:col-span-4">
                <button onClick={() => { setProductsNumber(productsNumber + 4) }} className="font-semibold px-5 py-2 border border-gray-300 rounded-3xl hover:bg-gray-200">Show More</button>
            </div>
        }

    </section>
}

export default Products