import { useTranslation } from "react-i18next";

function Shop() {
    const { t: tCategory } = useTranslation("categoryMenu");
    const { t: tFooter } = useTranslation("footer");
    const { t: tCommon } = useTranslation("common");
    return (
        <div className="footer-nav-section">
            <h3>SHOP</h3>
            <ul>
                <li className="footer-nav-item">{tCategory("bodyLotion")}</li>
                <li className="footer-nav-item">{tCategory("bodyWash")}</li>
                <li className="footer-nav-item">{tCommon("shave")}</li>
                <li className="footer-nav-item">{tFooter("lipCare")}</li>
                <li className="footer-nav-item">{tCommon("bestsellers")}</li>
                <li className="footer-nav-item">{tCommon("exclusives")}</li>
                <li className="footer-nav-item">{tCommon("awardWinners")}</li>
                <li className="footer-nav-item">
                    {tCommon("giftsAndBundles")}
                </li>
            </ul>
        </div>
    );
}

export default Shop;
