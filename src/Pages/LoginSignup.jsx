import React, { useState } from 'react'
import './CSS/LoginSignup.css'

function LoginSignup() {

    const [loginRegister, setLoginRegister] = useState('register')

    let content

    if(loginRegister==='register')
    {
        content = (
            <div className='big-register-box'>
                <p className='register-now'>Register Now</p>
                <input type="text" name="fullname" className='register-box' placeholder='FullName'/>
                <select name="gender" className='register-box'>
                    <option value="" disabled selected>Select gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                </select>
                <input type="text" name="phonenumber" className='register-box' placeholder='Contact Number'/>
                <input type="text" name="emailid" className='register-box' placeholder='Email ID'/>
                <input type="text" name="password" className='register-box' placeholder='Password'/>
                <input type="text" name="repassword" className='register-box' placeholder='Confirmation Password'/>
                <button className='register-btn'>Register</button>
            </div>
        )
    }
    else if(loginRegister==='login')
    {
        content = (
            <div className='big-register-box now'>
                <p className='register-now'>USER LOGIN</p>
                <hr />
                <input type="text" name="emailid" placeholder='Email ID' className='register-box just' />
                <input type="text" name="password" placeholder='Password' className='register-box' />
                <hr />
                <div className="log">
                    <button className='log1'>Log in</button>
                    <button className='log2' onClick={() => {setLoginRegister('register')}}>Close</button>
                </div>
            </div>
        )
    }
    else
    {
        content = (
            <div className='big-register-box now'>
                <h1 className='register-now'>ADMIN LOGIN</h1>
                <hr />
                <input type="text" name="emailid" placeholder='Admin Email ID' className='register-box just' />
                <input type="text" name="password" placeholder='Password' className='register-box' />
                <hr />
                <div className="log">
                    <button className='log1'>Log in</button>
                    <button className='log2' onClick={() => {setLoginRegister('register')}}>Close</button>
                </div>
            </div>
        )
    }

  return (
    <div className='loginsignup'>
        <div className='navbar'>
            <p className='name'>Classroom Booking System</p>
            <button className='login-btn' onClick={() => setLoginRegister('login')}>Login</button>
        </div>

        
        <div className='register'>
            {content}
        </div> 
        
        <div className='footer'>
            <button className='admin' onClick={() => setLoginRegister('admin')}>Admin Login</button>
            <button className='developer'>Developers</button>
            <button className='feedback'>Feedback</button>
        </div>
    </div>
  )
}

export default LoginSignup