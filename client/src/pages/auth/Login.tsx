import React from "react";
import { ButtonText } from "../../components/ButtonText";
import { InputText } from "../../components/InputText";
import { SelectReact } from "../../components/SelectReact";
import { SelectText } from "../../components/SelectText";
import { colourOptions, selectItems } from "./common";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  return (
    <div className="common-container">
      <div className="form-parent position-relative">
      <h1>Wellcome</h1>
      {/* <Inputcomponent userElement={userdetails}/> */}
      <InputText
        label="Enter username"
        name="username"
        type="text"
        placeholder="Enter username"
      />
      <InputText
        label="Enter email"
        name="name"
        type="email"
        placeholder="Enter email"
      />
      <InputText
        label="Enter password"
        name="password"
        type="password"
        placeholder="Enter password"
      />
      <InputText
        label="Enter date of birth"
        name="date_of_birth"
        type="date"
        placeholder="Enter date of birth"
      />
      <InputText
        label="Description"
        type="textarea"
        name="description"
        placeholder="Enter description"
      />
      <SelectText userdata={selectItems} label="Enter option"/>
      <SelectReact colourOptionValue={colourOptions} />
      <div className=" mv-btn-parent">
        <ButtonText
          type="submit"
          value="Submit"
          onClick={() => console.log("test--")}
        />
        <ButtonText
          type="reset"
          value="Cancel"
          onClick={() => console.log("test--")}
        />
      </div>
      </div>
    </div>
  );
};
