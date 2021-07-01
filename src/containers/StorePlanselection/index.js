import React from 'react'
import './style.css'
import NavBar from "../../components/Navbar";

const Planselection = (props) => {
    return (
        <>
  <NavBar />
        <div style={{paddingTop:'55px'}}>
        <div className="grid pricing__cards">
            <div className='grid__item'>
                <div className='pricing-cards__wrapper pricing-cards pricing-cards--skin-light'>
                <div className='text-center pricing-card--basic pricing-card'>
                    <h2 className='pricing-card__plan-name text-major heading--4'>Basic Shopisthan</h2>
                    <div className="text-center pricing-card-content">
                        <p className='pricing-card__plan-description color-gray-70'>Best for new businesses or online businesses new to in-person selling</p>
                        <div className='pricing-card__monthly-content'>
                            <span className='pricing-card__plan-price heading--1'>
                                <span className='price'>
                                <span className='visuallyhidden'>$29</span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="grid pricing__cards">
            <div className='grid__item'>
                <div className='pricing-cards__wrapper pricing-cards pricing-cards--skin-light'>
                <div className='text-center pricing-card--basic pricing-card'>
                    <h2 className='pricing-card__plan-name text-major heading--4'>Advance Shopisthan</h2>
                    <div className="text-center pricing-card-content">
                        <p className='pricing-card__plan-description color-gray-70'>Best for new businesses or online businesses new to in-person selling</p>
                        <div className='pricing-card__monthly-content'>
                            <span className='pricing-card__plan-price heading--1'>
                                <span className='price'>
                                <span className='visuallyhidden'>$29</span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="grid pricing__cards">
            <div className='grid__item'>
                <div className='pricing-cards__wrapper pricing-cards pricing-cards--skin-light'>
                <div className='text-center pricing-card--basic pricing-card'>
                    <h2 className='pricing-card__plan-name text-major heading--4'>Premium Shopisthan</h2>
                    <div className="text-center pricing-card-content">
                        <p className='pricing-card__plan-description color-gray-70'>Best for new businesses or online businesses new to in-person selling</p>
                        <div className='pricing-card__monthly-content'>
                            <span className='pricing-card__plan-price heading--1'>
                                <span className='price'>
                                <span className='visuallyhidden'>$29</span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Planselection