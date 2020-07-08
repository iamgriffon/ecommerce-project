import React from 'react';
import SignIn from '../../Components/sign-in/sign-in.component';
import SignUp from '../../Components/sign-up/sign-up.component';
import { LoginAndRegisterContainer } from './login-and-register-styles';

const LoginAndRegisterPage = () => (
    <LoginAndRegisterContainer>
        <SignIn />
        <SignUp />
    </LoginAndRegisterContainer>
)
export default LoginAndRegisterPage;
