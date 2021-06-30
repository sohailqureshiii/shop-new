import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Profilepic from "../../img/profilepic.jpg";
import NavBar from "../Navbar";
import {
  Modal
} from "../../components/MaterialUI";


/**
 * @author
 * @function MyProfile
 **/

const MyProfile = (props) => {

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
            <section className="zwlfE">
              <section className="nZSzr">
                <h2 className="_7Uhw9  fKFb1  yUEEX  KV-D4  fDxY1">
                  user Name : Sohail37
                </h2>
              </section>
            </section>
            <section className="zwlfE">
              <section className="nZSzr">
                <h2 className="_7Uhw9  fKFb1  yUEEX  KV-D4  fDxY1">
                   Name : Sohail Qureshi
                </h2>
              </section>
            </section>
            <section className="zwlfE">
              <section className="nZSzr">
                <h2 className="_7Uhw9  fKFb1  yUEEX  KV-D4  fDxY1">
                  Email Id : Sohail@gmail.com
                </h2>
              </section>
            </section>
            <section className="zwlfE">
              <section className="nZSzr">
                <h2 className="_7Uhw9  fKFb1  yUEEX  KV-D4  fDxY1">
                   Mobile No : 9119449383
                </h2>
              </section>
            </section>
          </header>
          {/* ProfileHEader  ends*/}
        </div>
      </main>
    </>
  );
};

export default MyProfile;
