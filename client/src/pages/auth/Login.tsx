import React from 'react'
import { Inputcomponent } from '../../components/Inputcomponent';
import { userdetails } from './common'

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
        return (
            <div className='common-container'>
                <h1>Wellcome</h1>
                  <Inputcomponent userElement={userdetails}/>
            </div>
        );
}