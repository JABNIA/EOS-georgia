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
      {children}
    </div>
  );
}

export default CategoryMenu;
