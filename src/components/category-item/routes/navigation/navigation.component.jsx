import { Fragment, useContext } from 'react';
import {Outlet, Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../../../assets/logo.svg'
import {NavigationContainer,LogoContainer,NavLink,NavLinks} from './navigation.styles'
import { UserContext } from '../../../../context/user.context';
import { signOutUser } from '../../../../utils/firebase/firebase.util';
import CartIcon from '../../../cart-icon/cart-icon.components'
import CartDropdown from '../../../card-dropdown/cart-dropdown.component';
import { CartContext } from '../../../../context/cart.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>

          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
        </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;