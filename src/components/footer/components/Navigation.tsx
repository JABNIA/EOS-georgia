import Resources from "./Resources";
import Shop from "./Shop";
import Support from "./Support";

function Navigation() {
    return (
        <div className="footer-navigation">
            <Shop />
            <Resources/>
            <Support />
        </div>
    );
}

export default Navigation;
