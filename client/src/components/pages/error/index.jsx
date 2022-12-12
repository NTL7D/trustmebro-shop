import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div>
            <Helmet>
                <title>TrustMeBro - Không tìm thấy</title>
            </Helmet>
            <h2>404 - Không tìm thấy trang cần tìm</h2>

            <Link to='/'>
                <button>Quay lại</button>
            </Link>
        </div>
    );
}

export default ErrorPage;
