import { useEffect } from 'react';
import { useNavigate } from 'react-router';

function Auth(children) {

    const userAuth =()=>{
        const token = localStorage.getItem('token');
        return !!token
    };
    const navigate = useNavigate();
  return (
    
    useEffect(()=>{
        if(!userAuth){
            navigate('/home')
        }
        return userAuth ? children: null;
    },[])
  )
}

export default Auth