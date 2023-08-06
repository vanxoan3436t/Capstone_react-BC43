import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductActionApi } from '../../redux/reducer/productReducer';
import { PRODUCT, saveStorageJSON } from '../../util/config';
import { history } from '../..';
import { Container } from '@mui/material';

function ListCard() {
  const { arrProduct } = useSelector(state => state.productReducer);
	const dispatch = useDispatch();
	const getProductApi = () => {
		const action = getAllProductActionApi();
		dispatch(action);
	}

	useEffect(() => {
		getProductApi();
	}, [])
  return (<div className='container-fluid list-product'>
    <div className='row '>
      <h1>Product Future</h1>
    {arrProduct.map((item) => {
      return <div className='col-12 col-md-6 col-lg-4 col-xl-3 mb-5 card-item' key={item.id}>
        <div className="card">
          <img src={item.image} alt="..." className='w-100 card-img' />
          <div className="card-body">
            <h5>{item.name}</h5>
            <p>{item.description.length > 50 ? item.description.substr(0, 50) + '...' : item.description}</p>
            <div className='rating-button'>
              <button className='btn' onClick={() => {
                history.push(`/detail/${item.id}`)
                saveStorageJSON(PRODUCT, item)
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

export default ListCard