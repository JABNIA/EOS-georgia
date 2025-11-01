import { useTranslation } from "react-i18next";

function Shop() {
    const { t: tFooter } = useTranslation("footer");
    return (
        <div className="footer-nav-section">
            <h3>SHOP</h3>
            <ul className="footer-list">
                <li className="footer-nav-item links">{tFooter("allProducts")}</li>
                <li className="footer-nav-item links">{tFooter("bodyCare")}</li>
                <li className="footer-nav-item links">{tFooter("shave")}</li>
                <li className="footer-nav-item links">{tFooter("lipCare")}</li>
                <li className="footer-nav-item links">
                    {tFooter("giftsAndBundles")}
                </li>
            </ul>
        </div>
    );
}

export default Shop;
