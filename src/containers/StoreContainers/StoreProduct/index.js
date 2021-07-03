import React from "react";
import DashBoard from "../../../components/DashBoard";
import Navigationbar from "../../../components/Navbar";
import SeachCompo from "../../../components/SearchComponent";
import ProductTableCompo from "../../../components/Tablecomponent/Product table component";
// import './style.css'

const StoreProduct = () => {
  return (
    <>
      <DashBoard sidebar>
        <div className="lkjhasdrfr">
          <h1 className="order-name-name-order">Product
          <SeachCompo/>
          </h1>
          <ProductTableCompo/>
        </div>
      </DashBoard>


    </>
  );
};

export default StoreProduct;
