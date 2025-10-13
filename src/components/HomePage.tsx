import { useTranslation } from "react-i18next";
import Banner from "./banner/Banner"
import ProductSlider from "./productSlider/ProductSlider"

function HomePage() {
  const { i18n } = useTranslation();
  
  const handleClick = (lang: string) => {
    i18n.changeLanguage(lang);
  }
  
  return (
    <div>
      <Banner />
      <ProductSlider />
      <button onClick={() => handleClick("ka")}>Geo</button>
      <button onClick={() => handleClick("en")}>Eng</button>
    </div>
  )
}

export default HomePage
