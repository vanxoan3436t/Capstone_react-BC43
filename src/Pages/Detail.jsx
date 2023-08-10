import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { history } from '../index';
import { getDetailActionApi } from '../redux/reducer/productReducer';

export default function Detail() {
    const keyword = useParams()
    const [quantily, setQuantily] = useState(1)
    const  proDetail  = useSelector(state => state.productReducer.proDetail);


    const dispatch = useDispatch();
    const getDetailApi = () => {
        const action = getDetailActionApi(keyword.id);
        console.log('action.payload', action.payload)
        dispatch(action);

    }

    const renderSizeProDetail = () => {
        if (proDetail) {
            return proDetail?.size?.map((value, index) => {
                return <button className='btn btn-size' key={index} >{value}</button>
            })
        }
        return
    }
    const renderRelatedProducts = () => {
        if (proDetail) {
            return proDetail?.relatedProducts?.map((value, index) => {
                return <div key={index} className="col-12 col-md-6 col-lg-4 mb-5 card-item">
                    <div className="card" >
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

    useEffect(() => {
        getDetailApi()
    }, [keyword.id])

    return (
        <div className="detail">
            <section className="detail-card container">
                    <div className="detail-card-left" >
                        <img src={proDetail.image} alt="..." />
                    </div>
                    <div className="detail-card-right" >
                        <h2> {proDetail.name}</h2>
                        <p>
                            {proDetail.description}
                        </p>
                        <h4>Available size</h4>
                        <div className="shoes-size" >
                            {renderSizeProDetail()}
                        </div>
                        <div className="price">
                            <span>Price: <span>{proDetail.price * quantily}$</span></span>
                        </div>
                        <div className="shoes-quantity">
                            <button className="btn btn-plus"  onClick={() => {
                                setQuantily(quantily + 1);

                                if (quantily === 10) {
                                    alert('có tiền không mà mua nhiều thế')
                                }
                            }}>+</button>
                            <span className='quantily-number'>{quantily}</span>
                            <button className="btn btn-minus"  onClick={() => {

                                setQuantily(quantily - 1);
                                if (quantily < 1) {
                                    alert('mua giúp shop 1 cái đi please!')
                                    return setQuantily(1)
                                }

                            }}>-</button>
                        </div>
                        <button className="btn btn-add-to-cart" onClick={() => {
                            // history.push('/carts')ss
                        }}>
                            <NavLink >Add to cart</NavLink>
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