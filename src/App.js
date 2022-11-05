import Navigation from './components/category-item/routes/navigation/navigation.component'
import Home from './components/category-item/routes/home/home.component'
import {Routes, Route, Outlet, BrowserRouter} from 'react-router-dom'
import SignIn from './components/category-item/routes/sign-in/sign-in.component'
import Shop from './components/category-item/routes/shop/shop.component'
import Checkout from './components/category-item/routes/checkout/checkout.component'

function App()
{
  return (
  <Routes>
    <Route path='/' element = {<Navigation />} > 
      <Route index element = {<Home />} />
      <Route path='shop/*' element = {<Shop />} />
      <Route path='auth' element = {<SignIn />} />
      <Route path='checkout' element = {<Checkout />} />   
    </Route>
  </Routes >
  )
}
export default App;