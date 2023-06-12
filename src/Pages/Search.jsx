//rafce
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import {  useSearchParams } from 'react-router-dom'
import { httpSearch } from '../util/config';
import { history } from '../index';
const Search = () => {
  const keyRef = useRef('');
  const [keyword, setKey] = useSearchParams();
  const [arrProd, setArrProd] = useState([]);
  useEffect(() => {
    const kWord = keyword.get('k');
    if (kWord !== '') {
      getProBykeyword(kWord);
    }
  }, [keyword.get('k')])

  const getProBykeyword = async (key) => {
    const res = await httpSearch.get(`/api/Product?keyword=${key}`)
    setArrProd(res.data.content)
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    keyRef.current = value;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setKey({
      k: keyRef.current
    })
  }


  return (
    <div className='search'>
      <form onSubmit={handleSubmit}>
        <p className='p-main'>Search</p>
        <div className="form-group d-flex">
          <input className='form-control' type="text" placeholder='product name...' name='productname' onInput={handleChange} />
          <button className='btn btn-main'>Search</button>
        </div>
      </form>

      <h2>Search result</h2>
      <div className="form-group">
        <p className="p-main">Price</p>
        <input type="text" placeholder='decrease' className='form-control' />
        <label className="fa-solid fa-caret-down" />
        <input type="text" placeholder='ascending' className='form-control' />

        {/* <label className="fa-solid fa-caret-up" ></label> */}
      </div>

      <div className="row">
        {arrProd.map((item, index) => {
          return <div key={index} className="item-search col-sm-12 col-md-6 col-lg-4">
            <div className="card">
              <img src={item.image} alt="" />
              <div className="card-body">
                <p className='name'>{item.name}</p>
                <p className='desctips'>{item.description.length > 50 ? item.description.substr(0, 50) + '...' : item.description}</p>
              </div>
              <div className="card-footer">
                <span className='buy-now' onClick={() => {
                  history.push(`/detail/${item.id}`)
                }
                }> Buy now</span>
                <span className='price'>${item.price}</span>
              </div>
            </div>
          </div>

        })}
      </div>
    </div>
  )
}
export default Search