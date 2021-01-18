import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => {
  const { currentUser } = useSelector((state) => state.userState);
  const { hidden } = useSelector((state) => state.cartState);

  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden || <CartDropDown />}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   currentUser: state.userState.currentUser,
// });

// export default connect(mapStateToProps)(Header);

export default Header;
