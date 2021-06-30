import DashBoard from '../../../components/DashBoard'
import React, { useState } from 'react'
import { WhatsappShareButton } from "react-share";
import { WhatsappIcon } from "react-share";
// import { productShareApi } from '../../../urlConfig'
// import Switch from '@material-ui/core/Switch';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';


const StoreProduct = () => {
    return (
      <>
      <DashBoard sidebar>
      <div className="Product__container">


                        
        <div className="Product__singleCard" >
       
            <div className="Product__imageContainer">
                <img className="Product__image" 
                style ={{  "max-width ": "100%",
                     " max-height":" 100%",
                      "object-fit": "contain"}}
                src={""}
                alt="product" />
            </div>
            <div className="Product__detailsContainer">
                <div className="Product__iconFlex">
                    <div className="Product__name">product.name</div>
                    <div className="Product__icons">
                      <WhatsappShareButton
                        // title=product.name
                        separator=" "
                        // url={`${productShareApi}${product.slug}/${product._id}/p`}
                        >
                        <WhatsappIcon logoFillColor="green" round={true} size={30}>
                        </WhatsappIcon>
                        </WhatsappShareButton>
                      
                    </div>
                
                    </div>
                
                <div className="Product__priceFlex">
                <div className="Product__priceTag">Rs. product.price</div>
                
                
                </div>
                <div> product.category.name</div>
                <div>  
                <button
                        onClick = 
                        {()=>
                        // deletePtById(product._id,product.name)
                        "fgre"
                        }
                >Delete</button> 
                 <button
                        onClick = 
                        {()=>
                        // editProductById(product)
                        "Wgwr"
                        }
                >Edit</button> 
                </div>

                {/* <FormGroup>
            
            <FormControlLabel
            // control={<Switch checked={product.outOfStock ==="No" ? false:true} onChange={()=>{toggleChecked(product)}} />}
            // label= {product.outOfStock ==="No" ? "In Stock" : "Out Of Stock"}
            label = "out/in stock"
               />
            </FormGroup> */}
              
                
            </div>
        </div>

        </div>
      </DashBoard>
    

      </>
    )
}

export default StoreProduct
