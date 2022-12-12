import Header from "./headers/Header";
import React from "react";

function DefaultLayout({ children }) {
    return (
        <div className='App'>
            <Header />
            {children}
        </div>
    );
}

export default DefaultLayout;
