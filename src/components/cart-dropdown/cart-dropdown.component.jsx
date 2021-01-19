import React from 'react';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems }) => {
  // const { cartItems } = useSelector((state) => state.cartState);

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropDown);
