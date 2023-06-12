
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Carts extends Component {
  render() {
    return (
      <div className='carts'>
        <h2>Carts</h2> <hr />
        <table className='table table-hover'>
          <thead>
            <tr>
              <th><i className="fa-solid fa-check"></i></th>
              <th>id</th>
              <th>img</th>
              <th>name</th>
              <th>price</th>
              <th>quantily</th>
              <th>total</th>
              <th>action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th><i className="fa-solid fa-check"></i></th>
              <th>id</th>
              <th><img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="" style={{ width: '60px' }} /></th>
              <th>Product 1</th>
              <th></th>
              <th>
                <button className='btn btn-main'><i className='fa fa-plus'></i></button>
                <span> 1 </span>
                <button className='btn btn-main'><i className='fa fa-minus'></i></button>
              </th>
              <th>1000$</th>
              <th>
                <button className='btn btn-main-2'>EDIT</button>
                <button className='btn btn-danger'>DELETE</button>
                <br />

              </th>
            </tr>

          </tbody>


        </table>

        <div style={{ justifyContent: 'flex-end', display: 'flex' }}>
          <button className='btn btn-warning' >SUBMIT ODER</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Carts)