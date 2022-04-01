import React from "react";


interface SelectTextProps {
  label?: string;
  userdata:any;
}

export const SelectText: React.FC<SelectTextProps> = ({
  label,userdata

}) => {
  return (
    <div className="form-parent position-relatives">
      <div className="input-parent">
        <label>{label}</label>
        <select>
        {userdata.map((val:any) => 
          <option>{val.item}</option>
        )}
        </select>
      </div>
    </div>
  );
};