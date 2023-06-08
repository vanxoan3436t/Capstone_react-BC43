//rafce
import React from 'react'

const Register = () => {
  return (
    <form className='form-register'>
      <h2>Register</h2> <hr />
      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <p>Email</p>
            <input className='form-control' type="email" placeholder='email' />
          </div>

          <div className="form-group mt-2">
            <p>Password</p>
            <input className='form-control' type="password" placeholder='password' />
            <i class="fa-solid fa-eye"></i>
          </div>

          <div className="form-group mt-2">
            <p>Password confirm</p>
            <input className='form-control' type="password" placeholder='password confirm' />
            <i class="fa-solid fa-eye"></i>
          </div>
        </div>

        <div className="col-6">
          <div className="form-group">
            <p>Name</p>
            <input className='form-control' type="text" placeholder='name' />
          </div>

          <div className="form-group mt-2">
            <p>Phone</p>
            <input className='form-control' type="number" placeholder='phone' />
          </div>
          <div className="form-group gender">
            <span>Gender</span>
        
              <input className='form-check-input ' id='gender1' name='gender' type='radio' value={true} />
              <label for='gender1'>Male</label>
         
          
              <input className='form-check-input' id='gender2' name='gender' type='radio' value={false} />
              <label for='gender2'>Female</label>
        
          </div>
          <div className="form-group ">
            <button className='btn  btn-main'>Submit</button>
          </div>


        </div>

      </div>

    </form>
  )
}

export default Register