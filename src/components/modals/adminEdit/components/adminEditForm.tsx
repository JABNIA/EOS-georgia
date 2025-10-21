import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../store/store";
import { useState } from "react";
import type { Product } from "../../../../types/products-type";
import AdminEditInput from "./adminEditInput";
import { setSelectedProduct } from "../../../../store/reducers/products/selectedProduct";
import { closeModal } from "../../../../store/reducers/modalReducer/modals";
import { updateProductsTodo } from "../../../../store/reducers/products/products";

function AdminEditModalForm() {
    const selectedProduct = useSelector(
        (state: RootState) => state.SelectedProduct.product
    );
    const [product, setProduct] = useState<Product | null>(selectedProduct);
    const dispatch = useDispatch();
    const handleInput = (inputing: string, input: string) => {
        switch (inputing) {
            case "name":
                setProduct((prev) => {
                    if (!prev) return prev;
                    return { ...prev, name: input };
                });
                return;
            case "description":
                setProduct((prev) => {
                    if (!prev) return prev;
                    return { ...prev, description: input };
                });
                return;
            case "ingredients":
                setProduct((prev) => {
                    if (!prev) return prev;
                    return { ...prev, ingredients: input };
                });
                return;
            case "price":
                setProduct((prev) => {
                    if (!prev) return prev;
                    return { ...prev, price: Number(input) };
                });
                return;
            case "whatItIs":
                setProduct((prev) => {
                    if (!prev) return prev;
                    return { ...prev, whatItIs: input };
                });
                return;
            case "benefits":
                setProduct((prev) => {
                    if (!prev) return prev;
                    return { ...prev, benefits: input };
                });
                return;
            case "howToUse":
                setProduct((prev) => {
                    if (!prev) return prev;
                    return { ...prev, howToUse: input };
                });
                return;
            default:
                setProduct((prev) => prev);
        }
    };

    const handleCancel = () => {
        dispatch(setSelectedProduct({product: null}))
        dispatch(closeModal())
    }

    const handleSave = () => {
        dispatch(updateProductsTodo(product))
        dispatch(setSelectedProduct({product: null}))
        dispatch(closeModal())
    }

    if (!product) return;
    return (
        <form action="#" className="form-wrapper">
            <AdminEditInput
                label="name"
                value={product.name}
                changing="name"
                setValue={handleInput}
            />
            <AdminEditInput
                label="description"
                value={product.description}
                changing="description"
                setValue={handleInput}
            />
            <AdminEditInput
                label="ingredients"
                value={product.ingredients}
                changing="ingredients"
                setValue={handleInput}
            />
            <AdminEditInput
                label="price"
                value={product.price}
                changing="price"
                setValue={handleInput}
            />
            <AdminEditInput
                label="what it is"
                value={product.whatItIs}
                changing="whatItIs"
                setValue={handleInput}
            />
            <AdminEditInput
                label="benefits"
                value={product.benefits}
                changing="benefits"
                setValue={handleInput}
            />
            <AdminEditInput
                label="how to use"
                value={product.howToUse}
                changing="howToUse"
                setValue={handleInput}
            />
            <div className="admin-button-wrapper">
                <button 
                className="admin-edit-button cancel"
                onClick={handleCancel}
                >Cancel</button>
                <button 
                className="admin-edit-button save"
                onClick={handleSave}
                >Save</button>
            </div>
        </form>
    );
}

export default AdminEditModalForm;
