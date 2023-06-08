import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux';
import { loginActionApi } from '../redux/reducer/userReducer';

export default function Login() {
  const dispatch = useDispatch();
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
    <form >

      <h2>Login</h2> <hr />
      <div className='content-login' onSubmit={frmLogin.handleSubmit}>
        <div className="form-group">
          <p>Email</p>
          <input className='form-control' name="email" type="email" placeholder='email' onInput={frmLogin.handleChange} onBlur={frmLogin.handleBlur}/>
          {frmLogin.errors.email && <p className='p-err alert alert-danger'>{frmLogin.errors.email}</p>}
        </div>

        <div className="form-group">
          <p>Password</p>
          <input className='form-control' name='password' type="password" placeholder='password'  onInput={frmLogin.handleChange} onBlur={frmLogin.handleBlur}/>
          {frmLogin.errors.password && <p className='p-err alert alert-danger'>{frmLogin.errors.password}</p>}
          <i className="fa-solid fa-eye"></i>
        </div>
        <div className="form-group ">
          <span>Register now ?</span>
          <button type="submit" className="btn btn-main" > Login</button>
        </div>

        {/* <div className="form-group ">
          <button type="submit" className='btn ' >
            <i className="fa-brands fa-facebook"></i>
            <span>Continue with Facebook</span>
          </button>
        </div> */}

      </div>
    </form>
  )
}

