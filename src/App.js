import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./containers/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/HOC/PrivateRoute";
import ExploreStore from "./containers/ExploreStore";
import ShopProfile from "./containers/newShopProfile";
import Signin from "./containers/Signin";
import Signup from "./containers/SignUp";
import OrderDeatilsP from "./containers/Oder details page";
import OrderPage from "./containers/OrdersPage";
import Favorite from "./containers/Fav";
import Planselection from "./containers/StorePlanselection";
import MyProfile from "./containers/MyProfile";
import CartPage from "./containers/CartPage";
import EditProfile from "./components/EditProfile";
import StoreForm from "./containers/StoreForm";
import StoreProduct from "./containers/StoreContainers/StoreProduct";
import StoreOrder from "./containers/StoreContainers/StoreOrder";
import StoreDasboard from "./containers/StoreContainers/StoreDashboard";
import ProductDetailsPage from "./containers/ProductDetailsPage";
// import CheckoutPage from "./containers/CheckoutPage";
import StoreCoustomers from "./containers/StoreContainers/StoreCoustomers";
import StoreProfile from "./containers/StoreContainers/StoreProfile";
import StoreAddProduct from "./containers/StoreContainers/AddProduct";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions/auth.action";

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }

  },[]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={HomePage} />
          <PrivateRoute path="/ExploreStore" exact component={ExploreStore} />
          <PrivateRoute path="/:storeId/store" exact component={ShopProfile} />
          <Route path="/Signin" exact component={Signin} />
          <Route path="/Signup" exact component={Signup} />
          <PrivateRoute path="/account/orders" exact component={OrderPage} />
          <PrivateRoute path="/Orderpage" exact component={OrderDeatilsP} />
          <PrivateRoute path="/favorite" exact component={Favorite} />
          <PrivateRoute path="/plansection" exact component={Planselection} />
          <PrivateRoute path="/myprofile" exact component={MyProfile} />
          <PrivateRoute path="/cart" exact component={CartPage} />
          <PrivateRoute path="/editprofile" exact component={EditProfile} />
          <PrivateRoute path="/storeForm" exact component={StoreForm} />
          <PrivateRoute path="/storeDashboard" exact component={StoreDasboard} />
          <PrivateRoute path="/storeProduct" exact component={StoreProduct} />
          <PrivateRoute path="/storeOrder" exact component={StoreOrder} />
          <PrivateRoute path="/:productSlug/:productId/p" component={ProductDetailsPage}/>
          {/* <Route path="/checkout" exact component={CheckoutPage} /> */}
          <Route path="/storeCoustomer" exact component={StoreCoustomers} />
          <Route path="/storeProfile" exact component={StoreProfile} />
          <Route path="/Addproduct" exact component={StoreAddProduct} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;