import { useTranslation } from "react-i18next";
import { SlArrowDown } from "react-icons/sl";
import "../../styles/category-menu.scss";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { openMenu, setCategory } from "../../../store/reducers/categoryMenu";

function ListItem({
  navText
}: {
  navText: string;
}) {
  const { t: tHeader } = useTranslation();
  const menu = useSelector((state: RootState) => state.CategoryMenu.category);
  const isInMenu = useSelector((state: RootState) => state.CategoryMenu.inMenu);

  const dispatch = useDispatch();
  console.log(menu, isInMenu)
  if (navText === "sale") {
    return (
      <li className="category-menu">
        <p className="nav-text-title">{tHeader(navText)}</p>
      </li>
    );
  }
  return (
    <li
      className="category-menu"
      onMouseEnter={() => {
        dispatch(openMenu())
        dispatch(setCategory(navText));
      }}
      // onMouseLeave={() => {
      //   const menuTimeout = setTimeout(() => {
      //     if (!isInMenu) {
      //       dispatch(closeMenu());
      //       dispatch(setInMenu(false));
      //     }
      //   }, 1000);
      //   return () => clearTimeout(menuTimeout);
      // }}
    >
      <p className="nav-text-title">{tHeader(navText)}</p> <SlArrowDown />
    </li>
  );
}

export default ListItem;
