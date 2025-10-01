import { NavLink, useLocation } from "react-router-dom";
import "./styles/header.scss";
import { useTranslation } from "react-i18next";
import { IoIosSearch } from "react-icons/io";
import { PiUserCircleLight } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";


function Header() {
  const page = useLocation()
  const { t: tHeader} = useTranslation();

  return (
    <header>
      <img src="./assets/logo.png" alt="EOS logo here" className="logo"/>
      <nav>
        <ul>
          <li className={page.pathname === "/" ? "active-link" : ""}>
            <NavLink to="/">{tHeader("home")}</NavLink>
          </li>
          <li className={page.pathname === "/about" ? "active-link" : ""}>
            <NavLink to="/about">{tHeader("about")}</NavLink>
          </li>
          <li className={page.pathname === "/products" ? "active-link" : ""}>
            <NavLink to="/products">{tHeader("products")}</NavLink>
          </li>
          <li className={page.pathname === "/contact" ? "active-link" : ""}>
            <NavLink to="/contact">{tHeader("contactUs")}</NavLink>
          </li>
          <li className={page.pathname === "/find-us" ? "active-link" : ""}>
            <NavLink to="/find-us">{tHeader("findUs")}</NavLink>
          </li>
        </ul>
      </nav>
      <div className="icons">
        <IoIosSearch size={35} color="#4c4a4a"/>
        <PiUserCircleLight  size={35} color="#4c4a4a"/>
        <IoCartOutline  size={35} color="#4c4a4a"/>
      </div>
    </header>
  );
}

export default Header;
