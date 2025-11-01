interface InputProps {
    handleInput: (
        e: React.ChangeEvent<HTMLSelectElement>,
        key: string,
    ) => void;
    label: string;
}


function CategorySelection({handleInput, label}: InputProps) {
    const categoryes = [
        "body lotion",
        "shower gel",
        "hand cream",
        "body butter",
        "body oil",
        "body myst",
        "shave oil",
        "shave cream",
        "body scrub",
        "lip balm",
        "super balm",
        "healing line",
        "lip butter",
        "lip scrub",
    ];

    return (
        <div className="input-wrapper">
            <label className="admin-input-label">{label}</label>
            <select className={"category-select"} onChange={(e) => handleInput(e, label)}>
                {categoryes.map((category) => (
                    <option value={category}>{category}</option>
                ))}
            </select>
        </div>
    );
}

export default CategorySelection;
