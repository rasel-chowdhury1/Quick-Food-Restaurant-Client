import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../CustomHook/useAdmin';



const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    // console.log(user,loading);
    // console.log(isAdmin, isAdminLoading);

    const location = useLocation();

    if(loading || isAdminLoading){
        return <div className='text-center'><span className="loading loading-bars loading-lg"></span><p>data is loading</p></div>
    }

    if(user && isAdmin){
        return children;
    }
    return (<Navigate to='/login' state={{from: location}} replace></Navigate>
    );
};

export default AdminRoute;