import CardProduct from "../components/Fragments/CardProduct"

const ProductPage= (  ) => {
    return (
        <CardProduct>
            <CardProduct.Header image="/sepatu.jpg" />
            <CardProduct.Body title="Sepatu Ne sumanto">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                ligendi recusandae quae optio accusantium quos libero beatae,
                nobis incidunt ad officiis cumque blanditiis minima neque,
                dolor suscipit iste voluptate modi et?
            </CardProduct.Body>
            <CardProduct.Footer price="Rp.3.000.000" />
        </CardProduct>
    )
}

export default ProductPage