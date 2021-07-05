import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Modal, DropdownMenu } from "../../components/MaterialUI";
import Profilepiclogo from "../../img/icons8-male-user-50.png";
import Carticon from "../../img/cart.png";
import Storeicon from "../../img/shop.png";
import Homeicon from "../../img/home.png";
import Wishlisticon from "../../img/heart.png";
import { useDispatch, useSelector } from "react-redux";
import Signin from "../../containers/Signin"
import Signup from "../../containers/SignUp"

/**
 * @author
 * @function Navigationbar
 **/

const Navigationbar = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const auth = useSelector((state) => state.auth);
  const [showLoginModal,setShowLoginModal] = useState(false);
  const [showSigupModal,setShowSigupModal] = useState(false);
  


  const dispatch = useDispatch();


  const logout = () => {
    // dispatch(signout());
  }



  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <Link to="/myprofile">
          <div
            style={{ marginLeft: 10 }}
          >
              <img
                src={Profilepiclogo}
                style={{
                  height: 22,
                  width: 22,
                  marginBottom: "3px",
                  marginRight: "4px",
                }}
                alt="Shopisthan Logo"
              />
              <span style={{ fontSize: 15 }}> {auth.user.name}</span>
          </div>
          </Link>
        }
        menus={[
          { label: "Edit Profile", href: "/editprofile", icon: null },
          {
            label: "Orders",
            href: "/Orderpage",
            icon: null,
          },
          { label: "Create Store", href: "/storeForm", icon: null,  },
          { label: "Logout", href: "", icon: null,onClick: logout  },
          { label: "Store Dashboard", href: "/storeDashboard", icon: null,  },
        ]}
      />
    );
  };
  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <li className="PrimaryNav-loggedOutOption-3xV">
            {/* <Link
            > */}
              <div className="PrimaryNav-a11yButtonWrap-23Z">
              {/* <Link to='/Signin'>  */}
              <button className="Btn-button-BGn Btn-primary-1H3 Btn-normal-hI4 js-adobeid-signup e2e-PrimaryNav-signup PrimaryNav-a11yButton-2Cl"
               onClick = {()=>setShowLoginModal(true)}
              >
                  <div className="Btn-labelWrapper-1jS">
                    <div className="Btn-label-1Zf e2e-Btn-label"> Log In</div>
                  </div>
                </button>
              {/* </Link> */}
                <span className="PrimaryNav-a11yButtonHelper-3Vx"></span>
              </div>
            {/* </Link> */}
          </li>
        }
        menus={[{ label: "Shopisthan About us", href: "", icon: null }]}
        firstMenu={
          <div className="firstmenu">
            <span>New Customer?</span>
            <button
              style={{ color: "#2874f0" }}
              onClick = {() => setShowSigupModal(true) }
            >
              Sign Up
            </button>
          </div>
        }
      />
    );
  };

  return (
    <>
      <nav className="navbar">
        <h3 className="logo">
          <li className="PrimaryNav-coreNavigationItem-236 PrimaryNav-home-2zH">
            <a href="/" className="PrimaryNav-coreNavigationLink-2uv">
              <div className="PrimaryNav-logoWrap-564">
                <span>Shopisthan</span>
              </div>
            </a>
          </li>
        </h3>
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
        >
          <Link className="cart" to="/">
            <a className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-jobs">
              <h3 className="PrimaryNav-coreNavigationLabel-3rj">
                <div class="link-background">
                  <img src={Homeicon} className="homepagenavbar-icon" />
                  <a href="" class="middle">
                    Home
                  </a>
                </div>
              </h3>
            </a>
          </Link>
          <Link className="cart" to="/ExploreStore">
            <a className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-jobs">
              <h3 className="PrimaryNav-coreNavigationLabel-3rj">
                <div class="link-background">
                  <img src={Storeicon} className="homepagenavbar-icon" />
                  <a href="" class="middle">
                    Store
                  </a>
                </div>
              </h3>
            </a>
          </Link>
          <Link className="cart" to="/favorite">
            <a className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-jobs">
              <h3 className="PrimaryNav-coreNavigationLabel-3rj">
                <div class="link-background">
                  <img src={Wishlisticon} className="homepagenavbar-icon" />
                  <a href="" class="middle">
                    Favorite
                  </a>
                </div>
              </h3>
            </a>
          </Link>
          <Link className="cart" to="/cart">
            <a className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-jobs">
              <h3 className="PrimaryNav-coreNavigationLabel-3rj">
                <div class="link-background">
                  <img src={Carticon} className="homepagenavbar-icon" />
                  <a href="" class="middle">
                    Cart
                  </a>
                </div>
              </h3>
            </a>
          </Link>
        </ul>
        <div className="PrimaryNav-signup-Yf6">
          <ul className="PrimaryNav-loggedOutOptions-1SQ">
            {auth.authenticate ? renderLoggedInMenu(): renderNonLoggedInMenu() }
          </ul>
        </div>
        <button
          onClick={() => setIsMobile(!isMobile)}
          className="mobile-menu-icon"
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <li className="fas fa-bars"></li>
          )}
        </button>
      </nav>
{/* 
    <Signin 
      Modal
      show={showLoginModal}
      handleclose={()=>setShowLoginModal(false)}
    /> */}
{/* 
     <Signup
      Modal
      show={showSigupModal}
      handleclose={()=>setShowSigupModal(false)}
    /> */}
    </>
  );
};

export default Navigationbar;
