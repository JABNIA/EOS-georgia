import { useTranslation } from "react-i18next";

function Support() {
    const { t: tFooter } = useTranslation("footer");

    return (
        <div className="footer-nav-section">
            <h3>{tFooter("workingHours")}</h3>
            <ul className="footer-list">
                <li className="footer-nav-item hours"><span>{tFooter("monSun")}</span><span>{tFooter("hours")}</span></li>
            </ul>
        </div>
    );
}

export default Support;
