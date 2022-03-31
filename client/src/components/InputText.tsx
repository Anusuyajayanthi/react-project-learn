import React, { useState } from "react";
import "../components/component-style/styles.css";
import { ReactComponent as Eyesolid } from "../asset/img/svg/eye-solid.svg";
import { ReactComponent as Eyesolidhide } from "../asset/img/svg/eye-solid-hide.svg";

interface InputTextProps {
  label: string;
  name: string;
  type: string;
  Icon?: any;
  placeholder: string;
  addclass?: string;
  error?: string;
  // onchange?: any
}

export const InputText: React.FC<InputTextProps> = ({
  label,
  name,
  type,
  placeholder,
  error,
  // onchange
}) => {
  const [status, setStatus] = useState(true);
  return (
    
      <div>
        <div className="input-parent">
          <div className="password-icon">
            <label>{label}</label>
            {type === "password" && (
              <span
                onClick={() => (status ? setStatus(false) : setStatus(true))}
              >
                {status ? <Eyesolid className="showImg" /> : <Eyesolidhide />}
              </span>
            )}
          </div>
          <input
            type={
              type === "password"
                ? status
                  ? (type = "password")
                  : (type = "text")
                : type
            }
            name={name}
            placeholder={placeholder}
            className={type === "textarea" ? "input-textarea" : ""}
            onChange={() => '<span className="error-msg"> </span>'}
          />
        </div>
      </div>
    
  );
};
