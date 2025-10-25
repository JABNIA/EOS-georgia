import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import "../styles/product-slider.scss";
import ProductCard from "./components/ProductCard";

function ProductSlider() {
    const products = useSelector((state: RootState) => state.Products.products);
    console.log(products);
    return (
        <div className="product-slider-container">
            {products.map((product) => { return (
                product.images ? 
                <ProductCard imgLink={product.images[0]} product={product}/>
                : 
                <ProductCard imgLink={null} product={product}/>
            )})}
        </div>
    );
}

export default ProductSlider;
