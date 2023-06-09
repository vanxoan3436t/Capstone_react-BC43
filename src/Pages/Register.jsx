//rafce
import React from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { http } from '../util/config';
import * as yup from 'yup';
const Register = () => {
  const navigate = useNavigate();
  const registerFrm = useFormik({

    initialValues: {
      email: '',
      password: '',
      name: '',
      gender: '',
      phone: ''
    },
    validationSchema: yup.object().shape({
      email: yup.string().required('email cannot be blank!').email('Email is invalid !'),//required là check bỏ trống 
      password: yup.string().required('password cannot be blank!').min(5, '5 - 32 characters').max(32, '5 - 32 character'),
      name: yup.string().required('name cannot be blank'),
      phone: yup.string().required('phone cannot be blank and just use numbers').matches(/^\d+$/, 'phone is numbers').min(9,'9 number').max(10,'10 number'),
      passwordConfirm:yup.string().required('password cannot be blank!').min(5, '5 - 32 characters').max(32, '5 - 32 character')
  }),
    onSubmit: async (values) => {
      try {
        //Lấy dữ liệu từ form => call api gửi dữ liệu đi
        const res = await http.post('/api/Users/signup', values);
        console.log('res', res)
        alert(res.data?.message);
        navigate('/login');
      } catch (err) {
        console.log(err.response.data);
        alert(err.response.data.message);
      }

    }

  })

  return (
    <form className='form-register' onSubmit={registerFrm.handleSubmit}>
      <h2>Register</h2> <hr />
      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <p >Email</p>
            <input className='form-control' type="email" placeholder='email' name='email' onInput={registerFrm.handleChange} onBlur={registerFrm.handleBlur} />
            {registerFrm.errors.email && <p className='p-err alert alert-danger'>{registerFrm.errors.email}</p>}
          </div>

          <div className="form-group mt-2">
            <p >Password</p>
            <input className='form-control' type="password" placeholder='password' name='password' onInput={registerFrm.handleChange} onBlur={registerFrm.handleBlur}/>
            {registerFrm.errors.password && <p className='p-err alert alert-danger'>{registerFrm.errors.password}</p>}
            <i className="fa-solid fa-eye"></i>
          </div>

          <div className="form-group mt-2">
            <p >Password confirm</p>
            <input className='form-control' name='passwordConfirm' type="password" placeholder='password confirm' onInput={registerFrm.handleChange} onBlur={registerFrm.handleBlur}/>
            {registerFrm.errors.passwordConfirm && <p className='p-err alert alert-danger'>{registerFrm.errors.passwordConfirm}</p>}
            <i className="fa-solid fa-eye"></i>
          </div>
        </div>

        <div className="col-6">
          <div className="form-group">
            <p >Name</p>
            <input className='form-control' name='name' type="text" placeholder='name' onInput={registerFrm.handleChange} onBlur={registerFrm.handleBlur}/>
            {registerFrm.errors.name && <p className='p-err alert alert-danger'>{registerFrm.errors.name}</p>}
          </div>

          <div className="form-group mt-2">
            <p>Phone</p>
            <input className='form-control' name='phone' type="number" placeholder='phone' onInput={registerFrm.handleChange} onBlur={registerFrm.handleBlur}/>
            {registerFrm.errors.phone && <p className='p-err alert alert-danger'>{registerFrm.errors.phone}</p>}
          </div>
          <div className="form-group gender">
            <span>Gender</span>

            <div>
              <input className="form-check-input " id="gender1" name="gender" type="radio" defaultValue={true} onInput={registerFrm.handleChange} />
              <label htmlFor="gender1">Male</label>
              <input className="form-check-input" id="gender2" name="gender" type="radio" defaultValue={false} onInput={registerFrm.handleChange} />
              <label htmlFor="gender2">Female</label>
            </div>

          </div>
          <div className="form-group ">
            <button type='submit' className='btn  btn-main' disabled={!registerFrm.isValid}>Submit</button>
          </div>
        </div>

      </div>

    </form>
  )
}

export default Register