import React from 'react'
import "./LoginModel.css"
import { RxCross2 } from "react-icons/rx"
import supabase from '../../supabase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../slices/userSlice';

const LoginModel = ({ isOpen, setIsOpen }) => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loginType, setLoginType] = React.useState(true)
    const dispatch = useDispatch();


    const signup = async () => {
        const { data, error } = await supabase.auth.signUp({ email, password });
        data.user ? alert("Account created, Please verify your email") : alert(error)
    };


    const login = async () => {
        // console.log(email, password);
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        console.log(data, error)
        data.user ? alert("Login successful") : alert(error)
        dispatch(setUser(data.user))
    };

    return isOpen ? (
        <div className='overlay'>
            <div className='login-model'>
                <div className='left'>
                    <div className='left-container'>
                        <p className='login-title'>Login</p>
                        <p className='login-subtitle'>
                            Get access to your Orders, Wishlist and Recommendations
                        </p>
                    </div>
                </div>
                <div className='right'>
                    <input type='email' className='login-input' placeholder='Enter Email' required value={email} onChange={(e) => setEmail(e.target.value)}></input>

                    <input type='password' className='login-input' placeholder='Enter Password' required value={password} onChange={(e) => setPassword(e.target.value)}></input>

                    <p className='termsandconditions'>
                        By continuing, I agree to Flipkart's{" "}
                        <span style={{ color: "blue" }}>Terms of Use</span> and
                        <span style={{ color: "blue" }}> Privacy Policy.</span>{" "}
                    </p>
                    {
                        loginType ? (
                            <button className='login-btn' onClick={login}>Login</button>
                        ) : (
                            <button className='login-btn' onClick={signup}>Signup</button>
                        )
                    }
                    {
                        loginType ? (
                            <p className='login-signup' onClick={() => setLoginType(false)}>
                                New to Flipkart? Signup
                            </p>
                        ) : (
                            <p className='login-signup' onClick={() => setLoginType(true)}>
                                Already have an account? Login
                            </p>
                        )
                    }
                </div>
                <div className='close' onClick={() => setIsOpen(false)}>
                    <RxCross2 />
                </div>
            </div>
        </div>
    ) : (
        ""
    );
};

export default LoginModel