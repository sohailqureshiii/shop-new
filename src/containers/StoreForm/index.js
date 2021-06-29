import React,{useState} from 'react'
import Navigationbar from "../Navbar";
import { Link } from 'react-router-dom';

const StoreForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



    return (
      <>
       <Navigationbar />
       <div className="CardLayout-Toaster-Container">
            <section className="CardLayout">
              <section className="CardLayout__content">
                <form>
                  <section className="EmailPage__email-field form-group">
                    <div>
                      <label className="spectrum-FieldLabel">
                        Email Address
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel">Password</label>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel">
                        Email Address
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel">Password</label>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel">
                        Email Address
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel">Password</label>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                  </section>
                  <section className="EmailPage__submit mod-submit">
                    <div className="ta-left"></div>
                    <div className="ta-right">
                    <Link to="/Selection">
              
                      <button
                        // onClick={login}
                        className="spectrum-Button spectrum-Button--cta SpinnerButton SpinnerButton--right"
                      >
                        
                        <span className="spectrum-Button-label">Submit</span>
                      
                      </button>
                      </Link>
                    </div>
                  </section>
                </form>
              </section>
            </section>
          </div>
      </>
    )
}

export default StoreForm
