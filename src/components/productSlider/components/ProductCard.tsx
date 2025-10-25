import { useEffect, useState } from "react";
import { supabase } from "../../../supabase";
import type { Product } from "../../../types/products-type";

const placeholdeerImage = 'https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE='


function ProductCard({ imgLink, product }: { imgLink: string | null, product: Product}) {
    const [publicUrl, setPublicUrl] = useState<string>(placeholdeerImage);

    useEffect(() => {
        const getUrl = () => {
            if (imgLink){
                const publicUrl = supabase.storage
                .from("EosImages")
                .getPublicUrl(imgLink);
                
                setPublicUrl(publicUrl.data.publicUrl);
            }
        }

        getUrl();
    }, []);

    return (
        <div className="card-wrapper">
            <img src={publicUrl} alt="product" />
            <h4>{product.name}</h4>
            <p>{product.description.substring(0, 95)}</p>
            <button>Visit</button>
        </div>
    );
}

export default ProductCard;
