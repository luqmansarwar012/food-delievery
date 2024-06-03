/* eslint-disable react/prop-types */
import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState('Login')
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currentState === 'Login' ? <></> : <input type="text" name="name" id="" placeholder='Your name' required />}
                    <input type="email" name="email"
                        placeholder='Your email'
                        id="" required />
                    <input type="password"
                        placeholder='Password' name="password" id="" required />
                </div>
                <button>{currentState === 'Sign Up' ? 'Create account' : 'Login'}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" name="condition" id="" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {
                    currentState === 'Login' ? <p>Create a new account? <span onClick={() => setCurrentState('Sign Up')}>Click here</span></p> : <p>Already have an account? <span onClick={() => setCurrentState('Login')}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup