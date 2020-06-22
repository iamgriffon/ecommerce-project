import React from 'react';
import {Link} from 'react-router-dom';
import './header-style.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
// import ShopPage from '../Pages/shop/shop.component';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-component' to='/'>
            <Logo/>
        </Link>
    <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/contact'>CONTACT</Link>
        {
            currentUser ? 
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
        }
        
    </div>
    </div>
)

export default Header