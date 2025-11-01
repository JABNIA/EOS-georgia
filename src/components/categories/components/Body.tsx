import { useTranslation } from "react-i18next";
import "../../styles/category-menu.scss";
import { NavLink } from "react-router";

function Body() {
    const { t } = useTranslation("categoryMenu");

    return (
        <div>
            <ul>
                <li className="category-item"><NavLink to="/products/body lotion">{t("bodyLotion")}</NavLink></li>
                <li className="category-item"><NavLink to="/products/shower gel">{t("bodyWash")}</NavLink></li>
                <li className="category-item"><NavLink to="/products/hand creme">{t("handCreme")}</NavLink></li>
                <li className="category-item"><NavLink to="/products/body butter">{t("bodyButter")}</NavLink></li>
                <li className="category-item"><NavLink to="/products/body oil">{t("bodyOil")}</NavLink></li>
                <li className="category-item"><NavLink to="/products/body mist">{t("bodyMist")}</NavLink></li>
            </ul>
        </div>
    );
}

export default Body;
