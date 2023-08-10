import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { history } from '../../index';
import { getAllProductActionApi } from '../../redux/reducer/productReducer';
import { PRODUCT, saveStorageJSON } from '../../util/config';
import CarouselHome from './Carousel';
import ListCard from './ListCard';

export default function Home() {
	const dispatch = useDispatch();
	const getProductApi = () => {
		const action = getAllProductActionApi();
		dispatch(action);
	}

	useEffect(() => {
		getProductApi(); 
	}, [])

	return (<>
			<CarouselHome />
		<ListCard/>
	
		</>
	)
}