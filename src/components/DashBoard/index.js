import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

const DashBoard = (props) => {
    return (
       <>

       { 
        props.sidebar ? 
        <div>
         
         <div className="sidebar">
        <div className="sidebar-brand">
          <h1>
            <span className="lab la-accusoft"></span> <span>Shopisthan</span> 
          </h1>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <NavLink to="/storeDashboard" className="active">
                <span class="las la-igloo"></span> <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/storeCustomers" className="active">
                <span class="las la-users"></span> <span>Customers</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/storeProduct" className="active">
                <span class="las la-clipboard-list"></span>{" "}
                <span>Product</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/storeOrder" className="active">
                <span class="las la-shopping-bag"></span> <span>Orders</span>
              </NavLink>
            </li>
            {/* <li>
              <a href="">
                <span class="las la-receipt"></span> <span>Inventory</span>
              </a>
            </li>
            <li>
              <a href="">
                <span class="las la-user-circle"></span> <span>Accounts</span>
              </a>
            </li>
            <li>
              <a href="">
                <span class="las la-clipboard-list"></span> <span>Tasks</span>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
      <div class="main-content">
        <header>
          <h2>
            <label for="nav-toogle">
              <span className="las la-bars"></span>
            </label>
            Dashboard
          </h2>
          {/* <div className="search-wrapper">
            <span className="las la-search"></span>
            <input type="search" placeholder="Seaarch here" />
          </div> */}
          <div className="user-wrapper">
            <img src="" alt="" width="30px" height="30px"></img>
            <div>
              <h4>Store Name</h4>
              <small>User Name</small>
            </div>
          </div>
        </header>

        <main>
           
          
        {props.children}

       
        </main>
              
      </div>
      </div>
      :  props.children
      }
       </>
    )
}

export default DashBoard

 {/* <main>
          <div className="cards">
            <div className="card-single">
              <div>
                <h1>54</h1>
                <span>Customers</span>
              </div>
              <div>
                <span className="las la-users"></span>
              </div>
            </div>
            <div className="card-single">
              <div>
                <h1>79</h1>
                <span>Projects</span>
              </div>
              <div>
                <span className="las la-clipboard-list"></span>
              </div>
            </div>
            <div className="card-single">
              <div>
                <h1>124</h1>
                <span>Orders</span>
              </div>
              <div>
                <span className="las la-shopping-bag"></span>
              </div>
            </div>
            <div className="card-single">
              <div>
                <h1>$6k</h1>
                <span>Income</span>
              </div>
              <div>
                <span className="lab la-google-wallet"></span>
              </div>
            </div>
          </div>
            <div className="recent-grid">
            <div className="projects">
                 <div className="card-header"> 
                  <h2>REcent Projects</h2>
                  <button>
                    Sell all <span className="las la-arrow-right"> </span>
                  </button>
                 </div>

                 <div className="card-body">
                         <tabel>
                         <thead>
                           <tr>
                             <td>
                               Project
                             </td>
                           </tr>
                         </thead>

                         </tabel>
                 </div>
            </div>
            <div className="customers">


            </div>

            </div>
        </main> */}