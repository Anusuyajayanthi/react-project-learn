import React from 'react'
import '../components/component-style/styles.css'
interface InputcomponentProps {
    userElement: any
}   

export const Inputcomponent: React.FC<InputcomponentProps> = ({userElement}) => {

        return (
                <form className="form-parent">
                    {userElement.map((val:any) => 
                        <div className='input-parent'>
                        <label>{val.userName}</label>
                        <input type={val.inputType} name={val.inputName} />
                        </div>
                    )}
                </form>
        );
}