//rafce
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileActionApi, profileActionApi } from '../redux/reducer/userReducer';
import * as yup from 'yup';
import { useFormik } from 'formik';
const Profile = (props) => {
  const { userProfile } = useSelector(state => state.userReducer);
const userValue = userProfile?.data?.content;
  const dispatch = useDispatch();

  const getProfileApi = () => {
    const action = getProfileActionApi();
    dispatch(action);
  }

  const postUpdate = (values) => {
    //dựa theo token
    const action = profileActionApi(values);
    dispatch(action)
    console.log('action', action)
  }

  useEffect(() => {
    getProfileApi();

  }, [])


  const profileFrm = useFormik({
    initialValues: {

      email: ``,
      phone: '',
      name: '',
      password: '',
      gender: ''

    }, validationSchema: yup.object().shape({
      email: yup.string().required('email cannot be blank!').email('Email is invalid !'),
      phone: yup.string().required('phone cannot be blank and just use numbers').matches(/^\d+$/, 'phone is numbers').min(9, '9 number').max(10, '10 number'),
      name: yup.string().required('name cannot be blank'),
      password: yup.string().required('password cannot be blank!').min(5, '5 - 32 characters').max(32, '5 - 32 character')
    })

  })
  return (
    <form className='profile' onSubmit={profileFrm.handleSubmit}>
      <h2 className=''>Profile</h2>
      <div className="row">
        <div className="profile-img col-sm-12 col-md-4 col-lg-2 ">
          <img src="https://i.pravatar.cc/?u=94" alt="..." />
        </div>
        <div className="profile-form col-md-8 col-sm-12  col-lg-10">
          <div >
            <div className="row">
              <div className=" col-md-12 col-xl-6">

                <div className="form-group">
                  <p >Email</p>
                  <input className='form-control' value={userValue?.email} type="email" placeholder='email' name='email' onInput={profileFrm.handleChange} onBlur={profileFrm.handleBlur} />
                  {profileFrm.errors.email && <p className='p-err alert alert-danger'>{profileFrm.errors.email}</p>}
                </div>

                <div className="form-group">
                  <p >Phone</p>
                  <input className='form-control' value={userValue?.phone} type="number" placeholder='phone' name='phone' onBlur={profileFrm.handleBlur} onInput={profileFrm.handleChange} />
                  {profileFrm.errors.phone && <p className='p-err alert alert-danger'>{profileFrm.errors.phone}</p>}
                </div>

              </div>
              <div className="col-md-12 col-xl-6">

                <div className="form-group">
                  <p >Name</p>
                  <input className='form-control' value={userValue?.name} type="text" placeholder='name' name='name' onInput={profileFrm.handleChange} onBlur={profileFrm.handleBlur} />
                  {profileFrm.errors.name && <p className='p-err alert alert-danger'>{profileFrm.errors.name}</p>}
                </div>

                <div className="form-group">
                  <p >Password</p>
                  <input className='form-control' value={userValue?.password} type="password" placeholder='password' name='password' onInput={profileFrm.handleChange} onBlur={profileFrm.handleBlur} />
                  {profileFrm.errors.password && <p className='p-err alert alert-danger'>{profileFrm.errors.password}</p>}
                </div>

                <div className="form-group gender d-flex justify-content-between">
                  <span >Gender</span>

                  <div className='d-flex justify-content-between'>
                    <input className="form-check-input " value={userValue?.gender} id="gender1" name="gender" type="radio" defaultValue={true} onInput={profileFrm.handleChange} />
                    <label htmlFor="gender1">Male</label>
                    <input className="form-check-input" value={userValue?.gender} id="gender2" name="gender" type="radio" defaultValue={false} onInput={profileFrm.handleChange} />
                    <label htmlFor="gender2">Female</label>
                  </div>
                  <button className=' btn btn-main' >Update</button>
                </div>

              </div>
            </div>
          </div>
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
    </form>
  )
}

export default Profile