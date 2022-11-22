import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p className='text-red-500'>Something want wrong!!</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <p className='text-3xl'>Please <button onClick={handleLogOut}>Sign Out</button> and log back in.</p>
        </div>
    );
};

export default DisplayError;