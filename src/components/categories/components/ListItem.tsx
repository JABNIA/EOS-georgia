import { useTranslation } from "react-i18next";
import { SlArrowDown } from "react-icons/sl";
import "../../styles/category-menu.scss";
import type { Dispatch, SetStateAction } from "react";

function ListItem({
  handleSetMenu,
  setMenuOpen,
  navText,
}: {
  handleSetMenu: (text: string) => void;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  navText: string;
}) {
  const { t: tHeader } = useTranslation();

  return (
    <li
      className="category-menu"
      onMouseEnter={() => {
        handleSetMenu(navText)
        setMenuOpen(true)
    }}
      onClick={() => handleSetMenu(navText)}
      onMouseLeave={() => {
        const menuTimeout = setTimeout(
            () => {
                handleSetMenu("");
                setMenuOpen(false)
            }, 3000)

        return () => clearTimeout(menuTimeout)
      }}
    >
      <p className="nav-text-title">{tHeader(navText)}</p> <SlArrowDown />
    </li>
  );
}

export default ListItem;
