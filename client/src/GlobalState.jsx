import React, { useState, useEffect, createContext } from "react";
import ProductAPI from "./api/ProductAPI";
import UserAPI from "./api/UserAPI";
import axios from "axios";

export const GlobalState = createContext();
export const DataProvider = ({ children }) => {
    const [token, setToken] = useState(false);
    const refreshToken = async () => {
        const res = await axios.get("/api/auth/refreshtoken");
        setToken(res.data?.accesstoken);
    };

    useEffect(() => {
        const firstLogin = localStorage.getItem("firstlogin");
        if (firstLogin) {
            refreshToken();
        }
    }, []);

    const state = {
        token: [token, setToken],
        productAPI: ProductAPI(),
        userAPI: UserAPI(token),
    };
    return (
        <GlobalState.Provider value={state}>{children}</GlobalState.Provider>
    );
};
