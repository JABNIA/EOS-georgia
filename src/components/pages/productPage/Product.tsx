import { useParams } from "react-router";
import "../../styles/product-page.scss";
import AccordeonItem from "./components/AccordeonItem";
import SuggesedProducts from "./components/SuggesedProducts";
import { useEffect, useState } from "react";
import type { ProductType } from "../../../types/products-type";
import { supabase } from "../../../supabase";

function Product() {
    const params = useParams();
    const [product, setProduct] = useState<ProductType | null>(null)
    
    useEffect(() => {
        const getProduct = async () => {
            const {data, error} = await supabase.from("Products").select().eq("id", params.id)
            if (error) throw error

            setProduct(data[0])
        }

        getProduct()

    }, []) 

    console.log(params)

    if (!product) return 
    return (
        <>
            <div className="product-wrapper">
                <div>
                    <img
                        src={`https://nfrbvhclmcmcjykfzhyb.supabase.co/storage/v1/object/public/EosImages/${product?.images[0]}`}
                        alt=""
                        className="product-image"
                    />
                </div>
                <div className="details">
                    <h1 className="product-title">{product.name}</h1>
                    <h3>category</h3>
                    <p className="product-price">{product.price}</p>
                    <p className="product-description">{product.description}</p>
                    <button className="add-to-cart-button">Add to Cart</button>
                    <div className="accordeon">
                        <AccordeonItem
                            title="what it is"
                            content={product.whatItIs}
                        />
                        <hr />
                        <AccordeonItem
                            title="Key ingrediets"
                            content={product.ingredients}
                        />
                        <hr />
                        <AccordeonItem
                            title="how to use"
                            content={product.howToUse}
                        />
                        <hr />
                        <AccordeonItem
                            title="benefits"
                            content={product.benefits}
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
