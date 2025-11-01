import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function Lip() {
    const { t } = useTranslation("categoryMenu");

    return (
        <div>
            <ul>
                <li className="category-item"><NavLink to="/products/lip balm">{t("lipBalm")}</NavLink></li>
                <li className="category-item"><NavLink to="/products/super balm">{t("superBalms")}</NavLink></li>
                <li className="category-item"><NavLink to="/products/healing line">{t("healingLine")}</NavLink></li>
                <li className="category-item"><NavLink to="/products/lip butter">{t("lipButter")}</NavLink></li>
                <li className="category-item"><NavLink to="/products/lip scrub">{t("lipScrub")}</NavLink></li>
            </ul>
        </div>
    );
}

export default Lip;
