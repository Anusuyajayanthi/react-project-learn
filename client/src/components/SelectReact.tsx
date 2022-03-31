import React from "react";
import Select, { components, PlaceholderProps } from 'react-select';
import { ColourOption, colourOptions } from "../pages/auth/common";
const Placeholder = (props: PlaceholderProps<ColourOption>) => {
  return <components.Placeholder {...props} />;
};
interface SelectReactProps {}

export const SelectReact: React.FC<SelectReactProps> = ({}) => {
  return (
    <div>
         <div className="input-parent">
      <Select
        closeMenuOnSelect={false}
        components={{ Placeholder }}
        placeholder={"custom placeholder component"}
        styles={{
          placeholder: (base) => ({
            ...base,
            fontSize: "1em",
            color: colourOptions[2].color,
            fontWeight: 400,
          }),
        }}
        options={colourOptions}
      />
    </div>
    </div>
  );
};
