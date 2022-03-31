import React from "react";
import { selectItems } from "../pages/auth/common";


interface SelectTextProps {
  label?: string;
}

export const SelectText: React.FC<SelectTextProps> = ({
  label

}) => {
  return (
    <div className="form-parent position-relatives">
      <div className="input-parent">
        <label>{label}</label>
        <select>
        {selectItems.map((val:any) => 
          <option>{val.item}</option>
        )}
        </select>
      </div>
    </div>
  );
};
