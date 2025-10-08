import "./styles/header.scss";
import { IoIosSearch } from "react-icons/io";
import { PiUserCircleLight } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import CategoryMenu from "./categories/CategoryMenu";
import ListItem from "./categories/components/ListItem";
import Body from "./categories/components/Body";
import Shave from "./categories/components/Shave";
import Lip from "./categories/components/Lip";
import Fragrance from "./categories/components/Fragrance";
import About from "./categories/components/About";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

function Header() {
  const menuOpen = useSelector((state: RootState) => state.CategoryMenu.open);
  const menu = useSelector((state: RootState) => state.CategoryMenu.category);


  return (
    <header>
      <img src="./assets/logo.png" alt="EOS logo here" className="logo" />
      <nav>
        <ul>
          <ListItem
            navText="body"
          />
          <ListItem
            navText="shave"
          />
          <ListItem
            navText="lip"
          />
          <ListItem
            navText="sale"
          />
          <ListItem
            navText="fragrance"
          />
          <ListItem
            navText={"about"}
          />
        </ul>
      </nav>
      {menuOpen && menu === "body" && <CategoryMenu><Body /></CategoryMenu>}
      {menuOpen && menu === "shave" && <CategoryMenu><Shave /></CategoryMenu>}
      {menuOpen && menu === "lip" && <CategoryMenu><Lip /></CategoryMenu>}
      {menuOpen && menu === "fragrance" && <CategoryMenu><Fragrance /></CategoryMenu>}
      {menuOpen && menu === "about" && <CategoryMenu><About /></CategoryMenu>}
      <div className="icons">
        <IoIosSearch size={35} color="#4c4a4a" />
        <PiUserCircleLight size={35} color="#4c4a4a" />
        <IoCartOutline size={35} color="#4c4a4a" />
      </div>
    </header>
  );
}

export default Header;
