import React, {  } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { getProfileActionApi } from '../redux/reducer/userReducer';
import { useEffect } from 'react';

const Carts = (props) => {
  const { userProfile } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const getProfileApi = () => {
    const action = getProfileActionApi();
    dispatch(action);
  }
  useEffect(() => {
    getProfileApi();

  }, [])
 
    return (
      <div className='carts container-fluid'>
        <h2>Carts</h2> 

        <table className='table table-hover'>
       
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
            <tr>
              <th><input type="checkbox" /></th>
              <th>id</th>
              <th><img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="" style={{ width: '60px' }} /></th>
              <th>Product 1</th>
              <th></th>
              <th>
              <button className='btn btn-plus'><i className='fa fa-plus'></i></button>
              <span className='quantily-number'> 1 </span>
                <button className='btn btn-minus'><i className='fa fa-minus'></i></button>
              </th>
              <th>1000$</th>
              <th>
                <button className='btn btn-table-edit'>EDIT</button>
                <button className='btn btn-table-delete'>DELETE</button>
                <br />
                <button className='btn  btn-table-submit mt-2'>Submit Order</button>

              </th>
            </tr>
            <tr>
              <th><input type="checkbox" /></th>
              <th>id</th>
              <th><img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="" style={{ width: '60px' }} /></th>
              <th>Product 1</th>
              <th></th>
              <th>
              <button className='btn btn-plus'><i className='fa fa-plus'></i></button>
                <span className='quantily-number'> 1 </span>
                <button className='btn btn-minus'><i className='fa fa-minus'></i></button>
              </th>
              <th>1000$</th>
              <th>
              <button className='btn btn-table-edit'>EDIT</button>
                <button className='btn btn-table-delete'>DELETE</button>
                <br />
                <button className='btn btn-table-submit mt-2'>Submit Order</button>

              </th>
            </tr>
          </tbody>


        </table>
      </div>
    )
  }


  export default Carts