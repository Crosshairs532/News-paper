import React, { useContext } from 'react';
import { catContext } from '../Hook/Hook';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(catContext);
    // const navigation = useNavigation()
    const navigate = useNavigate();
    if (loader) {
        return <h1>loading....</h1>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate to='/login'></Navigate>
    }
};





export default PrivateRoute;