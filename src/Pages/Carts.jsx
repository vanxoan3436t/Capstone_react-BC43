//rafce
import React from 'react'

const Carts = () => {
  return (
    <div className='carts'>
      <h2>Carts</h2> <hr />
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>  <i className="fa-solid fa-check"></i></th>
            <th> id </th>
            <th>  img</th>
            <th> name</th>
            <th>   price</th>
            <th>quantily </th>
            <th>   total</th>
            <th> action </th>
          </tr>
        </thead>
        <tbody>
          <td>  <i className="fa-solid fa-check"></i></td>
          <td> id </td>
          <td>  <img src="https://i.pravatar.cc?u=57" alt="" style={{ width: '60px' }} /></td>
          <td>Product 1</td>
          <td>   </td>
          <td>

            <button className='btn btn-main'>+</button>
            <span >1</span>
            <button className='btn btn-main'>-</button>
          </td>
          <td>1000$</td>
          <td>
            <button className='btn btn-main'>EDIT</button>
            <button className='btn btn-danger'>DELETE</button>     <br />
            <button className='btn btn-warning'>SUBMIT ODER</button>
          </td>
        </tbody>
      </table>
    </div>
  )
}

export default Carts