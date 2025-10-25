import React, { useRef } from "react";

interface InputProps {
    type: string;
    handleInput: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        key: string,
    ) => void;
    label: string;
}

function Input({ type, handleInput, label }: InputProps) {
    const ref = useRef(null);

    if (type === "textarea") {
        return (
            <div className="input-wrapper">
                <label className="admin-input-label">{label}</label>
                <textarea
                    className="admin-textarea"
                    onChange={(event) => handleInput(event, label)}
                ></textarea>
            </div>
        );
    }

    if (type === "file") {
        return (
            <div className="input-wrapper">
                <label className="admin-input-label">{label}</label>
                <input
                    ref={ref}
                    type={type}
                    className="admin-textarea"
                    onChange={(event) => handleInput(event, label)}
                    multiple
                />
            </div>
        );
    }

    return (
        <div className="input-wrapper">
            <label className="admin-input-label">{label}</label>
            <input
                className="admin-input"
                type={type}
                onChange={(event) => handleInput(event, label)}
            />
        </div>
    );
}

export default Input;
