import React from "react";

interface InputProps {
  type: string;
  handleInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => void;
  label: string;
}

function Input({ type, handleInput, label }: InputProps) {
  if (type === "text") {
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
  } else if (type === "textarea") {
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
}

export default Input;
