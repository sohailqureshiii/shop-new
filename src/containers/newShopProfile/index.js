import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from "../../components/Product";
import "./style.css";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footerr/Footer";

const StoreProfile = (props) => {
  const renderButton = (storeId) => {
    let storeterm = storeId;
    return <div className="Btn-label-1Zf e2e-Btn-label">Follow</div>;
  };

  const renderProduct = () => {
    
    return (
      <div >
        <div className="lkmnjoirkee Galleries-grid-1Bv Galleries-header-14v">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            
        </div>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div id="top-panel" className="slide-panel js-top-panel">
        <div
          tabIndex="0"
          id="site-content"
          className="js-site-content site-content e2e-site-conten"
        >
          <div data-ssr-fetched="true" className="esdfrgh">
            <main className="Profile-root-3Ir Profile-bannerEmpty-3ep e2e-Profile-page-container">
              <div className="ProfileBanner-root-UPy ProfileBanner-hasBanner-1fU Profile-banner-2HT">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/4ed4b944616f6f1b93f621ee1e0c69e8/dbcbb282-b7cb-423f-95b8-a92208da4972_rwc_0x14x3200x349x3200.png?h=8299a70b560a9d72b29b129326e049cc"
                  alt="$translate('profile_banner_image_alt', 'User's profile banner')"
                  className="ProfileBanner-bannerImage-1_4 ProfileBanner-bannerImageLoaded-2N5"
                />
                <div className="ProfileBanner-uploadArea-2g2">
                  <div
                    className="ProfileBanner-uploader-ojO"
                    style={{ display: "none" }}
                  >
                    <div className="ProfileBanner-replaceBanner-3WU">
                      <h4 className="ProfileBanner-promptHeading-2KG">
                        Replace Banner Image
                      </h4>
                      <p className="ProfileBanner-assetSuggestion-3NS">
                        Optimal dimensions 3200 x 410px
                      </p>
                      <div className="ProfileBanner-actionButtons-12p">
                        <button
                          type="button"
                          target="_self"
                          className="Btn-button-BGn Btn-primary-1H3 Btn-normal-hI4 ProfileBanner-actionButton-2cU"
                        >
                          <div className="Btn-labelWrapper-1jS">
                            <div className="Btn-label-1Zf e2e-Btn-label">
                              Replace Image
                            </div>
                          </div>
                        </button>
                        <button
                          type="button"
                          target="_self"
                          className="Btn-button-BGn Btn-transparent-1nm Btn-normal-hI4 ProfileBanner-actionButton-2cU"
                        >
                          <div className="Btn-labelWrapper-1jS">
                            <div className="Btn-label-1Zf e2e-Btn-label">
                              Remove
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="ProfileBanner-cropper-FH0">
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="Profile-wrap-3mj">
                <div className="ProfileCard-root-3R2 Profile-profileCard-Ljj">
                  <div className="ProfileCard-header-2wU">
                    <div className="Avatar-container-3hA ProfileCard-avatar-oai">
                      <div
                        className="Tooltip-wrapper-1-L Tooltip-responsive-62L Avatar-tooltipOverride-9FU"
                        style={{ cursor: "auto" }}
                      >
                        <span>
                          <div
                            tabIndex="0"
                            style={{ height: "122px", width: "122px" }}
                          >
                            <div>
                              <div
                                className="Avatar-avatar-1-h"
                                style={{ height: "110px", width: "110px" }}
                              >
                                <img
                                  src="https://mir-s3-cdn-cf.behance.net/user/115/37f6c150416365.605f800371d72.png"
                                  alt="User's avatar"
                                  srcset="https://mir-s3-cdn-cf.behance.net/user/50/37f6c150416365.605f800371d72.png 50w, https://mir-s3-cdn-cf.behance.net/user/100/37f6c150416365.605f800371d72.png 100w, https://mir-s3-cdn-cf.behance.net/user/115/37f6c150416365.605f800371d72.png 115w, https://mir-s3-cdn-cf.behance.net/user/138/37f6c150416365.605f800371d72.png 138w, https://mir-s3-cdn-cf.behance.net/user/230/37f6c150416365.605f800371d72.png 230w, https://mir-s3-cdn-cf.behance.net/user/276/37f6c150416365.605f800371d72.png 276w"
                                  sizes="115px"
                                  className="AvatarImage-avatarImage-3uu Avatar-root--Wh"
                                ></img>
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h1 className="ProfileCard-userFullName-3jr">
                      Apple Store
                    </h1>
                    <div className="ProfileCard-userDetails-3KG">
                      <p className="ProfileCard-line-3KX e2e-Profile-company">
                        Electonics
                      </p>
                      <p className="ProfileCard-line-3KX e2e-Profile-company"></p>
                      {/* !----- */}
                      <p className="ProfileCard-line-3KX ProfileCard-anchor-3cx ProfileCard-lineText-3DC">
                        <a className="ProfileCard-anchor-3cx">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-4808 -20688 14.286 20"
                            class="ProfileCard-locationIcon-3Po"
                          >
                            <g>
                              <path d="M-4800.857-20688a7.143 7.143 0 0 0-7.143 7.143c0 5.714 7.143 12.857 7.143 12.857s7.143-7.143 7.143-12.857a7.142 7.142 0 0 0-7.143-7.143zm0 10a2.857 2.857 0 1 1 2.857-2.859 2.858 2.858 0 0 1-2.857 2.859z"></path>
                            </g>
                          </svg>
                          <span className="e2e-Profile-location">
                            California USA
                          </span>
                        </a>
                      </p>
                    </div>
                    <div className="ProfileCard-userInteractions-1W1 ProfileCard-buttons-ZNH ProfileCard-userFollowActions-3eh ProfileCard-mediumLargeBtn-fW8 ProfileCard-noDesktopNotification-2ya">
                      {/* !----- */}
                      <div className="FollowButton-root-VgV ProfileCard-interactionButton-1gk ProfileCard-followButton-1N4 ProfileCard-follow-39e">
                        <button
                          type="button"
                          className="Btn-button-BGn Btn-primary-1H3 Btn-mediumLarge-1uo ProfileCard-buttonWrapper-2kh"
                        >
                          <div className="Btn-labelWrapper-1jS ProfileCard-buttonLabel-2_O">
                            <div className="Btn-icon-flr Btn-leading-29d">
                              <svg
                                viewBox="0 0 18 18"
                                xmlns="http://www.w3.org/2000/svg"
                                class="FollowButton-followMark-6kv"
                              >
                                <path d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm5,8.5a.5.5,0,0,1-.5.5H10v3.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5V10H4.5A.5.5,0,0,1,4,9.5v-1A.5.5,0,0,1,4.5,8H8V4.5A.5.5,0,0,1,8.5,4h1a.5.5,0,0,1,.5.5V8h3.5a.5.5,0,0,1,.5.5Z"></path>
                              </svg>
                            </div>
                            {renderButton()}

                            {/* <div className="Btn-label-1Zf e2e-Btn-label"
                              //  onClick = 
                              //       {
                              //         ()=> follow(store._id)
                              //       }
                               
                              >
                                Follow
                              </div> */}
                            {/* !--- */}
                          </div>
                        </button>
                      </div>
                    </div>
                    {/* !------ */}
                    {/* !------ */}
                  </div>
                  {/* !---- */}
                  <div className="UserInfo-root-2QU e2e-UserInfo-user-info ProfileCard-userInfoSidebar-fsw">
                    {/* !----- */}
                    <div className="UserInfo-infoBlockRow-1xR">
                      <div className="UserInfo-column-TMV">
                        <table className="UserInfo-userStats-cMw">
                          <tbody>
                            <tr className="UserInfo-statRow-Erw">
                              <p className="UserInfo-bioHeader-fYW">
                                Products
                              </p>
                              <td className="hddnddkdk">
                                <a >
                                  {" "}
                                  207
                                </a>
                              </td>
                            </tr>
                            <tr className="UserInfo-statRow-Erw">
                              <p className="UserInfo-bioHeader-fYW">
                                followers
                              </p>
                              <td className="hddnddkdk">
                                <a >
                                  {" "}
                                  60,12
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="UserInfo-infoBlockRow-1xR" style={{paddingTop:'10px',padding:'3px'}}>
                        <div className="UserInfo-column-TMV">
                          <p className="UserInfo-bioHeader-fYW">About Us</p>
                          <div className="UserInfo-bio-YNh">
                            <div>
                              <div className="ReadMore-inline-3yb">
                                NOSSA is a creative independent agency whose
                                mission is to make brands closer to people. We
                                create interesting ideas, whether digital,
                                traditional or otherwise. A brand that is OURS
                                ('NOSSA' in Portuguese) is also the brand of the
                                client, of the agency, but mainly of the
                                consumer. A NOSSA é uma agê…
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span style={{fontWeight:'bold'}}>Report Store</span>                
                      </div>
                      <span style={{fontSize:'14px'}}>Since 1990</span>
                    </div>
                  </div>
                </div>
                <div className="Profile-profileContents-3cP">
                  <div>
                    <div className="Profile-tabControl-wVx .Profile-tab-3cJ.Profile-active-cBh.Profile-hireMeCTA-2c2 ">
                      <span
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#cecece",
                          fontsize: "px",
                          lineHeight: 2,
                          marginRight: "1000px",
                          color: "black",
                          height: "100%",
                          fontsize: "18px",
                          padding: "10px",
                        }}
                      >
                        Products
                      </span>
                    </div>
                  </div>
                  <div className="Profile-tabs-DeN Profile-transitionBackwards-1fh">
                  {renderProduct()}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default StoreProfile;
