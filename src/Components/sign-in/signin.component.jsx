import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button';
import './sign-in.scss';
import {signInWithGoogle, auth} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault(); 
        const {email, password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password) 
            this.setState({email:'', password:''}) 
        } catch (error) {
            alert(error.message);
        }
        
    }

    handleChange = event => {
        const{value, name} = event.target
        this.setState({[name]: value}) 
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your e-mail and password</span>

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
            <div className='buttons'>
                <CustomButton type='submit' onClick={this.handleSubmit}>SIGN IN</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                SIGN IN WITH GOOGLE</CustomButton>
            </div>
                </form>
            </div>
        )
    }
}

export default SignIn