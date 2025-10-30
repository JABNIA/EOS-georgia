import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { colors } from "../../styles/colors";

function Resources() {
    const { t: tFooter } = useTranslation("footer");

    return (
        <div className="footer-nav-section">
            <h3>RESOURCES</h3>
            <ul className="footer-list">
                <li className="footer-nav-item">
                    <span className="icon-wrapper">
                        <FaMapMarkerAlt color={colors.defaultPink} />
                    </span>{" "}
                    {tFooter("address")}
                </li>
                <li className="footer-nav-item">
                    <span className="icon-wrapper">
                        <IoIosMail color={colors.defaultPink} />
                    </span>{" "}
                    {tFooter("email")}
                </li>
                <li className="footer-nav-item">
                    <span className="icon-wrapper">
                        <FaPhoneAlt color={colors.defaultPink} />
                    </span>{" "}
                    {tFooter("number")}
                </li>
            </ul>
        </div>
    );
}

export default Resources;
