import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { PiUserCircleLight } from "react-icons/pi";
import SelectLang from "./SelectLang";

function Icons() {
    return (
        <>
            <div className="icons">
                <IoIosSearch size={35} color="#4c4a4a" />
                <PiUserCircleLight size={35} color="#4c4a4a" />
                <IoCartOutline size={35} color="#4c4a4a" />
            </div>
            <SelectLang />
        </>
    );
}

export default Icons;
