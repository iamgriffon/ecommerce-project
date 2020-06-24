import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.scss';

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

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
    
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }
        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
          );
    
          await createUserProfileDocument(user, { displayName }); //Request vai ser criada com a UID(user) e o nome do user (displayName)
    
          this.setState({ //Isso vai zerar os campos de input após a request
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          });
          alert('Registered Sucessfully!');
        } catch (error) {
          alert(error.message);
        }
      };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        const { displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your e-mail and password</span>

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
                <CustomButton type='submit' onClick={this.handleSubmit}>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp