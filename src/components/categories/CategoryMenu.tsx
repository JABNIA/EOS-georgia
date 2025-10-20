import "../styles/category-menu.scss";
import type { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, setInMenu } from "../../store/reducers/categoryMenu";

function CategoryMenu({ children }: { children: ReactNode }) {
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
