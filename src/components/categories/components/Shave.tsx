import { useTranslation } from "react-i18next"

function Shave() {
  const { t } = useTranslation("categoryMenu")
  return (
    <div>
        <ul>
            <li className="category-item">{t("allShave")}</li>
            <li className="category-item">{t("shaveOil")}</li>
            <li className="category-item">{t("shaveCream")}</li>
            <li className="category-item">{t("cashmereSkin")}</li>
        </ul>

    </div>
  )
}

export default Shave
