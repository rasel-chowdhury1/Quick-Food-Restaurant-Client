import React, { useContext, useEffect, useRef, useState } from 'react';
import loginImg from  '../../assets/others/authentication1.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import swal from 'sweetalert';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';



const Login = () => {
    const [disabled,setDisabled] = useState(true)
    const [error,setError] = useState('');
    const {SignIn} = useContext(AuthContext)
    // console.log(SignIn)

    const navigate = useNavigate()
    const location = useLocation()
    
    const from = location.state?.from?.pathname || "/";

    useEffect( () =>{
        loadCaptchaEnginge(6);
    },[])

    

    const handleSignInButton = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log('this is email-> ',email)
        console.log('this is password-> ',password)

        SignIn(email,password)
        .then(result =>{
            swal('Successfully Login');
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error.message)
            setError("Please! provide validate email and password...")
        })
    }
    
    const captchaRef = useRef(null)

    const handleValidateCaptcha = () =>{
        const value = captchaRef.current.value;
        
        if(validateCaptcha(value)){
            setDisabled(false);
        }

    }

    return (
            <div className='mx-auto p-20  bg-base-200'>
                <div className="hero min-height bg-base-200 shadow-2xl border-b-8 border-r-8 border-r-gray-200 border-b-gray-200">
                    <div className="hero-content  flex-col lg:flex-row-reverse">               
                        <div className="card shrink-0 md:w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className="text-5xl text-center font-bold">Login now!</h1>
                            <form onSubmit={handleSignInButton} className="card-body">
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                       <LoadCanvasTemplate  />
                                    </label>
                                    <input ref={captchaRef} onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" required />
                                    {/* <button className='btn btn-outline btn-xs mt-2'>Validate</button> */}
                                </div>

                                <div className="form-control mt-6">
                                  <input disabled={disabled} type="submit" className="btn btn-warning" value="Sign In" />
                                </div>
                            </form>
                            <p className="text-center text-xl text-red-500">{error}</p>
                            <p className='text-center text-orange-400'><span><Link to='/register'>New here?</Link></span>Create a New Account</p>
                            <p className='text-center text-black-400'>Or sign in with</p>
                            <SocialLogin></SocialLogin>
                        </div>

                        <div className="">
                            <img className='w-[100px] h-[200px] md:w-[548px] md:h-[355px]' src={loginImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Login;