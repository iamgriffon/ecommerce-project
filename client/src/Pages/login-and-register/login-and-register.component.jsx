import React, { lazy, Suspense } from 'react';
import { LoginAndRegisterContainer } from './login-and-register-styles';
import Spinner from '../../Components/spinner/spinner-component';

const SignIn = lazy(() => import('../../Components/sign-in/sign-in.component'));
const SignUp = lazy(() => import('../../Components/sign-up/sign-up.component'));

const LoginAndRegisterPage = () => (
    <LoginAndRegisterContainer>
      <Suspense fallback={<Spinner />}>
        <SignIn />
        <SignUp />
      </Suspense>
    </LoginAndRegisterContainer>
)
export default LoginAndRegisterPage;
