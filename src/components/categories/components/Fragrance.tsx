import { useTranslation } from "react-i18next"

function Fragrance() {
  const { t } = useTranslation("categoryMenu")

  return (
    <div>
      <ul>
        <li className="category-item">
          <p>
            {t("gourmand")}   
          </p>
          <p>
            {t("sweetCreamyCraveable")}
          </p>
          
          </li>
        <li className="category-item">
          <p>
            {t("cleanAndFresh")}
          </p>
          <p>
            {t("lightAiryComforting")}
          </p>
        </li>
        <li className="category-item">
          <p>
          {t("fruity")}
          </p>
          <p>
            {t("juicyBrightPlayfull")}
          </p>
        </li>
        <li className="category-item">
          <p>
          {t("tropical")}
          </p>
          <p>
            {t("sunSoakedLushExotic")}
          </p>
        </li>
        <li className="category-item">
        <p>
          {t("sensitive")}
        </p>
        <p>
          {t("fragranceFreeCalmingGentle")}
        </p>
        </li>
      </ul>
    </div>
  )
}

export default Fragrance
