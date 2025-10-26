import { useEffect } from "react";
import Banner from "./banner/Banner";
import ProductSlider from "./productSlider/ProductSlider";
import { useDispatch } from "react-redux";
import { fetchProductsRequest } from "../store/reducers/products/products";
import VanilaCashmireCollection from "./vanilaCashmire/VanilaCashmireCollection";

function HomePage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProductsRequest())
    }, [])

    return (
        <div>
            <Banner />
            <ProductSlider />
            <VanilaCashmireCollection />
        </div>
    );
}

export default HomePage;
