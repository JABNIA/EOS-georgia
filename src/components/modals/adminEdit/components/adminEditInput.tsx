import type { ChangeEvent } from "react";

interface inputProps {
    label: string;
    value: string | number;
    changing: string;
    setValue: (inputing: string, input: string) => void;
}

const labelStyle = {
    fontSize: "24px",
    fontWeight: "700",
    flexShrink: "0",
};

const inputStyle = {
    height: "40px",
    padding: "4px 16px",
    borderRadius: "8px",
    fontSize: "24px",
};

function adminEditInput({ label, value, changing, setValue }: inputProps) {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                flexShrink: "0",
            }}
        >
            <label htmlFor="" style={labelStyle}>
                {label}
            </label>
            <input
                type="text"
                value={value}
                style={inputStyle}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setValue(changing, event.target.value)
                }
            />
        </div>
    );
}

export default adminEditInput;
