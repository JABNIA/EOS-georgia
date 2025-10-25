import React, { useEffect, useState } from "react";
import { supabase } from "../../../../supabase";
import Input from "./Input";
import type { Product } from "../../../../types/products-type";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsRequest } from "../../../../store/reducers/products/products";
import type { RootState } from "../../../../store/store";

function AdminForm() {
    const products = useSelector((state: RootState) => state.Products.products);
    const [product, setProduct] = useState<Product | null>(null);
    const [fileList, setFileList] = useState<FileList | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductsRequest());
    }, []);

    const uploadImagesToStorage = async (files: FileList | null) => {
        if (!files) return;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (!product) return;
            const filePath = `${product.id}/${file.name}`;
            const { error } = await supabase.storage
                .from("EosImages")
                .upload(filePath, file);
            if (error) throw error;
        }
    };

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(products);

        await uploadImagesToStorage(fileList);
        if (!product) return;
        const { error } = await supabase.from("Products").insert({
            ...product,
        });

        setProduct(null);
        console.log(error);
    };

    const handleInput = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        key: string
    ) => {
        switch (key) {
            case "name":
                setProduct({
                    ...product,
                    name: e.target.value,
                    id: products[products.length - 1].id + 1,
                } as Product);
                break;
            case "description":
                setProduct({
                    ...product,
                    description: e.target.value,
                    id: products[products.length - 1].id + 1,
                } as Product);
                break;
            case "price":
                setProduct({
                    ...product,
                    price: Number(e.target.value),
                    id: products[products.length - 1].id + 1,
                } as Product);
                break;
            case "what it is":
                setProduct({
                    ...product,
                    whatItIs: e.target.value,
                    id: products[products.length - 1].id + 1,
                } as Product);
                break;
            case "ingreasddients":
                setProduct({
                    ...product,
                    ingredients: e.target.value,
                    id: products[products.length - 1].id + 1,
                } as Product);
                break;
            case "benefits":
                setProduct({
                    ...product,
                    benefits: e.target.value,
                    id: products[products.length - 1].id + 1,
                } as Product);
                break;
            case "how to use":
                setProduct({
                    ...product,
                    howToUse: e.target.value,
                    id: products[products.length - 1].id + 1,
                } as Product);
                break;
            case "upload images":
                const files = (e.target as HTMLInputElement).files;
                const fileNames: string[] = [];
                if (!files) return;
                for (let i = 0; i < files.length; i++) {
                    fileNames.push(`${product?.id}/${files[i].name}`);
                }
                setProduct({
                    ...product,
                    images: [...fileNames],
                } as Product);
                setFileList((e.target as HTMLInputElement).files);
                break;
            default:
                break;
        }
    };
    console.log(products);
    return (
        <form action="#" encType="multipart/form-data">
            <Input type="text" handleInput={handleInput} label="name" />
            <Input
                type="textarea"
                handleInput={handleInput}
                label="description"
            />
            <Input type="text" handleInput={handleInput} label="price" />
            <Input type="text" handleInput={handleInput} label="what it is" />
            <Input type="text" handleInput={handleInput} label="ingredients" />
            <Input type="text" handleInput={handleInput} label="benefits" />
            <Input
                type="textarea"
                handleInput={handleInput}
                label="how to use"
            />
            <Input
                type="file"
                handleInput={handleInput}
                label="upload images"
            />
            <button className="admin-submit-button" onClick={handleSubmit}>
                Add product
            </button>
        </form>
    );
}

export default AdminForm;

// product.images.forEach(async (file) => {
//     const filePath = `${product.id}/${file.name}`;
//     const uploadImages = await supabase.storage
//         .from("EosImages")
//         .upload(filePath, file, {
//             cacheControl: "3600",
//             upsert: false,
//         });
//         if(uploadImages.error) throw error;
// });
