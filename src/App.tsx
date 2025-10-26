import { Route, Routes, BrowserRouter } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import "./i18n.ts";
import Product from "./components/pages/productPage/Product.tsx";
import Admin from "./components/pages/admin/Admin.tsx";
import AddProduct from "./components/pages/admin/pages/addProduct/AddProduct.tsx";
import ManageProducts from "./components/pages/admin/pages/manage-products/ManageProducts.tsx";

function App() {
return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/product/:id" element={<Product />} />
                </Route>
                <Route path="/admin">
                    <Route path="/admin" element={<Admin />}>
                        <Route path="add-product" element={<AddProduct />} />
                        <Route
                            path="manage-products"
                            element={<ManageProducts />}
                        />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
