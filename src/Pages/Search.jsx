//rafce
import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <form >
        <p className='p-main'>Search</p>
        <div className="form-group d-flex">

          <input className='form-control' type="text" placeholder='product name...' name='productname' />
          <button className='btn btn-main'>Search</button>
        </div>
      </form>

      <h2>Search result</h2>
      <div className="form-group">
        <p className="p-main">Price</p>
        <input type="text" placeholder='decrease' className='form-control' />

        <input type="text" placeholder='ascending' className='form-control' />
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card">
            <img src="https://i.pravatar.cc/?u=94" alt="" />
            <div className="card-body">
              <p>Name</p>
              <p>descript...</p>

            </div>
            <div className="card-footer">
              <span>Buy now</span>
              <span>$1000</span>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card">
            <img src="https://i.pravatar.cc/?u=94" alt="" />
            <div className="card-body">
              <p>Name</p>
              <p>descript...</p>

            </div>
            <div className="card-footer">
              <span>Buy now</span>
              <span>$1000</span>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card">
            <img src="https://i.pravatar.cc/?u=94" alt="" />
            <div className="card-body">
              <p>Name</p>
              <p>descript...</p>

            </div>
            <div className="card-footer">
              <span>Buy now</span>
              <span>$1000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search