import { useTranslation } from "react-i18next";

function Shop() {
    const { t: tCategory } = useTranslation("categoryMenu");
    const { t: tFooter } = useTranslation("footer");
    const { t: tCommon } = useTranslation("common");
    return (
        <div className="footer-nav-section">
            <h3>SHOP</h3>
            <ul className="footer-list">
                <li className="footer-nav-item links">{tCategory("bodyLotion")}</li>
                <li className="footer-nav-item links">{tCategory("bodyWash")}</li>
                <li className="footer-nav-item links">{tCommon("shave")}</li>
                <li className="footer-nav-item links">{tFooter("lipCare")}</li>
                <li className="footer-nav-item links">
                    {tCommon("giftsAndBundles")}
                </li>
            </ul>
        </div>
    );
}

export default Shop;
