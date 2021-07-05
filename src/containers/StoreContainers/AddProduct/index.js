import React from "react";
import DashBoard from "../../../components/DashBoard";
import "./style.css";

const StoreAddProduct = () => {
  return (
    <>
      <DashBoard sidebar>
        <header className="mnjhfderyuvswf">
          <div className="njdkjnj MuiToolbar-root MuiToolbar-regular header-toolbar MuiToolbar-gutters">
            <div className="add-prod-hndbdb">
              <div></div>
              <div className="d-flex align-center navbar-header" tabIndex="-1">
                <h2 className="section-text-3">Add New Product</h2>
              </div>
              <div className="header-actions"></div>
            </div>
          </div>
        </header>
        <div
          className="app-layout-content"
          style={{ paddingTop: "20px", paddingBottom: "0px" }}
        >
          <div className="p3222">
            <div className="d-flex">
              <div className="fill-available product-form-wrap">
                <form>
                  <div className="product-information-section card">
                    <h4 className="section-text-5 mb24">Product Information</h4>
                    <section className="EmailPage__email-field form-group">
                    <div>
                      <label className="spectrum-FieldLabel" style={{fontSize:'14px'}}>
                      Product Name *
                      </label>
                      <input
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                        placeholder="Enter Product Name"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel" style={{fontSize:'14px'}}>
                      Product Category *
                      </label>
                      <input
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                        placeholder="Enter Product Category"
                      ></input>
                    </div>
                    <div style={{display:'flex'}}>
                    <div>
                      <label className="spectrum-FieldLabel" style={{fontSize:'14px'}}>
                      Price *
                      </label>
                      <input
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                        placeholder="Enter Price"
                      ></input>
                    </div>
                    <div style={{marginLeft:'50px'}}>
                      <label className="spectrum-FieldLabel" style={{fontSize:'14px'}}>
                      Discounted Price *
                      </label>
                      <input
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                        placeholder="Enter Discounted Price"
                      ></input>
                    </div>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel" style={{fontSize:'14px'}}>
                      Quantity  *
                      </label>
                      <input
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                        placeholder="Enter Quantity"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel" style={{fontSize:'14px'}}>
                      Description  *
                      </label>
                      <input
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                        placeholder="Enter Description"
                      ></input>
                    </div>
                  </section>
                  <div className='d-flex' style={{justifyContent:'flex-end', paddingBottom:'15px'}}>
            <div className='button-group ml16 btn-primary section-text-5 btn-product-new'>
            <div className='btn-text'>Add Product</div>
            </div>
            </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </DashBoard>
    </>
  );
};

export default StoreAddProduct;
