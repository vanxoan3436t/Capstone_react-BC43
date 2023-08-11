//rafce
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'
import { PRODUCT, httpSearch, saveStorageJSON } from '../util/config';
import { history } from '../index';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
const Search = () => {
  const keyRef = useRef('');
  const [keyword, setKey] = useSearchParams();
  const [arrProd, setArrProd] = useState([]);


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
  useEffect(() => {
    const kWord = keyword.get('k');
    if (kWord !== '') {
      getProBykeyword(kWord);
    }
  }, [keyword.get('k')])


  return (
    <div className='search'>
      <div className="search-top container-fluid">
        <div className="">
        <form onSubmit={handleSubmit} >
          <h3 className='tille-search'>Search product</h3>
          <div className="form-group">
            <div className='main-input'>
              <p> <SavedSearchIcon /></p>
              <input className='form-control' type="text" placeholder='product name...' name='productname' onInput={handleChange} />
             
            </div>
            <button type='submit' className=' btn btn-main'><span className='icon-button'><DoubleArrowIcon /></span> <span>Search</span> </button>
          </div>
        </form>

        <div className="form-group search-result">
          <h2 className='title-main'>Search result</h2>
          <h3 className="tille-search">Price</h3>
          <div className="main-input">
            <p><TrendingUpIcon /></p>
            <input type="text" placeholder='decrease' className='form-control' />
            <span className='arrowDrop'><ArrowDropUpIcon /></span>
          </div>
          <div className="main-input">
            <p><TrendingDownIcon /></p>
            <input type="text" placeholder='ascending' className='form-control' />
            <span className='arrowDrop'><ArrowDropDownIcon /></span>
          </div>
        </div>
        </div>
      </div>

      <div className="row container-fluid list-product">
        {arrProd.map((item, index) => {
          return <div className='col-12 col-md-6 col-lg-4 col-xl-3 card-item' key={index}>
            <div className="card">
              <img src={item.image} alt="..." className='card-img' />
              <div className="card-body">
                <h5>{item.name}</h5>
                <p>{item.description.length > 50 ? item.description.substr(0, 50) + '...' : item.description}</p>
                <div className='rating-button'>
                  <button className='btn' onClick={() => {
                    history.push(`/detail/${item.id}`)
                  }}>

                    Buy now </button>
                  <span className='price'> {item.price}$</span>
                </div>
              </div>
            </div>
          </div>

        })}
        <div className="bg-support"></div>
      </div>
    </div>
  )
}
export default Search