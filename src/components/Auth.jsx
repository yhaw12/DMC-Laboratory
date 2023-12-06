import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Auth({ children }) {
    const userAuth = () => {
        const token = localStorage.getItem('token');
        return !!token;
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (!userAuth()) {
            navigate('/home');
        }
    }, [navigate]);

    return userAuth() ? children : null;
}
Auth.propTypes = {
  children: PropTypes.node,
};

export default Auth;