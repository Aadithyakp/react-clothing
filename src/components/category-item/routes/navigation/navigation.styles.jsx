import styled from 'styled-components';
import {Link} from 'react-router-dom'
export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`
export const LogoContainer = styled(Link)`
height: 100%;
width: 100%;
padding:10px;
display: flex;
align-items: center;
`
export const NavLinks = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`

export const NavLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;
`

export const Logo = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

// .navigation {
//   height: 70px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 25px;

//   .logo-container {
//     height: 100%;
//     width: 100%;
//     padding:10px;
//     display: flex;
//     align-items: center;
    
//   }
//   .logo
//   {
//     padding: 10px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
  
//   .nav-links-container {
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;

//     .nav-link {
//       padding: 10px 15px;
//       cursor: pointer;
//     }
//   }
// }
