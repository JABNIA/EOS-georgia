import "./styles/header.scss";
import { IoIosSearch } from "react-icons/io";
import { PiUserCircleLight } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import ListItem from "./categories/components/ListItem";
import Body from "./categories/components/Body";
import Shave from "./categories/components/Shave";
import Lip from "./categories/components/Lip";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

function Header() {
    const { t: tCommon } = useTranslation("common");
    const { i18n } = useTranslation();

    const handleLangChange = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <header>
            <img src="./assets/logo2.png" alt="EOS logo here" className="logo" />
            <nav>
                <ul>
                    <NavLink to="/sale" className={"nav-text-title"}>
                        {tCommon("allProducts")}
                    </NavLink>
                    <ListItem navText="bodyCare" element={<Body />}/>
                    <ListItem navText="shave"  element={<Shave />}/>
                    <ListItem navText="lipCare"  element={<Lip />}/>
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
            <div className="icons">
            
                <IoIosSearch size={35} color="#4c4a4a" />
                <PiUserCircleLight size={35} color="#4c4a4a" />
                <IoCartOutline size={35} color="#4c4a4a" />
            <div>
                <form>
                    <select className="lang-select" name="lang" id="">
                        <option
                            value="ka"
                            onClick={() => handleLangChange("ka")}
                        >
                            🇬🇪 ქართ.
                        </option>
                        <option
                            value="en"
                            onClick={() => handleLangChange("en")}
                        >
                            🇬🇧 ENG.
                        </option>
                    </select>
                </form>
            </div>
            </div>
        </header>
    );
}

export default Header;
