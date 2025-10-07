import { useTranslation } from "react-i18next"

function Lip() {
  const { t } = useTranslation("categoryMenu")

  return (
    <div>
        <ul>
        <li className="category-item">{t("allLip")}</li>
        <li className="category-item">{t("lipBalm")}</li>
        <li className="category-item">{t("superBalms")}</li>
        <li className="category-item">{t("limitedEdition")}</li>
        <li className="category-item">{t("setsAndVariety")}</li>
        <li className="category-item">{t("treeatmentsAndMasks")}</li>
        <li className="category-item">{t("plantBased")}</li>
      </ul>
    </div>
  )
}

export default Lip
