import { useTranslation } from "react-i18next";
import Banner from "./banner/Banner"
import ProductSlider from "./productSlider/ProductSlider"

function HomePage() {
  const { i18n } = useTranslation();
    
  return (
    <div>
      <Banner />
      <ProductSlider />

    </div>
  )
}

export default HomePage;
