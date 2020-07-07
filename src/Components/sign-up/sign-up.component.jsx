import React from 'react';
import FormInput from '../form-input/form-input.component';
import { SignUpContainer, SignUpTitle, SignUpButtons } from './sign-up-styles';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user-actions';

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
           displayName: '',
           email: '',
           password: '',
           confirmPassword: '' 
        }
    } 

    handleSubmit = event => {
        event.preventDefault();
        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;
    
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }
       signUpStart({ displayName, email, password })
      };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        const { displayName, email, password, confirmPassword} = this.state;
        return(
            <SignUpContainer>
                <SignUpTitle>I do not have an account</SignUpTitle>
                <SignUpTitle as='span'>Sign up with your e-mail and password</SignUpTitle>

                <form className='sign-up-form'>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Your name'
                    required
                    />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Your email'
                    required
                    />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                    />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                 />
                <SignUpButtons type='submit' onClick={this.handleSubmit}>SIGN UP</SignUpButtons>
                </form>
            </SignUpContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (FormData) => dispatch(signUpStart(FormData)) 
})

export default connect(null, mapDispatchToProps)(SignUp)

