import { useTranslation } from "react-i18next";

function Lip() {
    const { t } = useTranslation("categoryMenu");

    return (
        <div>
            <ul>
                <li className="category-item">{t("lipBalm")}</li>
                <li className="category-item">{t("superBalms")}</li>
                <li className="category-item">{t("healingLine")}</li>
                <li className="category-item">{t("lipButter")}</li>
                <li className="category-item">{t("lipScrub")}</li>
            </ul>
        </div>
    );
}

export default Lip;
