import React, { Children } from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../config/contexts/AuthContext';

const Protected = ({children}) => {

    const {user} = UserAuth();

    if (!user) {
        return(<Navigate to='/login' />);
    }

  return children
}

export default Protected
