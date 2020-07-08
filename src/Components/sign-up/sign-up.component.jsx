import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import { SignUpContainer, SignUpTitle, SignUpButtons } from './sign-up-styles';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user-actions';

const SignUp = ({signUpStart}) => {
  const [userRegister, setRegister] = useState({ 
    displayName: '', 
    email: '', 
    password: '', 
    confirmPassword: ''
   });
  
  const { displayName, email, password, confirmPassword } = userRegister;

    const handleSubmit = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }
       signUpStart({ displayName, email, password })
      };

    const handleChange = event => {
        const {name, value} = event.target;
        setRegister({...userRegister, [name]: value});
    }

        return(
            <SignUpContainer>
                <SignUpTitle>I do not have an account</SignUpTitle>
                <SignUpTitle as='span'>Sign up with your e-mail and password</SignUpTitle>

                <form className='sign-up-form'>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Your name'
                    required
                    />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Your email'
                    required
                    />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                    />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                 />
                <SignUpButtons type='submit' onClick={handleSubmit}>SIGN UP</SignUpButtons>
                </form>
            </SignUpContainer>
        )
    }

const mapDispatchToProps = dispatch => ({
  signUpStart: (FormData) => dispatch(signUpStart(FormData)) 
})

export default connect(null, mapDispatchToProps)(SignUp)

