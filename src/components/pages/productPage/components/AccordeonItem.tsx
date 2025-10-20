import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";

function AccordeonItem({ title, content }: { title: string; content: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="accordeon-item-title">
                <h2 onClick={() => setIsOpen((prev) => !prev)}>{title}</h2>{" "}
                {isOpen ? <RiArrowUpSLine /> : <MdOutlineKeyboardArrowDown />}
            </div>
            <p
                className={
                    isOpen
                        ? "accordeon-item-content-open"
                        : "accordeon-item-content-closed"
                }
            >
                {content}
            </p>
        </div>
    );
}

export default AccordeonItem;
