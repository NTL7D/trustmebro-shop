// eslint-disable-next-line
import React, { createContext, useState } from "react";

export const GlobalState = createContext();

const DataProvider = ({ children }) => {
    return (
        <GlobalState.Provider value={"cmn"}>{children}</GlobalState.Provider>
    );
};

export default DataProvider;
