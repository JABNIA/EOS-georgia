import "../styles/category-menu.scss";
import type { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { setInMenu } from "../../store/reducers/categoryMenu";

function CategoryMenu({ children, setMenu }: { children: ReactNode, setMenu: (menu: boolean)  => void }) {
    const dispatch = useDispatch();

    return (
        <div
            className="category-menu-wrapper"
            onMouseEnter={() => dispatch(setInMenu(true))}
            onMouseLeave={() => setMenu(false)}
        >
            {children}
        </div>
    );
}

export default CategoryMenu;
