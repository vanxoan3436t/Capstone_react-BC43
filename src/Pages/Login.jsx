//rafce
import React from 'react'

const Login = () => {
  return (
    <div>
      <h2>Login</h2> <hr />
      <form  className='form-login'>
        <div className="form-group">
          <p>Email</p>
          <input className='form-control' type="email" placeholder='email' />
        </div>

        <div className="form-group">
          <p>Password</p>
          <input className='form-control' type="password" placeholder='password' />
          <i class="fa-solid fa-eye"></i>
        </div>
        <div className="form-group ">
          <span>Register now ?</span>
          <button className="btn btn-main"> Login</button>
        </div>

        <div className="form-group ">
          <button className='btn '>
            <i class="fa-brands fa-facebook"></i>
            <span>Continue with Facebook</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login