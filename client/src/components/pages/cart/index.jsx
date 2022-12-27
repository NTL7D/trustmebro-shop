import React, { useState, useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./style.scss";
function CartPage() {
    const [total, setTotal] = useState(0);
    const state = useContext(GlobalState);
    const [cart] = state.userAPI.Cart;

    if (cart.length === 0) {
        return (
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 3fr)",
                    gridTemplateRows: "repeat(5, 3fr)",
                }}>
                <div style={{ gridArea: "2 / 2 / 4 / 5" }}>
                    <h2 style={{ fontSize: "3rem", textAlign: "center" }}>
                        Cái giỏ trống trơn
                    </h2>
                    <Link
                        to='/'
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "20px",
                        }}>
                        <h3
                            style={{
                                textAlign: "center",
                                background: "#555",
                                padding: "5px",
                                maxWidth: "400px",
                                width: "100%",
                                textDecoration: "none",
                                color: "#fff",
                            }}>
                            Quay lại
                        </h3>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Helmet>
                <title>TrustMeBro - giỏ hàng</title>
            </Helmet>
            {cart.map((item) => {
                return (
                    <div className='cart-box' key={item.id}>
                        <img src={item.Image?.url} alt='' />
                        <div className='box-detail'>
                            <h2>{item.name}</h2>
                            <h3>{item.price * item.quantity} đồng</h3>
                            <p>{item.desc}</p>
                        </div>
                        <div className='cart-amount'>
                            <button>+</button>
                            <span>{item.quantity}</span>
                            <button>-</button>
                        </div>
                    </div>
                );
            })}
            <div className='cart-total'>
                <h3>Tổng: 0 đồng</h3>
                <Link to='#!'>Thanh toán</Link>
            </div>
        </div>
    );
}

export default CartPage;
