import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { history } from '../index';
import { addCartsAction, getDetailActionApi } from '../redux/reducer/productReducer';
import { ARR_CARTS_LOCAL, TOTAL_CART, saveStorageJSON } from '../util/config';

export default function Detail() {
    const arrCarts = useSelector(state => state.productReducer.arrCarts);
    const proDetail = useSelector(state => state.productReducer.proDetail);
    const keyword = useParams()
    const dispatch = useDispatch();
    let newProDetail = { ...proDetail, numberCart: 1}
    const [number, setNumber] = useState(1)
    const getDetailApi = () => {
        const action = getDetailActionApi(keyword.id);
        dispatch(action);
    }
    const renderSizeProDetail = () => {
        if (newProDetail) {
            return newProDetail?.size?.map((value, index) => {
                return <button className='btn btn-size' key={index} >{value}</button>
            })
        }
        return
    }
    const renderRelatedProducts = () => {
        if (newProDetail) {
            return newProDetail?.relatedProducts?.map((value, index) => {
                return <div key={index} className="col-12 col-md-6 col-lg-4 mb-5 card-item">
                    <div className="card" style={{ cursor: 'pointer' }} onClick={() => {
                        history.push(`/detail/${value.id}`)
                    }}>
                        <img src={value.image} alt="..." />
                        <div className="card-body">
                            <h5>{value.name}</h5>
                            <i> {value.shortDescription.length > 50 ? value.shortDescription.substr(0, 50) + '...' : value.shortDescription}</i>
                            <div className='rating-button'>
                                <button className='btn' onClick={() => {
                                    history.push(`/detail/${value.id}`)
                                }}>
                                    Buy now </button>
                                <span className='price'> {value.price}$</span>
                            </div>
                        </div>
                    </div>
                </div>
            })
        }
    }

    const addToCart = () => {
        newProDetail.numberCart = number
        newProDetail = { ...newProDetail, numberCart: newProDetail.numberCart}
        const action = addCartsAction(newProDetail)
        dispatch(action)
        saveStorageJSON(TOTAL_CART, action.payload.numberCart)
    }

    useEffect(() => {
        getDetailApi()
        saveStorageJSON(ARR_CARTS_LOCAL, arrCarts)
    }, [keyword.id, arrCarts, number])

    return (
        <div className="detail">
            <section className="detail-card container">
                <div className="detail-card-left" >
                    <img src={newProDetail.image} alt="..." />
                </div>
                <div className="detail-card-right" >
                    <h2> {newProDetail.name}</h2>
                    <p>
                        {newProDetail.description}
                    </p>
                    <h4>Available size</h4>
                    <div className="shoes-size" >
                        {renderSizeProDetail()}
                    </div>
                    <div className="price">
                        <span>Price: <span>{newProDetail.price * number}$</span></span>
                    </div>
                    <div className="shoes-quantity">
                        <button className="btn btn-plus" onClick={() => {
                            setNumber(number + 1);
                            if (number === 10) {
                                alert('có tiền không mà mua nhiều thế')
                            }
                        }}>+</button>
                        <span className='quantily-number'>{number}</span>
                        <button className="btn btn-minus" onClick={() => {
                            setNumber(number - 1);
                            if (number < 1) {
                                alert('mua giúp shop 1 cái đi please!')
                                return setNumber(1)
                            }

                        }}>-</button>
                    </div>
                    <button className="btn btn-add-to-cart" onClick={() => {
                        addToCart();
                    }}>
                        <NavLink >Add to cart</NavLink>
                    </button>
                    <button className="btn btn-main-red" onClick={() => {
                      
                    }}>
                        <NavLink >Buy now</NavLink>
                    </button>
                </div>


            </section>

            <section className="related-products">
                <div className="container list-product">
                    <h2 className="title-related">-Related Products-</h2>
                    <div className='row'>
                        {renderRelatedProducts()}
                    </div>

                </div>

            </section >
        </div >
    )

}