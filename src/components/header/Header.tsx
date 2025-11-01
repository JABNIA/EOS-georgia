import "../styles/header.scss";
import NavSection from "./components/NavSection";
import Icons from "./components/Icons";

function Header() {
    return (
        <header>
            <img
                src="./assets/logo2.png"
                alt="EOS logo here"
                className="logo"
            />
            <NavSection />
            <Icons />
        </header>
    );
}

export default Header;
