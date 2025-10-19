import React, { useEffect, useState } from "react";
import { supabase } from "../../../../supabase";
import Input from "./Input";
import type { Product } from "../../../../types/products-type";


function AdminForm() {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function getTodos() {
      const data = await supabase.from("Products").select();
      console.log(data.data);
      if (products.length > 1) {
        setProducts(data.data as Product[]);
      }
    }
    getTodos();
  }, []);

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!product) return;
    const { error } = await supabase.from("Products").insert({
      ...product,
    });

    setProduct(null);
    console.log(error);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: string) => {
    switch (key) {
      case "name":
        setProduct({ ...product, name: e.target.value } as Product);
        break;
      case "description":
        setProduct({ ...product, description: e.target.value } as Product);
        break;
      case "price":
        setProduct({ ...product, price: Number(e.target.value) } as Product);
        break;
      case "what it is":
        setProduct({ ...product, whatItIs: e.target.value } as Product);
        break;
      case "ingreedients":
        setProduct({ ...product, ingredients: e.target.value } as Product);
        break;
      case "benefits":
        setProduct({ ...product, benefits: e.target.value } as Product);
        break;
      case "how to use":
        setProduct({ ...product, howToUse: e.target.value } as Product);
        break;
      default:
        break;
    }
  };

  console.log(product);

  return (
    <form action="#">
      <Input type="text" handleInput={handleInput} label="name" />
      <Input type="textarea" handleInput={handleInput} label="description" />
      <Input type="text" handleInput={handleInput} label="price" />
      <Input type="text" handleInput={handleInput} label="what is it" />
      <Input type="text" handleInput={handleInput} label="ingredients" />
      <Input type="text" handleInput={handleInput} label="benefits" />
      <Input type="textarea" handleInput={handleInput} label="how to use" />
      <button className="admin-submit-button" onClick={handleSubmit}>
        Add product
      </button>
    </form>
  );
}

export default AdminForm;
