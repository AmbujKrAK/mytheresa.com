import { useState } from "react";
import { Empty } from "./Empty";
import "./cart.css"
export const Cart = () => {

    const [bag, setbag] = useState([]);
    return <div>
        {
            bag.length === 0 ? <div>
                <p className="ptag-left">YOUR SHOPPING BAG</p>
                <button className="btn-ryt">PROCEED TO CHECKOUT</button>
                <table className="cart-table">
                    <thead>
                        <th></th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ width: "80%" }}>
                                <div className="cart-details">
                                    <div >
                                        <img src="https://img.mytheresa.com/240/240/90/jpeg/catalog/product/c5/P00674241.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h3>GUCCI</h3>
                                        <p>Single-breasted wool blazer</p>
                                        <p>Size: IT- 50 / L</p>
                                        <p>Item No.:P00674241</p>
                                        <div>
                                            <span>Remove</span>
                                            <span>Add to wishlist</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td><p>1,700</p></td>
                            <td><input type="number" name="" id="" /></td>
                            <td><p>1700</p></td>
                        </tr>
                    </tbody>
                </table>

            </div> : <Empty />
        }

    </div>
}