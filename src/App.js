import "./App.css";
import HomePage from "./containers/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/ExploreStore" exact component={ExploreStore} />
          <Route path="/:storeId/store" exact component={ShopProfile} />
          <Route path="/Signin" exact component={Signin} />
          <Route path="/Signup" exact component={Signup} />
          <Route path="/account/orders" exact component={OrderPage} />
          <Route path="/Orderpage" exact component={OrderDeatilsP} />
          <Route path="/favorite" exact component={Favorite} />
          <Route path="/plansection" exact component={Planselection} />
          <Route path="/myprofile" exact component={MyProfile} />
          <Route path="/cart" exact component={CartPage} />
          <Route path="/editprofile" exact component={EditProfile} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
