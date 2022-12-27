import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { GlobalState } from "./../../../GlobalState";
import ProductItem from "../../utils/item";
import "./style.scss";

function DetailPage() {
    const params = useParams();
    const [detail, setDetail] = useState([]);
    const state = useContext(GlobalState);
    const [products] = state.productAPI.products;
    const getProduct = async () => {
        if (params.id) {
            const res = await axios.get(`/api/products/${params.id}`);
            setDetail(res.data);
        }
    };

    useEffect(() => {
        getProduct();
    }, [params]);

    return (
        <>
            <Helmet>
                (<title>{`TrustMeBro-${detail.name}`}</title>)
            </Helmet>
            <div className='detail' key={detail.id}>
                <img src={detail.Image?.url} alt='' />
                <div className='box'>
                    <div className='row'>
                        <h2>{detail.name}</h2>
                    </div>
                    <h4>id: {detail.id}</h4>
                    <p>Danh mục: {detail.Category?.name}</p>
                    <p>Mô tả: {detail.desc}</p>
                    <span>Giá: {detail.price} đồng</span>
                    <p>Đã bán: {detail.sold}</p>
                    <Link to='cart' className='cart'>
                        Mua ngay
                    </Link>
                </div>
            </div>
            <div>
                <h2>Sản phẩm liên quan:</h2>
                <div className='products'>
                    {products.map((product) => {
                        return detail.Category?.name ? (
                            <ProductItem key={product.id} product={product} />
                        ) : null;
                    })}
                </div>
            </div>
        </>
    );
}

export default DetailPage;
