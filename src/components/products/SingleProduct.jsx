// The component of single product used to structure the Products component

function SingleProduct(props) {
    return <section className="mb-16">
        <div className="flex justify-center">
            <img className="w-32 h-32" src={props.image} alt="Product image" />
        </div>
        <h3 className=" text-lg font-semibold mt-8">{props.product}</h3>
        <p className=" text-gray-500 text-xs mt-2"><em>{props.description}</em></p>
    </section>
}

export default SingleProduct