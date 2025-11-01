import type { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

function SelectLang() {
    const { i18n } = useTranslation();

    const handleLangChange = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div>
            <form>
                <select className="lang-select" name="lang" id="" onChange={handleLangChange}>
                    <option value="ka" >
                        🇬🇪 ქართ.
                    </option>
                    <option value="en" >
                        🇬🇧 ENG.
                    </option>
                </select>
            </form>
        </div>
    );
}

export default SelectLang;
