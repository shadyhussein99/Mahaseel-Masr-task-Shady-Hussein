// The component of single product used to structure the Products component

function SingleProduct(props) {
    return <section>
        <img src={props.image} alt="Product image" />
        <h3>{props.product}</h3>
        <p>{props.description}</p>
    </section>
}

export default SingleProduct