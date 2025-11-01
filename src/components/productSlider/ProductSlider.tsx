import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import "../styles/product-slider.scss";
import ProductCard from "./components/ProductCard";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useRef } from "react";

function ProductSlider() {
    const products = useSelector((state: RootState) => state.Products.products);
    const ref = useRef(null);

    const handleScroll = (scroll: number) => {
        if(ref.current){
            (ref.current as HTMLDivElement).scrollLeft += scroll
        }
    }

    return (
        <div style={{position: "relative"}}>
            <button className="scroll-button back" onClick={() => handleScroll(-700)} ><MdOutlineKeyboardArrowLeft size={60} /></button>
            <button className="scroll-button forward" onClick={() => handleScroll(700)}><MdOutlineKeyboardArrowRight size={60} /></button>
        <div className="product-slider-container" ref={ref}>
            {products.map((product) => { return (
                product.images ? 
                <ProductCard key={product.id} imgLink={product.images[0]} product={product}/>
                : 
                <ProductCard key={product.id} imgLink={null} product={product}/>
            )})}
        </div>
        </div>
    );
}

export default ProductSlider;
