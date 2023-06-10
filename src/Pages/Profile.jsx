//rafce
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileActionApi } from '../redux/reducer/userReducer';

const Profile = (props) => {
  // const { userProfile } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const getProfileApi = () => {
    const action = getProfileActionApi();
    dispatch(action);
  }

  useEffect(()=>{
   getProfileApi() ;
    
  },[])

const postUpdate = ()=>{
//dựa theo token
}
  return (
    <div className='profile'>
      <h2 className=''>Profile</h2>
      <div className="row">
        <div className="profile-img col-sm-12 col-md-4 col-lg-2 ">
          <img src="https://i.pravatar.cc/?u=94" alt="..." />
        </div>
        <div className="profile-form col-md-8 col-sm-12  col-lg-10">
          <form >
            <div className="row">
              <div className=" col-md-12 col-xl-6">

                <div className="form-group">
                  <p >Email</p>
                  <input className='form-control' type="email" placeholder='email' name='email' />
                </div>

                <div className="form-group">
                  <p >Phone</p>
                  <input className='form-control' type="text" placeholder='phone' name='phone' />
                </div>

              </div>
              <div className="col-md-12 col-xl-6">

                <div className="form-group">
                  <p >Name</p>
                  <input className='form-control' type="text" placeholder='name' name='name' />
                </div>

                <div className="form-group">
                  <p >Password</p>
                  <input className='form-control' type="password" placeholder='password' name='password' />
                </div>

                <div className="form-group gender d-flex justify-content-between">
                  <span >Gender</span>

                  <div className='d-flex justify-content-between'>
                    <input className="form-check-input " id="gender1" name="gender" type="radio" defaultValue={true} />
                    <label htmlFor="gender1">Male</label>
                    <input className="form-check-input" id="gender2" name="gender" type="radio" defaultValue={false} />
                    <label htmlFor="gender2">Female</label>
                  </div>
                  <button className=' btn btn-main' onClick={postUpdate()}>Update</button>
                </div>

              </div>
            </div>
          </form>
        </div>
      </div> <hr />
      <div className="profile-body">
        <div >
          <h3><span>Order history</span> </h3> <h3><span>Favourite</span> </h3>
        </div>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th> id </th>
              <th>img</th>
              <th>name</th>
              <th>price</th>
              <th>quantily </th>
              <th>total</th>
            </tr>
          </thead>
          <tbody>

            <td> id </td>
            <td>  <img src="https://i.pravatar.cc?u=63" alt="" style={{ width: '60px' }} /></td>
            <td>Product 1</td>
            <td>$1000   </td>
            <td>
              <span >1</span>
            </td>
            <td>$1000   </td>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Profile