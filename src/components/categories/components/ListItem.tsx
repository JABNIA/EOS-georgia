import { useTranslation } from "react-i18next";
import { SlArrowDown } from "react-icons/sl";
import "../../styles/category-menu.scss";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { setCategory } from "../../../store/reducers/categoryMenu/index";
import CategoryMenu from "../CategoryMenu";
import { useState, type ReactNode } from "react";

function ListItem({
    navText,
    element,
}: {
    navText: string;
    element: ReactNode;
}) {
    const { t: tHeader } = useTranslation("common");
    const [menu, setMenu] = useState<boolean>(false);
    const menuCategory = useSelector((state: RootState) => state.CategoryMenu.category);
    // const menuOpen = useSelector((state: RootState) => state.CategoryMenu.open);
    const isInMenu = useSelector(
        (state: RootState) => state.CategoryMenu.inMenu
    );

    const dispatch = useDispatch();

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
                setMenu(true);
                dispatch(setCategory(navText));
            }}
            onMouseLeave={() => {
                setTimeout(() => {
                }, 500);
            }}
        >
            <p className="nav-text-title nav-item">{tHeader(navText)}</p>{" "}
            <SlArrowDown />
            {menu && <CategoryMenu setMenu={setMenu}>{element}</CategoryMenu>}
        </li>
    );
}

export default ListItem;
