import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../../store/store";
import {
    deleteProductsTodo,
    fetchProductsRequest,
} from "../../../../../store/reducers/products/products";
import MainModal from "../../../../modals/MainModal";
import { openModal, setModalType } from "../../../../../store/reducers/modalReducer/modals";
import { ModalCollection } from "../../../../../ModalNames";
import { setSelectedProduct } from "../../../../../store/reducers/products/selectedProduct";
import type { Product } from "../../../../../types/products-type";

function ManageProducts() {
    const products = useSelector((state: RootState) => state.Products.products);
    const dispatch = useDispatch();
    const modal = useSelector((state: RootState) => state.Modal.isOpen)
    useEffect(() => {
        dispatch(fetchProductsRequest());
    }, [dispatch]);

    const handleDelete = (id: number) => {
        dispatch(deleteProductsTodo({id: id}));
    };

    const handleEdit = (product: Product) => {
        dispatch(setModalType(ModalCollection.adminEditProduct))
        dispatch(openModal())
        dispatch(setSelectedProduct(product))
        console.log(product)
    }

    return (
        <>
            <table className="product-table">
                <thead>
                    <tr className="products-item">
                        <th className="product-data">id</th>
                        <th className="product-data">name</th>
                        <th className="product-data">price</th>
                        <th className="product-data">description</th>
                        <th className="product-data">ingredints</th>
                        <th className="product-data">benefits</th>
                        <th className="product-data">what it is</th>
                        <th className="product-data">how to use</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((e) => {
                        return (
                            <tr key={e.id} className="products-item">
                                <td className="product-data">{e.id}</td>
                                <td className="product-data">{e.name}</td>
                                <td className="product-data">{e.price}</td>
                                <td className="product-data">
                                    {e.description.substring(0, 50)}
                                </td>
                                <td className="product-data">
                                    {e.ingredients.substring(0, 50)}
                                </td>
                                <td className="product-data">{e.benefits.substring(0, 50)}</td>
                                <td className="product-data">{e.whatItIs.substring(0, 50)}</td>
                                <td className="product-data">{e.howToUse.substring(0, 50)}</td>
                                <td>
                                    <button
                                        className="product-button"
                                        onClick={() => handleDelete(e.id)}
                                    >
                                        delete
                                    </button>
                                    <button className="product-button"
                                        onClick={() => handleEdit(e)}
                                    >
                                        edit
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            { modal && <MainModal /> }
        </>

    );
}

export default ManageProducts;
