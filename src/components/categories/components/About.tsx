import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation("categoryMenu");

    return (
        <div>
            <ul>
                <li className="category-item">{t("brandMission")}</li>
                <li className="category-item">{t("routine")}</li>
                <li className="category-item">{t("ingredients")}</li>
                <li className="category-item">{t("rewards")}</li>
            </ul>
        </div>
    );
}

export default About;
