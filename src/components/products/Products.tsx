import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { supabase } from "../../supabase";
import type { ProductType } from "../../types/products-type";
import ProductCard from "../productSlider/components/ProductCard";
import "../styles/products-page.scss";

function Products() {
    const category = useParams();
    const [products, setProducts] = useState<ProductType[] | null>(null);

    useEffect(() => {
        const getProducts = async () => {
            if (category.category === "All") {
                const selectedProducts = await supabase
                    .from("Products")
                    .select();

                setProducts(selectedProducts.data);
            } else {
                const selectedProducts = await supabase
                    .from("Products")
                    .select()
                    .eq("category", category.category);
                console.log(selectedProducts)
                setProducts(selectedProducts.data);
            }
        };

        getProducts();
    }, [category]);

    return (
        <div className="products-wrapper">
            {products?.map((product: ProductType) => {
                return product.images ? (
                    <ProductCard
                        key={product.id}
                        imgLink={product.images[0]}
                        product={product}
                    />
                ) : (
                    <ProductCard
                        key={product.id}
                        imgLink={null}
                        product={product}
                    />
                );
            })}
        </div>
    );
}

export default Products;
