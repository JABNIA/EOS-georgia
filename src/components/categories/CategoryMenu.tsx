import "../styles/category-menu.scss";
import { useTranslation } from "react-i18next";
import type { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, setInMenu } from "../../store/reducers/categoryMenu";

function CategoryMenu({
  children,
}: {
  children: ReactNode;
}) {
  const { t: tCommon } = useTranslation("common");
  const dispatch = useDispatch(); 

  return (
    <div
      className="category-menu-wrapper"
      onMouseEnter={() => dispatch(setInMenu(true))}
      onMouseLeave={() => dispatch(closeMenu())}
    >
      <div>
        <ul>
          <li className="category-item">{tCommon("all")}</li>
          <li className="category-item">{tCommon("new")}</li>
          <li className="category-item">{tCommon("bestsellers")}</li>
        </ul>
        <ul>
          <li className="category-item">{tCommon("exclusives")}</li>
          <li className="category-item">{tCommon("awardWinners")}</li>
          <li className="category-item">{tCommon("giftsAndBundles")}</li>
        </ul>
      </div>
      {children}
    </div>
  );
}

export default CategoryMenu;
