import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../detail_folder/scss/index_detail.scss'
import { NavLink } from 'react-router-dom'

export class Detail extends Component {
    render() {
        return (
            <div>
                <section class="carousel">
                    <div class="container">
                        <div class="d-flex">
                            <div class="pics" id="image00">
                                <img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..."/>

                            </div>

                            <div class="title" id="title00">
                                <h1>Product Name</h1>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores pariatur sequi esse ducimus veritatis aspernatur totam inventore, tempore rem impedit illum qui a quae aperiam officiis, error repellat sunt nulla! ( Thuộc tính Description)
                                </p>
                                <h2>Available size</h2>

                                <div class="shoes-size" >
                                    <button class="size-38" id="size-numb-38" value="38">38</button>
                                    <button class="size-39" id="size-numb-39" value="39">39</button>
                                    <button class="size-40" id="size-numb-40" value="40">40</button>
                                    <button class="size-41" id="size-numb-41" value="41">41</button>
                                    <button class="size-42" id="size-numb-42" value="42">42</button>
                                </div>

                                <div class="prices">
                                    <p id="get-price">85</p>
                                    <p>$</p>
                                </div>

                                <div class="shoes-quantity">
                                    <button class="btn-plus" id="btn-plus">
                                        <i class="fa fa-plus"></i>
                                    </button>
                                    <p id="quantity">1</p>
                                    <button class="btn-plus" id="btn-minus">
                                        <i class="fa fa-minus"></i>
                                    </button>
                                </div>


                                <button class="btn-add-to-cart">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="products">
                    <div class="container">
                        <h3 class="title">-Related Products-</h3>
                        <div class="list-item" id="extra-relatedSP">
                            <div class="col col-2">
                                <div class="card item-1" id="related-item-1">
                                    <img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..." />

                                    <div class="card-body">
                                        <div class="name-price">
                                            <h1 class="name">
                                                Adidas Prophere
                                                <br />
                                                <i>Short descript</i>
                                            </h1>
                                        </div>
                                        <div class="rating-button">
                                            <button class="btn-buy">
                                                <NavLink to='/'>Buy now</NavLink>
                                            </button>
                                            <p class="price">85$</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col col-2">
                                <div class="card item-1" id="related-item-1">
                                    <img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..." />

                                    <div class="card-body">
                                        <div class="name-price">
                                            <h1 class="name">
                                                Adidas Prophere
                                                <br />
                                                <i>Short descript</i>
                                            </h1>
                                        </div>

                                        <div class="rating-button">
                                            <button class="btn-buy">
                                                <NavLink to='/'>Buy now</NavLink>

                                            </button>
                                            <p class="price">85$</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col col-2">
                                <div class="card item-1" id="related-item-1">
                                    <img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..." />

                                    <div class="card-body">
                                        <div class="name-price">
                                            <h1 class="name">
                                                Adidas Prophere
                                                <br />
                                                <i>Short descript</i>
                                            </h1>
                                        </div>

                                        <div class="rating-button">
                                            <button class="btn-buy">
                                                <NavLink to='/'>Buy now</NavLink>

                                            </button>
                                            <p class="price">85$</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col col-2">
                                <div class="card item-1" id="related-item-1">
                                    <img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..." />

                                    <div class="card-body">
                                        <div class="name-price">
                                            <h1 class="name">
                                                Adidas Prophere
                                                <br />
                                                <i>Short descript</i>
                                            </h1>
                                        </div>

                                        <div class="rating-button">
                                            <button class="btn-buy">
                                                <NavLink to='/'>Buy now</NavLink>

                                            </button>
                                            <p class="price">85$</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col col-2">
                                <div class="card item-1" id="related-item-1">
                                    <img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..." />

                                    <div class="card-body">
                                        <div class="name-price">
                                            <h1 class="name">
                                                Adidas Prophere
                                                <br />
                                                <i>Short descript</i>
                                            </h1>
                                        </div>

                                        <div class="rating-button">
                                            <button class="btn-buy">
                                                <NavLink to='/'>Buy now</NavLink>

                                            </button>
                                            <p class="price">85$</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col col-2">
                                <div class="card item-1" id="related-item-1">
                                    <img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..." />

                                    <div class="card-body">
                                        <div class="name-price">
                                            <h1 class="name">
                                                Adidas Prophere
                                                <br />
                                                <i>Short descript</i>
                                            </h1>
                                        </div>

                                        <div class="rating-button">
                                            <button class="btn-buy">
                                                <NavLink to='/'>Buy now</NavLink>

                                            </button>
                                            <p class="price">85$</p>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)