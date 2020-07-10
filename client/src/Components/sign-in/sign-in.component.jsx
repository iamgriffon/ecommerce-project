import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import { SignInContainer, SignInTitle, SignInButtons, Button } from './sign-in-styles';
import { SignUpTitle } from '../sign-up/sign-up-styles';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user-actions';
import { connect } from 'react-redux';


const SignIn = ({emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' });
  const {email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault(); 
        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const{value, name} = event.target;
        setCredentials({...userCredentials, [name]: value}); 
    }
        return(
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <SignUpTitle as='span'>Sign in with your e-mail and password</SignUpTitle>

                <form onSubmit={handleSubmit}>
                    <FormInput 
                        type="email" 
                        name='email'
                        label='Your email'
                        value={email} 
                        handleChange={handleChange} 
                        required
                    />
               <FormInput
                        name='password'
                        type='password'
                        value={password}
                        handleChange={handleChange}
                        label='Password'
                        required
                    />
            <SignInButtons>
                <Button type='submit' onClick={handleSubmit}>SIGN IN</Button>
                <Button type='button' onClick={googleSignInStart} isGoogleSignIn>
                SIGN IN WITH GOOGLE</Button>
            </SignInButtons>
                </form>
            </SignInContainer>
        )
    }

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);