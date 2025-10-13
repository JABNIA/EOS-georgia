import "./styles/header.scss";
import { IoIosSearch } from "react-icons/io";
import { PiUserCircleLight } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import CategoryMenu from "./categories/CategoryMenu";
import ListItem from "./categories/components/ListItem";
import Body from "./categories/components/Body";
import Shave from "./categories/components/Shave";
import Lip from "./categories/components/Lip";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

function Header() {
  const menuOpen = useSelector((state: RootState) => state.CategoryMenu.open);
  const menu = useSelector((state: RootState) => state.CategoryMenu.category);
  const { t: tCommon } = useTranslation("common");

  return (
    <header>
      <img src="./assets/logo.png" alt="EOS logo here" className="logo" />
      <nav>
        <ul>
          <NavLink to="/sale" className={"nav-text-title"}>
            {tCommon("allProducts")}
          </NavLink>
          <ListItem
            navText="bodyCare"
          />
          <ListItem
            navText="shave"
          />
          <ListItem
            navText="lipCare"
          />
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
      {menuOpen && menu === "bodyCare" && <CategoryMenu><Body /></CategoryMenu>}
      {menuOpen && menu === "shave" && <CategoryMenu><Shave /></CategoryMenu>}
      {menuOpen && menu === "lipCare" && <CategoryMenu><Lip /></CategoryMenu>}
      <div className="icons">
        <IoIosSearch size={35} color="#4c4a4a" />
        <PiUserCircleLight size={35} color="#4c4a4a" />
        <IoCartOutline size={35} color="#4c4a4a" />
      </div>
    </header>
  );
}

export default Header;
