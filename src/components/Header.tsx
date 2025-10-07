import "./styles/header.scss";
import { IoIosSearch } from "react-icons/io";
import { PiUserCircleLight } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import CategoryMenu from "./categories/CategoryMenu";
import { useState } from "react";
import ListItem from "./categories/components/ListItem";
import { useTranslation } from "react-i18next";

function Header() {
  const [menu, setMenu] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t: tCommon } = useTranslation("common");

  const handleSetMenu = (menu: string) => {
    setMenu(menu);
  };

  return (
    <header>
      <img src="./assets/logo.png" alt="EOS logo here" className="logo" />
      <nav>
        <ul>
          <ListItem
            handleSetMenu={handleSetMenu}
            setMenuOpen={setIsMenuOpen}
            navText="body"
          />
          <ListItem
            handleSetMenu={handleSetMenu}
            setMenuOpen={setIsMenuOpen}
            navText="shave"
          />
          <ListItem
            handleSetMenu={handleSetMenu}
            setMenuOpen={setIsMenuOpen}
            navText="lip"
          />
          <ListItem
            handleSetMenu={handleSetMenu}
            setMenuOpen={setIsMenuOpen}
            navText="sale"
          />
          <ListItem
            handleSetMenu={handleSetMenu}
            setMenuOpen={setIsMenuOpen}
            navText="fragrance"
          />
          <ListItem
            handleSetMenu={handleSetMenu}
            setMenuOpen={setIsMenuOpen}
            navText={"about"}
          />
        </ul>
      </nav>
      {isMenuOpen && <CategoryMenu menu={menu} />}
      <div className="icons">
        <IoIosSearch size={35} color="#4c4a4a" />
        <PiUserCircleLight size={35} color="#4c4a4a" />
        <IoCartOutline size={35} color="#4c4a4a" />
      </div>
    </header>
  );
}

export default Header;
