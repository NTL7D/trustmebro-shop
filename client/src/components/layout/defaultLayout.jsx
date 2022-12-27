import Header from "./headers/Header";
import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";

function DefaultLayout({ children }) {
    return (
        <div className='App'>
            <Header />
            {children}
            <MessengerCustomerChat
                pageId='102236649425054'
                appId='1233695687219907'
            />
        </div>
    );
}

export default DefaultLayout;
