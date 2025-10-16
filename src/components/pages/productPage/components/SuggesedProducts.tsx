import { useRef } from "react";
import SuggesedProductCard from "./SuggesedProductCard";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const products = [
    {
        title: "Hydrating Facial Cleanser",
        description: "A gentle cleanser that removes impurities while maintaining skin's natural moisture balance. Perfect for daily use on sensitive skin types."
    },
    {
        title: "Revitalizing Night Cream",
        description: "This nourishing night cream helps repair and rejuvenate skin overnight, leaving it soft, smooth, and visibly refreshed by morning."
    },
    {
        title: "Brightening Vitamin C Serum",
        description: "Formulated with potent vitamin C, this serum targets dullness and uneven skin tone, promoting a radiant and youthful complexion."
    },
    {
        title: "Soothing Aloe Vera Gel",
        description: "A lightweight gel enriched with pure aloe vera to calm irritation, hydrate, and soothe skin after sun exposure or shaving."
    },
    {
        title: "Anti-Aging Retinol Lotion",
        description: "This advanced lotion combines retinol and peptides to reduce fine lines, improve elasticity, and support firmer, younger-looking skin."
    },
    {
        title: "Deep Pore Cleansing Mask",
        description: "A clay-based mask that draws out impurities, unclogs pores, and leaves skin feeling refreshed, smooth, and deeply cleansed."
    },
    {
        title: "Moisturizing Day Cream SPF 30",
        description: "Protects skin from harmful UV rays while providing long-lasting hydration and a smooth, non-greasy finish for daily wear."
    },
    {
        title: "Gentle Exfoliating Scrub",
        description: "Removes dead skin cells and promotes cell renewal with natural exfoliants, revealing a brighter and more even skin texture."
    },
    {
        title: "Calming Green Tea Toner",
        description: "Infused with green tea extract, this toner soothes redness, balances oil production, and prepares skin for moisturizer."
    },
    {
        title: "Ultra-Light Hyaluronic Serum",
        description: "Delivers intense hydration with hyaluronic acid, plumping skin and reducing the appearance of fine lines and dryness."
    }
];
function SuggesedProducts() {
    const ref = useRef(null)


    const handleScroll = (scroll: number) => {
        if(ref.current) {
            (ref.current as HTMLDivElement).scrollLeft += scroll
        }
        console.log(ref.current)
        
    }


  return (
    <div className="suggested-wrapper">
        <button className="suggested-scroll back" onClick={() => handleScroll(-400)}><MdOutlineKeyboardArrowLeft size={60} /></button>
        <button className="suggested-scroll forward"  onClick={() => handleScroll(400)}><MdOutlineKeyboardArrowRight size={60} /></button>    
        <div className="suggested" ref={ref}>
            {
                products.map((product, index) => <SuggesedProductCard key={index} title={product.title} description={product.description} />)
            }
        </div>
    </div>
  )
}

export default SuggesedProducts;
