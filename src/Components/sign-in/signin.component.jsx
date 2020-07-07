import React from 'react';
import FormInput from '../form-input/form-input.component';
import { SignInContainer, SignInTitle, SignInButtons, Button } from './sign-in-styles';
import { SignUpTitle } from '../sign-up/sign-up-styles';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user-actions';
import { connect } from 'react-redux';




class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault(); 
        const { emailSignInStart } = this.props;
        const {email, password} = this.state;
        emailSignInStart(email, password);
    };

    handleChange = event => {
        const{value, name} = event.target;

        this.setState({[name]: value}); 
    }

    render(){
      const { googleSignInStart } = this.props;
        return(
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <SignUpTitle as='span'>Sign in with your e-mail and password</SignUpTitle>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name='email'
                        label='Your email'
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        required
                    />
               <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
            <SignInButtons>
                <Button type='submit' onClick={this.handleSubmit}>SIGN IN</Button>
                <Button type='button' onClick={googleSignInStart} isGoogleSignIn>
                SIGN IN WITH GOOGLE</Button>
            </SignInButtons>
                </form>
            </SignInContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);