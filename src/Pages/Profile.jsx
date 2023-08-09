//rafce
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileActionApi, profileActionApi } from '../redux/reducer/userReducer';
import * as yup from 'yup';
import { useFormik } from 'formik';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Profile = (props) => {
  const [classState, toggleClass] = useState(false);
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
    <form className='profile container-fluid' onSubmit={profileFrm.handleSubmit}>
      <h1 className=''>Profile</h1>
      <div className="row">
        <div className="profile-img col-sm-12 col-md-4 col-lg-2 ">
          <img src="./img/rose-info.jpg" alt='avatar-profile' />
        </div>
        <div className="profile-form col-sm-12  col-md-6 col-lg-10 ">
          <div >
            <div className="row">
              <div className=" col-md-12 col-lg-6">

                <div className="form-group">
                  <div className='profile-input'>
                    <p><MailIcon /></p>
                    <input className='form-control' value={profileFrm?.email} type="email" placeholder=': Email' name='email' onInput={profileFrm.handleChange} onBlur={profileFrm.handleBlur} />
                  </div>
                  {profileFrm.errors.email && <p className='p-err text-danger'>{profileFrm.errors.email}</p>}

                </div>
                <div className="form-group">
                  <div className='profile-input'>
                    <p> <PhoneIcon /></p>
                    <input className='form-control' value={profileFrm?.phone} type="number" placeholder=': Phone' name='phone' onBlur={profileFrm.handleBlur} onInput={profileFrm.handleChange} />
                  </div>
                  {profileFrm.errors.phone && <p className='p-err text-danger'>{profileFrm.errors.phone}</p>}
                </div>
              </div>
              <div className="col-md-12 col-lg-6">

                <div className="form-group">
                  <div className='profile-input'>
                    <p><PersonIcon /></p>
                    <input className='form-control' value={profileFrm?.name} type="text" placeholder=': Name' name='name' onInput={profileFrm.handleChange} onBlur={profileFrm.handleBlur} />
                  </div>
                  {profileFrm.errors.name && <p className='p-err text-danger'>{profileFrm.errors.name}</p>}
                </div>

                <div className="form-group">
                  <div className='profile-input'>
                    <p><LockIcon /></p>
                    <input className='form-control' value={profileFrm?.password} type="password" placeholder=': password' name='password' onInput={profileFrm.handleChange} onBlur={profileFrm.handleBlur} />
                  </div>
                  {profileFrm.errors.password && <p className='p-err text-danger'>{profileFrm.errors.password}</p>}
                </div>

                <div className="form-group gender d-flex justify-content-between">
                  <span >Gender</span>

                  <div className='gender-input'>
                    <input className="form-check-input " value={profileFrm?.gender} id="gender1" name="gender" type="radio" defaultValue={true} onInput={profileFrm.handleChange} />
                    <label htmlFor="gender1">Male</label>
                    <input className="form-check-input" value={userValue?.gender} id="gender2" name="gender" type="radio" defaultValue={false} onInput={profileFrm.handleChange} />
                    <label htmlFor="gender2">Female</label>
                  </div>
                  <button className=' btn btn-main'><span className='icon-button'><DoubleArrowIcon /></span> <span>Update</span> </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div> <hr />
      <div className="profile-body">
        <div className='profile-body-title'>
          <h3 className='title-order'><span className={`${!classState ? 'show-element' : ''}`} onClick={() => {
            toggleClass(false)
          }}>Order history</span> </h3>
          <h3 className='title-favourite'><span className={`${classState ? 'show-element' : ''}`} onClick={() => {
            toggleClass(true)
          }}>Favourite</span> </h3>
        </div>

        <div className="profile-table">
          <div className={` table-history d-none ${!classState ? 'show-element' : ''}`} >
            <table className='table table-hover' >
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
                <tr>
                  <td> id </td>
                  <td>  <img src="https://i.pravatar.cc?u=63" alt="" style={{ width: '60px' }} /></td>
                  <td>Product 1</td>
                  <td>$1000   </td>
                  <td>
                    <span >1</span>
                  </td>
                  <td>$1000   </td>
                </tr>

                <tr>
                  <td> id </td>
                  <td>  <img src="https://i.pravatar.cc?u=40" alt="" style={{ width: '60px' }} /></td>
                  <td>Product 2</td>
                  <td>$1000   </td>
                  <td>
                    <span >1</span>
                  </td>
                  <td>$1000   </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`table-love d-none ${classState ? 'show-element' : ''}`}>
            <table className='table table-hover text-white'>
              <h1>love No content</h1>
            </table>
          </div>

        </div>
      </div>
    </form>
  )
}

export default Profile