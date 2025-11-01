import "../styles/category-menu.scss";
import type { ReactNode } from "react";


function CategoryMenu({ children }: { children: ReactNode, setMenu: (menu: boolean)  => void }) {

    return (
        <div
            className="category-menu-wrapper"
        >
            {children}
        </div>
    );
}

export default CategoryMenu;
