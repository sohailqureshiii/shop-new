import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profilepic from "../../img/profilepic.jpg";
import NavBar from "../../containers/Navbar";
import {
  Modal
} from "../../components/MaterialUI";

/**
 * @author
 * @function EditProfile
 **/

const EditProfile = (props) => {

  const [userEditModal, setUserEditModal] = useState(false);

  const editUser = (e) => {
    setUserEditModal(false);
  };

  const renderUserEditModal = () => {
    return (
      <Modal
        visible={userEditModal}
        handleclose={() => setUserEditModal(false)}
        // onSubmit={editUser}
        modaltitle={`Edit Profile`}
      >

        <section className="CardLayout__content" style={{paddingLeft:'100px'}}>
                <form>
                  <section className="EmailPage__email-field form-group">
                  <div>
                      <label className="spectrum-FieldLabel">
                        First Name
                      </label>
                      <input
                       
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel">
                        Last Name
                      </label>
                      <input
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel">Email</label>
                      <input
                       type="text"
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                  </section>
                  <section className="EmailPage__submit mod-submit">
                    <div className="ta-left"></div>
                    <div className="ta-right">
                      <button
                        onClick={editUser}
                        className="spectrum-Button spectrum-Button--cta SpinnerButton SpinnerButton--right"
                      >
                        <span className="spectrum-Button-label">Submit</span>
                      </button>
                    </div>
                  </section>
                </form>
              </section>
      </Modal>
    );
  };

  return (
    <>
      <NavBar />
      {/* ProfileHEader  starts*/}
      <main className="SCxLW o64aR " role="main" style={{ paddingTop: "55px" }}>
        <div className="v9tJq v9tJq">
          <header className="HVbug">
            <section className="XjzKX">
              <section className="_4dMfM">
                <section className="M-jxE">
                  <img alt="Profile Pic" className="be6sr" src={Profilepic} />
                </section>
              </section>
            </section>
            
            <form>
                  <section className="EmailPage__email-field form-group">
                  <div>
                      <label className="spectrum-FieldLabel">
                        User Name
                      </label>
                      <input
                       
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel">
                         Name
                      </label>
                      <input
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel">Email</label>
                      <input
                       type="text"
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel">Mobile No</label>
                      <input
                       type="text"
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                  </section>
                  <section className="EmailPage__submit mod-submit">
                    <div className="ta-left"></div>
                    <div className="ta-right">
                      <button
                        onClick={editUser}
                        className="spectrum-Button spectrum-Button--cta SpinnerButton SpinnerButton--right"
                      >
                        <span className="spectrum-Button-label">Edit</span>
                      </button>
                    </div>
                  </section>
                </form>
          </header>
          {/* ProfileHEader  ends*/}
        </div>
        {renderUserEditModal()}
      </main>
    </>
  );
};

export default EditProfile;
