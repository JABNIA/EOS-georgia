import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaSquareThreads } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

function socials() {
    return (
        <ul className="footer-socials">
            <li>
                <a href="https://www.tiktok.com/@eos.georgia?fbclid=IwY2xjawNpvyJleHRuA2FlbQIxMABicmlkETE0aW5EZHM1a3I5MXBXOXd3AR6pmF5-BXQiOhNnkYqrJ8CWZmUbHgWH32nC3ITV3bJGEEGkiE_8VUrBkR2FOg_aem_l1isGbPV_-F9MuRCAHOaGg" target="_blank" rel="noopener noreferrer">
                    <FaTiktok color="white" size={40} />
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/eosgeorgia/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook color="white" size={40} />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/eos.georgia/" target="_blank" rel="noopener noreferrer">
                    <FaInstagramSquare color="white" size={40} />
                </a>
            </li>
            <li>
                <a href="https://www.threads.com/@eos.georgia?fbclid=IwY2xjawNpvw5leHRuA2FlbQIxMABicmlkETE0aW5EZHM1a3I5MXBXOXd3AR4TekU_gvjis0G3kiPE2vJfpLZIhxdDdXgHbhdaxCt3sYjkLT0tIXm-0W2ILQ_aem_HRfNHC-4M0xWL1Yfs_h2bg" target="_blank" rel="noopener noreferrer">
                    <FaSquareThreads color="white" size={40} />
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/@eosGeorgia" target="_blank" rel="noopener noreferrer">
                    <FaYoutubeSquare color="white" size={40} />
                </a>
            </li>
        </ul>
    );
}

export default socials;
