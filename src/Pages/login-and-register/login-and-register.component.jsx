import React from 'react';
import './login-and-register.scss';
import SignIn from '../../Components/sign-in/signin.component';
import SignUp from '../../Components/sign-up/sign-up.component';

const LoginAndRegisterPage = () => (
    <div className='login-and-register'>
        <SignIn />
        <SignUp />
    </div>
)
export default LoginAndRegisterPage;
