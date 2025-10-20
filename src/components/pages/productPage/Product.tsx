import "../../styles/product-page.scss";
import AccordeonItem from "./components/AccordeonItem";
import SuggesedProducts from "./components/SuggesedProducts";

function Product() {
    return (
        <>
            <div className="product-wrapper">
                <div>
                    <img
                        src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
                        alt=""
                        className="product-image"
                    />
                </div>
                <div className="details">
                    <h1 className="product-title">Product Title</h1>
                    <h3>category</h3>
                    <p className="product-price">$99.99</p>
                    <p className="product-description">Product Description</p>
                    <button className="add-to-cart-button">Add to Cart</button>
                    <div className="accordeon">
                        <AccordeonItem
                            title="what it is"
                            content="Detailed information about the product.Detailed information about the product.Detailed information about the product.Detailed information about the product.Detailed information about the product.Detailed information about the product.Detailed information about the product.Detailed information about the product."
                        />
                        <hr />
                        <AccordeonItem
                            title="Key ingrediets"
                            content="Detailed information about the product."
                        />
                        <hr />
                        <AccordeonItem
                            title="how to use"
                            content="Detailed information about the product."
                        />
                        <hr />
                        <AccordeonItem
                            title="benefits"
                            content="Detailed information about the product."
                        />
                        <hr />
                    </div>
                </div>
            </div>
            <SuggesedProducts />
        </>
    );
}

export default Product;
