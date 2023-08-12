import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileActionApi } from '../../redux/reducer/userReducer';
import { useEffect } from 'react';
import { clearCartsAction } from '../../redux/reducer/productReducer';
import { ARR_CARTS_LOCAL, saveStorageJSON } from '../../util/config';

const Carts = (props) => {
  const arrCarts = useSelector(state => state.productReducer.arrCarts);
  const [quantily, setQuantily] = useState(0)
  const dispatch = useDispatch();
  const getProfileApi = () => {
    const action = getProfileActionApi();
    dispatch(action);
  }

  const deleteCart = (id) => {
    const action = clearCartsAction(id)
    dispatch(action)
  }
  const renderCarts = () => {
    if (arrCarts.length === 0) {
      return <h2 className='pb-0 mb-0 text-center'>Bạn chưa có sản phẩm nào!</h2>
    } else {
      return <table className='table table-hover'>
        <thead>
          <tr>
            <th><i className="fa-solid fa-check"></i>  </th>
            <th>id</th>
            <th>img</th>
            <th>name</th>
            <th>price</th>
            <th>quantily</th>
            <th>total</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {arrCarts?.map((item, index) => {
            return (<tr key={index}>
              <th><input type="checkbox" /></th>
              <th>{item.id}</th>
              <th><img src={item.image} alt="" style={{ width: '60px' }} /></th>
              <th>{item.name}</th>
              <th>{item.price}</th>
              <th>
                <button className='btn btn-plus' onClick={() => {
              
                }}><i className='fa fa-plus'></i></button>
                <span className='quantily-number'>{item.numberCart}</span>
                <button className='btn btn-minus'><i className='fa fa-minus'></i></button>
              </th>
              <th>{item.priceLater}</th>
              <th>
                <button className='btn btn-table-edit'>EDIT</button>
                <button className='btn btn-table-delete' onClick={() => {
                  deleteCart(item.id)
                }}>DELETE</button>
                <br />
                <button className='btn btn-table-submit mt-2'>Submit Order</button>
              </th>
            </tr>)
          })}
        </tbody>

      </table>


    }
  }
  useEffect(() => {
    getProfileApi();
    saveStorageJSON(ARR_CARTS_LOCAL, arrCarts)
  }, [arrCarts, quantily])

  return (
    <div className='carts container-fluid'>
      <h2>Carts</h2>
      {renderCarts()}
    </div>
  )
}


export default Carts