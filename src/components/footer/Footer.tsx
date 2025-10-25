import "../styles/footer.scss";
import Navigation from "./components/Navigation";
import Socials from "./components/Socials";

function Footer() {
    return (
        <footer>
            <p className="footer-title">Stay smooth</p>
            <Socials />
            <Navigation />
        </footer>
    );
}

export default Footer;
