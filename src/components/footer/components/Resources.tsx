import { useTranslation } from "react-i18next";

function Resources() {
    const { t: tCategory } = useTranslation("categoryMenu");
    const { t: tFooter } = useTranslation("footer");
    const { t: tCommon } = useTranslation("common");
    return (
        <div className="footer-nav-section">
            <h3>RESOURCES</h3>
            <ul>
                <li className="footer-nav-item">{tCommon("about")}</li>
                <li className="footer-nav-item">{tCategory("brandMission")}</li>
                <li className="footer-nav-item">{tFooter("sustainability")}</li>
                <li className="footer-nav-item">{tFooter("recycleWithUs")}</li>
                <li className="footer-nav-item">{tFooter("ingredients")}</li>
                <li className="footer-nav-item">{tFooter("whereToBy")}</li>
                <li className="footer-nav-item">{tCategory("rewards")}</li>
            </ul>
        </div>
    );
}

export default Resources;
