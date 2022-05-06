import { useState, useEffect } from "react";
import { Empty } from "./Empty";
import { IoIosStarOutline, IoMdClose } from "react-icons/io";
import { BsCurrencyEuro, BsPlus, } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import Cookies from 'js-cookie';
import axios from "axios";



import "./cart.css";

export const Cart = () => {

    let _id = Cookies.get("mongooseId")

    const [bag, setbag] = useState([]);
    // const [quant,setquant] =  useEffect()
    useEffect(() => {
        getbagData()
    }, [])
    const getbagData = async () => {
        let response = await axios.get(`http://localhost:3080/cart/${_id}`);
        setbag(response.data)

    }
    const updatebag = async (id, value) => {
        let res = await axios.patch(`http://localhost:3080/cart/${id}`, { "quant": value });
        console.log(res.data, "updated")
        setbag(res.data)
    }
    const deleteItem = async (id) => {
        console.log(id);
        let res = await axios.delete(`http://localhost:3080/cart/${id}`)
        getbagData()
    }
    console.log(bag)
    return <div>
        {
            bag.length !== 0 ? <div>
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
                        {bag.map((e) => {
                            console.log(e.menId, "eee")
                            return <tr style={{ border: "1px solid black" }} key={e._id}>
                                <td className="cardtd1">
                                    <div className="cart-details">
                                        <div>
                                            <img src={e.menId.images.img1} alt="" />
                                        </div>
                                        <div>
                                            <h3>{e.menId.brandName}</h3>
                                            <p>{e.menId.name}</p>
                                            <p>{e.menId.size[0]}</p>
                                            <p>Item No. : {e.menId.itemNo}</p>
                                            <div className="Remove-wishlist">
                                                <IoMdClose size={"1.5em"} color={"#999"} />
                                                <span onClick={() => {
                                                    deleteItem(e._id)
                                                }}>Remove</span>
                                                <IoIosStarOutline size={"1.3em"} color={"#999"} />
                                                <span>Add to wishlist</span>

                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="cardtd2"><p> <BsCurrencyEuro />{e.menId.price}</p></td>
                                <td className="cardtd2" >
                                    <p> <BsPlus size={"1.5em"} onClick={() => {
                                        updatebag(e.menId._id, e.menId.quant + 1)
                                    }} />{e.menId.quant} < BiMinus size={"1.5em"} onClick={() => {
                                        if (e.menId.quant > 1) {

                                            updatebag(e.menId._id, e.menId.quant - 1)
                                        }
                                    }} />  </p></td>
                                <td className="cardtd2"><p><BsCurrencyEuro />{(e.menId.price) * (e.menId.quant)}</p></td>
                            </tr>
                        })}




                    </tbody>
                </table>

            </div> : <Empty />
        }

    </div>
}