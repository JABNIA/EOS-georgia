import { NavLink } from "react-router-dom";
import ListItem from "../../categories/components/NavItem";
import { useTranslation } from "react-i18next";
import Body from "../../categories/components/Body";
import Shave from "../../categories/components/Shave";
import Lip from "../../categories/components/Lip";

function NavSection() {
    const { t: tCommon } = useTranslation();

    return (
        <nav>
            <ul>
                <NavLink to="/products/All" className={"nav-text-title"}>
                    {tCommon("allProducts")}
                </NavLink>
                <ListItem navText="bodyCare" element={<Body />} />
                <ListItem navText="shave" element={<Shave />} />
                <ListItem navText="lipCare" element={<Lip />} />
                <NavLink to="/sale" className={"nav-text-title"}>
                    {tCommon("gifts")}
                </NavLink>
                <NavLink to="/sale" className={"nav-text-title"}>
                    {tCommon("blog")}
                </NavLink>
                <NavLink to="/sale" className={"nav-text-title"}>
                    {tCommon("about")}
                </NavLink>
            </ul>
        </nav>
    );
}

export default NavSection;
