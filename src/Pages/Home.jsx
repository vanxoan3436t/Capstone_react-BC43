import React, {  useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { history } from '../index';
import { getAllProductActionApi } from '../redux/reducer/productReducer';
import { PRODUCT, saveStorageJSON } from '../util/config';

export default function Home() {
	const { arrProduct } = useSelector(state => state.productReducer);
	const dispatch = useDispatch();
	const getProductApi = () => {
		const action = getAllProductActionApi();
		dispatch(action);
	}

	useEffect(() => {
		getProductApi();
	}, [])

	return (
		<div className='container '>



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