import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../detail_folder/scss/index_detail.scss'
import { NavLink } from 'react-router-dom'
import { history } from '../index';
import {  getDetailActionApi } from '../redux/reducer/productReducer';
import { PRODUCT, getStorageJSON } from '../util/config';


export default function Detail() {
    const proDetail = useSelector(state => state.productReducer.proDetail);
    const dispatch = useDispatch();
    console.log('proDetail.id', proDetail.id)
    const detail = getStorageJSON(PRODUCT)
    const getDetailApi = (id) => {
        const action = getDetailActionApi(detail.id)//getDetailActionApi(id) ?
        dispatch(action);

    }
    const getNewDetail = (id) => {
        const action = getDetailActionApi(id)
        dispatch(action);

    }

    const [quantily, setQuantily] = useState(1)
    
    useEffect(() => {
        getDetailApi()

    }, [])

    return (
        <div>

            <section className="carousel">
                <div className="container">
                    <div className="d-flex">
                        <div className="pics" >
                            <img src={proDetail.image} alt="..." />
                        </div>
                        <div className="title" id="title00">
                            <h1>   {proDetail.name}</h1>
                            <p>
                                {proDetail.description}
                            </p>
                            <h2>Available size</h2>
                            <div className="shoes-size" >

                                {/* {proDetail.size.map((value,index)=> {
                                 return <button key={index}>{value}</button>
                                })} */}
                                {proDetail.size}
                            </div>
                            <div className="prices">
                                <p id="get-price">{proDetail.price} $</p>

                            </div>
                            <div className="shoes-quantity">
                                <button className="btn-plus fs-4" id="btn-plus" onClick={() => {
                                    setQuantily(quantily + 1);
                                    if (quantily === 10) {
                                        alert('có tiền không mà mua nhiều thế')
                                    }
                                }}>+</button>
                                <p id="quantity">{quantily}</p>
                                <button className="btn-plus fs-4" id="btn-minus" onClick={() => {

                                    setQuantily(quantily - 1);
                                    if (quantily < 1) {
                                        alert('mua giúp shop 1 cái đi please!')
                                        return setQuantily(1)
                                    }

                                }}>-</button>
                            </div>
                            <button className="btn-add-to-cart" onClick={() => {
                                history.push('/carts')
                            }}>
                                <NavLink >Add to cart</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="products">
                <div className="container">
                    <h3 className="title">-Related Products-</h3>
                    <div className="list-item" id="extra-relatedSP">
                        <div className="col col-2 mb-5" >
                            <div className="card item-1" id="related-item-1">
                                <img src={proDetail.image} alt="..." />
                                <div className="card-body">
                                    <div className="name-price">
                                        <h1 className="name">
                                            {proDetail.name}
                                            <br />
                                            <i> {proDetail.shortDescription}</i>
                                        </h1>
                                    </div>
                                    <div className="rating-button">
                                        <button className=" btn-buy" onClick={() => {
                                            history.push(`/detail/${proDetail.id}`)
                                            getNewDetail(proDetail.id)
                                        }}>
                                            Buy now
                                        </button>
                                        <p className="price"> {proDetail.price}$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* {proDetail.relatedProducts.map((value) => {
                            return <div className="col col-2 mb-5" key={value.id}>
                                <div className="card item-1" id="related-item-1">
                                    <img src={value.image} alt="..." />
                                    <div className="card-body">
                                        <div className="name-price">
                                            <h1 className="name">
                                                {value.name}
                                                <br />
                                                <i> {value.shortDescription}</i>
                                            </h1>
                                        </div>
                                        <div className="rating-button">
                                            <button className=" btn-buy" onClick={() => {
                                                history.push(`/detail/${value.id}`)
                                                getNewDetail(value.id)
                                                saveStorageJSON(PRODUCT,value)
                                            }}>
                                                Buy now
                                            </button>
                                            <p className="price"> {value.price}$</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        })} */}

                    </div>

                </div>

            </section >
        </div >
    )

}