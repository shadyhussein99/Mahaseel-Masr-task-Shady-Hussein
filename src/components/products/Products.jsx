import { useState } from "react"
import SingleProduct from "./SingleProduct"
import { useSelector } from "react-redux"

function Products() {

    const totalProducts = useSelector((state) => state.category.value.products)

    const [productsNumber, setProductsNumber] = useState(20)   // Number of initially displayed products
    const displayedProducts = totalProducts.slice(0, productsNumber)

    return <section>
        {displayedProducts.map((value, index) => {
            return <SingleProduct
                key={index}
                image={value.image}
                product={value.type}
                description={value.description}
            />
        })}

        {/* To hide the (Show More) button when all products are displayed */}
        {displayedProducts.length !== totalProducts.length &&
            <button onClick={() => { setProductsNumber(productsNumber + 4) }}>Show More</button>
        }

        <hr />
    </section>
}

export default Products