import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../detail_folder/scss/index_detail.scss'
import { NavLink } from 'react-router-dom'
import { history } from '../index';
import { getAllProductActionApi, getDetailActionApi } from '../redux/reducer/productReducer';

export default function Detail() {
    const { proDetail } = useSelector(state => state.productReducer.proDetail);
    const dispatch = useDispatch();
    console.log(proDetail)



    const getDetail = () => {
        const action = getDetailActionApi(1)
        dispatch(action);

    }

    useEffect(() => {

        getDetail()
    }, [])

    return (
        <div>
            <section className="carousel">
                <div className="container">
                    <div className="d-flex">
                        <div className="pics" id="image00">
                            <img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..." />
                        </div>
                        <div className="title" id="title00">
                            <h1>Product Name</h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores pariatur sequi esse ducimus veritatis aspernatur totam inventore, tempore rem impedit illum qui a quae aperiam officiis, error repellat sunt nulla! ( Thuộc tính Description)
                            </p>
                            <h2>Available size</h2>
                            <div className="shoes-size">
                                <button className="size-38" id="size-numb-38" value={38}>38</button>
                                <button className="size-39" id="size-numb-39" value={39}>39</button>
                                <button className="size-40" id="size-numb-40" value={40}>40</button>
                                <button className="size-41" id="size-numb-41" value={41}>41</button>
                                <button className="size-42" id="size-numb-42" value={42}>42</button>
                            </div>
                            <div className="prices">
                                <p id="get-price">85</p>
                                <p>$</p>
                            </div>
                            <div className="shoes-quantity">
                                <button className="btn-plus" id="btn-plus">
                                    <i className="fa fa-plus" />
                                </button>
                                <p id="quantity">1</p>
                                <button className="btn-plus" id="btn-minus">
                                    <i className="fa fa-minus" />
                                </button>
                            </div>
                            <button className="btn-add-to-cart">
                                <NavLink to="/carts">Add to cart</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="products">
                <div className="container">
                    <h3 className="title">-Related Products-</h3>
                    <div className="list-item" id="extra-relatedSP">

                        <div className="col col-2">
                            <div className="card item-1" id="related-item-1">
                                <img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..." />
                                <div className="card-body">
                                    <div className="name-price">
                                        <h1 className="name">
                                            Adidas Prophere
                                            <br />
                                            <i>Short descript</i>
                                        </h1>
                                    </div>
                                    <div className="rating-button">
                                        <button className="btn-buy">
                                            <NavLink to="/">Buy now</NavLink>
                                        </button>
                                        <p className="price">85$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-2">
                            <div className="card item-1" id="related-item-1">
                                <img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..." />
                                <div className="card-body">
                                    <div className="name-price">
                                        <h1 className="name">
                                            Adidas Prophere
                                            <br />
                                            <i>Short descript</i>
                                        </h1>
                                    </div>
                                    <div className="rating-button">
                                        <button className="btn-buy">
                                            <NavLink to="/">Buy now</NavLink>
                                        </button>
                                        <p className="price">85$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-2">
                            <div className="card item-1" id="related-item-1">
                                <img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..." />
                                <div className="card-body">
                                    <div className="name-price">
                                        <h1 className="name">
                                            Adidas Prophere
                                            <br />
                                            <i>Short descript</i>
                                        </h1>
                                    </div>
                                    <div className="rating-button">
                                        <button className="btn-buy">
                                            <NavLink to="/">Buy now</NavLink>
                                        </button>
                                        <p className="price">85$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-2">
                            <div className="card item-1" id="related-item-1">
                                <img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..." />
                                <div className="card-body">
                                    <div className="name-price">
                                        <h1 className="name">
                                            Adidas Prophere
                                            <br />
                                            <i>Short descript</i>
                                        </h1>
                                    </div>
                                    <div className="rating-button">
                                        <button className="btn-buy">
                                            <NavLink to="/">Buy now</NavLink>
                                        </button>
                                        <p className="price">85$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-2">
                            <div className="card item-1" id="related-item-1">
                                <img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..." />
                                <div className="card-body">
                                    <div className="name-price">
                                        <h1 className="name">
                                            Adidas Prophere
                                            <br />
                                            <i>Short descript</i>
                                        </h1>
                                    </div>
                                    <div className="rating-button">
                                        <button className="btn-buy">
                                            <NavLink to="/">Buy now</NavLink>
                                        </button>
                                        <p className="price">85$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-2">
                            <div className="card item-1" id="related-item-1">
                                <img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..." />
                                <div className="card-body">
                                    <div className="name-price">
                                        <h1 className="name">
                                            Adidas Prophere
                                            <br />
                                            <i>Short descript</i>
                                        </h1>
                                    </div>
                                    <div className="rating-button">
                                        <button className="btn-buy">
                                        <NavLink to='/detail/1'>Buy now</NavLink>
                                        </button>
                                        <p className="price">85$</p>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                    {/* <div className="row list-item" id="extra-relatedSP"> */}
                    {/* {arrProduct.map((item) => {
                            return <div className='col col-2 mb-5' key={item.id}>
                                <div className="card">
                                    <img src={item.image} alt="..." className='w-100' />
                                    <div className="card-body">
                                        <div className="name-price">
                                            <h1 className="name">
                                                {item.name}
                                                <br />
                                                <i>{item.description.length > 20 ? item.description.substr(0, 20) + '...' : item.description}</i>
                                            </h1>
                                           <h1 className='name'>{item.name}</h1>
                                            <p>{item.description.length > 50 ? item.description.substr(0, 50) + '...' : item.description}</p> 
                                        </div>

                                        <div className='rating-button'>
                                            <button className='btn btn-buy' onClick={() => {
                                                getDetail(item.id);
                                                history.push(`/detail/${item.id}`)

                                            }}>

                                                Buy now </button>
                                            <span className='price'> {item.price}$</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })} */}
                </div>
     
            </section >
        </div >
    )

}

