import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux';
import { loginActionApi } from '../redux/reducer/userReducer';
import { NavLink, useNavigate } from 'react-router-dom';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { httpNonAuth } from '../util/config';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import swal from 'sweetalert';

export default function Login() {
  const [classState, setToggleClass] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerFrm = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      gender: '',
      phone: ''
    },
    validationSchema: yup.object().shape({
      email: yup.string().required('email cannot be blank!').email('Email is invalid!'),
      password: yup.string().required('password cannot be blank!').min(5, '5 - 32 characters').max(32, '5 - 32 character'),
      name: yup.string().required('name cannot be blank'),
      phone: yup.string().required('phone cannot be blank and just use numbers').matches(/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/, 'Phone is invalid!' ).min(9, '9 number').max(10, '10 number')
    }),
    onSubmit: async (values) => {
      try {
        //Lấy dữ liệu từ form => call api gửi dữ liệu đi
        const res = await httpNonAuth.post('/api/Users/signup', values);
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
            title: res.data?.message,
            icon: 'success',
            timer: 1500,
          });
        }

        navigate('/login');
      } catch (err) {

        if (err.response.data.statusCode !== 200) {
          swal({
            title: err.response.data?.message,
            icon: 'warning',
            timer: 2000,
          });
        }
      }
    }
  })

  const frmLogin = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object().shape({
      email: yup.string().required('email cannot be blank').email('email is invalid  '),
      password: yup.string().required('password cannot be blank').min(5, '5 - 32 character').max(32, '5 - 32 character')
    }),
    onSubmit: (values) => {
      const action = loginActionApi(values);
      dispatch(action);
    }
  })

  return (
    <section className='super-login'>
      <div className={`wrapper ${classState ? 'show-element' : ''}`}>
        <span className="bg-animate"></span>
        <span className="bg-animate2"></span>
        <div className="form-box login">
          <h2 className='animation' >Login</h2>
          <form action="#" onSubmit={frmLogin.handleSubmit}>
            <div className="input-box animation">
              <input type="email" required name="email" onInput={frmLogin.handleChange} onBlur={frmLogin.handleBlur} />
              {frmLogin.errors.email && <p className='p-err text-danger'>{frmLogin.errors.email}</p>}
              <label htmlFor="">Email</label>
              <i><MailOutlineIcon /></i>
            </div>
            <div className="input-box animation">
              <input type="password" required name='password' onInput={frmLogin.handleChange} onBlur={frmLogin.handleBlur} />
              {frmLogin.errors.password && <p className='p-err text-danger'>{frmLogin.errors.password}</p>}
              <label htmlFor="">Password</label>
              <i><LockOpenIcon /></i>
            </div>
            <button type='submit' className='btn-login animation'>Login</button>
            <div className="logreg-link animation">
              <p>Don't have an account? <NavLink className='register-link' to={''}
                onClick={() => {
                  setToggleClass(true)
                }}
              >Sign Up</NavLink></p>
            </div>
          </form>
        </div>

        <div className="info-text login">
          <h2 className='animation'>Welcome Back!</h2>
          <p className='animation'>Lorem ipsum dolor sit amet consectetur adipisicing </p>
        </div>

        <div className="form-box register">
          <h2 className='animation'>Sign up</h2>
          <form action="#" onSubmit={registerFrm.handleSubmit}>
            <div className="input-box animation">
              <input type="email" required name='email' value={registerFrm.email} onInput={registerFrm.handleChange} onBlur={registerFrm.handleBlur} />
              {registerFrm.errors.email && <p className='p-err text-danger'>{registerFrm.errors.email}</p>}
              <label htmlFor="">Email</label>
              <i><MailOutlineIcon /></i>
            </div>
            <div className="input-box animation">
              <input type="password" required value={registerFrm.password} name='password' onInput={registerFrm.handleChange} onBlur={registerFrm.handleBlur} />
              {registerFrm.errors.password && <p className='p-err text-danger'>{registerFrm.errors.password}</p>}
              <label htmlFor="">Password</label>
              <i><LockOpenIcon /></i>
            </div>
            <div className="input-box animation">
              <input type="text" required name='name' onInput={registerFrm.handleChange} onBlur={registerFrm.handleBlur} />
              {registerFrm.errors.name && <p className='p-err text-danger'>{registerFrm.errors.name}</p>}
              <label htmlFor="">Name</label>
              <i><PersonOutlineIcon /></i>
            </div>
            <div className="input-box animation">
              <input type="phone" required name='phone' onInput={registerFrm.handleChange} onBlur={registerFrm.handleBlur} />
              {registerFrm.errors.phone && <p className='p-err text-danger'>{registerFrm.errors.phone}</p>}
              <label htmlFor="">Phone</label>
              <i><PhoneAndroidIcon /></i>
            </div>

            <div className="form-group gender animation">
              <span>Gender</span>
              <div>
                <input className="form-check-input " id="gender1" name="gender" type="radio" defaultValue={true} onInput={registerFrm.handleChange} />
                <label className='label-gender1' htmlFor="gender1">Male</label>
                <input className="form-check-input" id="gender2" name="gender" type="radio" defaultValue={false} onInput={registerFrm.handleChange} />
                <label htmlFor="gender2">Female</label>
              </div>

            </div>

            <button type='submit' className='btn-login animation'>Sign up</button>
            <div className="logreg-link animation">
              <p>Already have an account? <NavLink className='login-link' to={''}
                onClick={() => {
                  setToggleClass(false)
                }}
              >Login</NavLink></p>
            </div>
          </form>
        </div>

        <div className="info-text register">
          <h2 className='animation'>Welcome Back!</h2>
          <p className='animation'>Lorem ipsum dolor sit amet consectetur adipisicing </p>
        </div>
      </div>
    </section>

  )
}
