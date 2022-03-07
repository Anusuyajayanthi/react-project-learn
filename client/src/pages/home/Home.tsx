import React from 'react'
import {Link} from "react-router-dom";

interface HomeProps {
    
}

export const Home: React.FC<HomeProps> = ({}) => {
        return (
            <div>
                <h1> wellcome to react learning</h1>
                <div>
                    <Link to="/login" className="btn btn-primary">Please go to login</Link>
                </div>
            </div>
        );
}