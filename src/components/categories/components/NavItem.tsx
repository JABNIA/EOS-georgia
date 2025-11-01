import { useTranslation } from "react-i18next";
import { SlArrowDown } from "react-icons/sl";
import "../../styles/category-menu.scss";
import { useDispatch } from "react-redux";
import {
    setCategory
} from "../../../store/reducers/categoryMenu/index";
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
    const dispatch = useDispatch();

        
    if (navText === "sale") {
        return (
            <li className="category-menu">
                <p className="nav-text-title">{tHeader(navText)}</p>
            </li>
        );
    }

    console.log(`is menu - ${menu}`)
    
    return (
        <div
            className="category-menu"
            onMouseEnter={() => {
                setMenu(true);
                dispatch(setCategory(navText));
            }}
    
            onMouseLeave={() => setMenu(false)}
        >
            <p className="nav-text-title nav-item">{tHeader(navText)}</p>{" "}
            <SlArrowDown />
            {menu && <CategoryMenu setMenu={setMenu}>{element}</CategoryMenu>}
        </div>
    );
}

export default ListItem;
