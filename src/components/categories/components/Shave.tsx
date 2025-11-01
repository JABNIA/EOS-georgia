import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function Shave() {
    const { t } = useTranslation("categoryMenu");
    return (
        <div>
            <ul>
                <li className="category-item"><NavLink to="/products/shave oil">{t("shaveOil")}</NavLink></li>
                <li className="category-item"><NavLink to="/products/shave cream">{t("shaveCream")}</NavLink></li>
                <li className="category-item"><NavLink to="/products/body scrub">{t("bodyScrub")}</NavLink></li>
            </ul>
        </div>
    );
}

export default Shave;
