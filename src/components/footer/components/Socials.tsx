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
            <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaTiktok color="white" size={40}/>
            </a>
        </li>
        <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaFacebook color="white" size={40}/>
            </a>
        </li>
        <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare color="white" size={40}/>
            </a>
        </li>
        <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaSquareThreads color="white" size={40}/>
            </a>
        </li>
        <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaYoutubeSquare color="white" size={40}/>
            </a>
        </li>
        <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaPinterestSquare color="white" size={40}/>
            </a>
        </li>
      </ul>
  )
}

export default socials
