import { useTranslation } from "react-i18next";
import "../../styles/category-menu.scss"

function Body() {
  const { t } = useTranslation("categoryMenu");

  console.log(t('allBody'));

  return (
    <div>
      <ul>
        <li className="category-item">{t("allBody")}</li>
        <li className="category-item">{t("bodyLotion")}</li>
        <li className="category-item">{t("bodyWash")}</li>
        <li className="category-item">{t("vanillaCashmere")}</li>
        <li className="category-item">{t("handCare")}</li>
      </ul>
    </div>
  );
}

export default Body;
