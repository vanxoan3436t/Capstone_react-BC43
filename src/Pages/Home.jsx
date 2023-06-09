import React, {  useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { history } from '../index';
import { getAllProductActionApi } from '../redux/reducer/productReducer';
import { PRODUCT, saveStorageJSON } from '../util/config';

export default function Home() {
	const { arrProduct } = useSelector(state => state.productReducer);
	const dispatch = useDispatch();
console.log('arrProduct', arrProduct)
	const getProductApi = () => {
		const action = getAllProductActionApi();
		dispatch(action);
	}

	useEffect(() => {
		getProductApi();
	}, [])

	return (
		<div className='container '>
			<div className=' carousel-text'>
				<img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..." />
				<div >
					<h3>Product name</h3>
					<p>Product description</p>
					<button className='btn btn-warning mx-2 text-white' style={{ textDecoration: 'none' }}>
						<NavLink to='/details'>Buy now</NavLink>
					</button>
				</div>
			</div>
			<div className='custom_feature w-50 text-white'>
				<h3>Product Feature</h3>
			</div>

			<div className='row'>
				{arrProduct.map((item) => {
					return <div className='col-12 col-md-6 col-xl-4 custom_shoes mb-5' key={item.id}>
						<div className="card">
							<img src={item.image} alt="..." className='w-100' />
							<div className="card-body">
								<h4>{item.name}</h4>
								<p>{item.description.length > 50 ? item.description.substr(0, 50) + '...' : item.description}</p>
								<div className='rating-button'>
									<button className=' btn-buy' onClick={() => {
										history.push(`/detail/${item.id}`)
										saveStorageJSON(PRODUCT,item)
									}}>

										Buy now </button>
									<span className='price'> {item.price}$</span>
								</div>
							</div>
						</div>
					</div>
				})}

			</div>

		</div>
	)
}