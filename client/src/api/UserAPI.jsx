import React, { useState, useEffect } from "react";
import axios from "axios";

function UserAPI(token) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [cart, setCart] = useState([]);

    async function getUser() {
        try {
            const res = await axios.get("/api/auth/info", {
                headers: {
                    Authorization: token,
                },
            });
            setIsLoggedIn(true);
            if (res.data.user.role === "ADMIN") {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
        } catch (err) {
            alert(err.response.data.msg);
        }
    }
    useEffect(() => {
        if (token) {
            getUser();
        }
    }, [token]);

    const addCart = async (product) => {
        if (!isLoggedIn) {
            return alert("Đăng nhập rồi mới được mua");
        }

        const check = cart.every((item) => {
            return item.id !== product.id;
        });

        console.log(check);

        if (check) {
            setCart([...cart, { ...product, quantity: 1 }]);
            try {
                await axios.post(
                    "/api/cart/add",
                    {
                        cart: [...cart, { ...product, quantity: 1 }],
                    },
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                );
            } catch (err) {
                console.log(err.response?.data.msg);
            }
        } else {
            alert("Hàng thêm vô giỏ rồi má");
        }
    };

    return {
        isLogin: [isLoggedIn, setIsLoggedIn],
        isAdmin: [isAdmin, setIsAdmin],
        cart: [cart, setCart],
        addCart: addCart,
    };
}

export default UserAPI;
