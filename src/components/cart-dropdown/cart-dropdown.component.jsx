import React from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router";
import {toggleCartHidden} from "../../redux/cart/cart.actions";


const CartDropdown = ({cartItems, history, toggleCartHidden}) => {
    return (
        <div className={'cart-dropdown'}>
            <div className={'cart-items'} >
                {cartItems.length ?
                    cartItems.map(cartItems => <CartItem key={cartItems.id} item={cartItems}/>)
                    :
                    <span className={'empty-message'}>Your cart is empty</span>
                }
                {/*{*/}
                {/*    cartItems.map(cartItems => <CartItem key={cartItems.id} item={cartItems}/>)*/}
                {/*}*/}
            </div>
            <CustomButton onClick={()=> {
                history.push('/checkout');
                toggleCartHidden()
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}
 const mapStateTpProps = createStructuredSelector({
     cartItems: selectCartItems
 })

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => {dispatch(toggleCartHidden())}
})

export default withRouter(connect(mapStateTpProps, mapDispatchToProps)(CartDropdown))