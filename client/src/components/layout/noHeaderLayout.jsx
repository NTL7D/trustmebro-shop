import React from "react";
import Header from "./headers/Header";

function NoHeaderLayout({ children }) {
    return (
        <div className='App'>
            <Header />
            {children}
        </div>
    );
}

export default NoHeaderLayout;
