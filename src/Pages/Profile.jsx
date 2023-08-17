//rafce
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileActionApi } from '../redux/reducer/userReducer';
import * as yup from 'yup';
import { useFormik } from 'formik';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import swal from 'sweetalert';
import { http } from '../util/config';

const Profile = (props) => {
  const [classState, toggleClass] = useState(false);
  const { userProfile } = useSelector(state => state.userReducer);
  const userValue = userProfile?.data?.content;
  const dispatch = useDispatch();

  const getProfileApi = () => {
    const action = getProfileActionApi();
    dispatch(action);
  }

  const profileFrm = useFormik({
    initialValues: {
      email: ``,
      phone: '',
      name: '',
      password: '',
      gender: ''

    }, validationSchema: yup.object().shape({
      email: yup.string().required('email cannot be blank!').email('Email is invalid !'),
      phone: yup.string().required('phone cannot be blank and just use numbers!').matches(/^\d+$/, 'phone is numbers!').min(9, '9 number!').max(10, '10 number!'),
      name: yup.string()
        .required('Name cannot be blank!')
        .matches(/^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/, 'Chỉ nhập kí tự chữ!'),
      password: yup.string().required('password cannot be blank!').min(5, '5 - 32 characters!').max(32, '5 - 32 character!')
    }), onSubmit: async (values) => {
      try {
        const res = await http.post(`/api/Users/updateProfile`, values);
        console.log('res.data', res)
        // thành công thì lưu vào local 
        if (res.status === 200) {
          if (res.data?.statusCode === 400) {
            swal({
              title: res.data?.message,
              icon: 'warning',
              timer: 2000,
            });
            return
          }
          swal({
            title: res.data.content,
            icon: 'success',
            timer: 1500,
          });

          getProfileApi()
        }
      } catch (err) {
        swal({
          title: err.response.data?.content,
          icon: 'warning',
          timer: 2000,
        });
      }
    }

  })

  useEffect(() => {
    getProfileApi();
  }, [])
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
                  <div className='main-input'>
                    <p><MailIcon /></p>
                    <input className='form-control' value={profileFrm?.email} type="email" placeholder='Email mặc định không thay đổi' name='email' onInput={profileFrm.handleChange} onBlur={profileFrm.handleBlur} />
                  </div>
                  {profileFrm.errors.email && <p className='p-err'>{profileFrm.errors.email}</p>}

                </div>
                <div className="form-group">
                  <div className='main-input'>
                    <p> <PhoneIcon /></p>
                    <input className='form-control' value={profileFrm?.phone} type="phone" placeholder=': Phone' name='phone' onBlur={profileFrm.handleBlur} onInput={profileFrm.handleChange} />
                  </div>
                  {profileFrm.errors.phone && <p className='p-err'>{profileFrm.errors.phone}</p>}
                </div>
              </div>
              <div className="col-md-12 col-lg-6">

                <div className="form-group">
                  <div className='main-input'>
                    <p><PersonIcon /></p>
                    <input className='form-control' value={profileFrm?.name} type="text" placeholder=': Name' name='name' onInput={profileFrm.handleChange} onBlur={profileFrm.handleBlur} />
                  </div>
                  {profileFrm.errors.name && <p className='p-err'>{profileFrm.errors.name}</p>}
                </div>

                <div className="form-group">
                  <div className='main-input'>
                    <p><LockIcon /></p>
                    <input className='form-control' value={profileFrm?.password} type="password" placeholder=': password' name='password' onInput={profileFrm.handleChange} onBlur={profileFrm.handleBlur} />
                  </div>
                  {profileFrm.errors.password && <p className='p-err'>{profileFrm.errors.password}</p>}
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
         <div className='profile-product-mobile'>
          <div className={`profile-product-item d-none ${!classState ? 'show-element' : ''}`}>
            <div className="d-flex">
              <img style={{ width: '100px' }} src={'https://i.pravatar.cc?u=63'} alt="..." />
              <div className="profile-product-mobile-left">
                <h5> Name Name Name Name</h5>
                <p className='price'>Price: 1000$ { }</p>
                <span>Total: 1000${ }</span>
                <p>Quantily: 1</p>
              </div>
            </div>
          </div>
          <div className={`profile-product-item d-none ${!classState ? 'show-element' : ''}`}>
            <div className="d-flex">
              <img style={{ width: '100px' }} src={'https://i.pravatar.cc?u=63'} alt="..." />
              <div className="profile-product-mobile-left">
                <h5> Name Name Name Name</h5>
                <p className='price'>Price: 1000$ { }</p>
                <span>Total: 1000${ }</span>
                <p>Quantily: 1</p>
              </div>
            </div>
          </div>

        </div>
        <div >
          <div className={`d-none ${classState ? 'show-element' : ''}`}>
            <p className='text-center text-white fs-5'>Hoàng Văn Soạn</p>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Profile
