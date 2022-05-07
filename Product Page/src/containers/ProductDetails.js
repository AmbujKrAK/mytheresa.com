import React, { useEffect,useRef } from "react";
import axios from "axios";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
import { Info } from "./info";

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <button onClick={onClick}className="sizebtn">Chose Your Size  <i class="fi fi-rr-angle-small-right"></i></button>
                <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="#">IT- 46 / S</a>
            </li>
            <li>
              <a href="#">IT- 48 / M</a>
            </li>
            <li>
              <a href="#">IT- 50 / L</a>
            </li>
            <li>
              <a href="#">IT- 52 / XL --Add to wishlist</a>
            </li>
          </ul>
        </nav>
       
                <br/><button className="addbtn">ADD TO SHOPPING BAG</button>
                <br/><button className="wishbtn">ADD TO WISHLIST  <i style={{color:"gray"}} class="fi fi-rr-star"></i></button>
                <p style={{color:"black",marginTop:"10px", fontFamily:"monospace"}}><span style={{ fontFamily:"monospace",fontWeight:"bold"}}>Free shipping</span> on all orders for a limited time only</p>
                <br/>
                <p style={{ color:"black",fontFamily:"monospace",fontWeight:"bold"}}><i class="fi fi-rr-truck-moving"></i>Shooping Today</p>
                <p style={{fontFamily:"monospace"}}>If placed within the next 3.5 hours and 25 minutes, your order will be shipped today. i</p>
                
                {/* <h3 className="ui brown block header">{category}</h3> */}
                <Info/>
                <i className="fi fi-brands-twitter"></i>
               
              <img className="insta" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/CIS-A2K_Instagram_Icon_%28Black%29.svg/2048px-CIS-A2K_Instagram_Icon_%28Black%29.svg.png"/>
              <img className="twitter" src="https://image.similarpng.com/very-thumbnail/2020/05/Icon-Twitter-PNG.png"/>
              <img className="pint" src="https://i.pinimg.com/originals/fd/24/fe/fd24fe4adfd1e7d0ca36bc476b6b5005.png"/>
             
                {/* <p>{description}</p> */}
                {/* <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div> */}
              </div>
            </div>
          </div>
         
        </div>
      )}
      
      
    </div>
  );
};

export default ProductDetails;
