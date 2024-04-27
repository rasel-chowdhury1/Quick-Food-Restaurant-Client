import React, { useContext } from 'react';
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {GoogleSignIn} = useContext(AuthContext);
    console.log(GoogleSignIn)
    const navigate = useNavigate();
    const location = useLocation();

    const form = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () =>{
        console.log("clicked google button")
        GoogleSignIn()
        .then(result =>{
            const loggedInUser = result.user;
            const saveUser = {name: loggedInUser.displayName, email: loggedInUser.email}
            fetch('https://bistro-boss-restaurant-server-lovat.vercel.app/users',{
                    method: "POST",
                    headers: {
                        "content-type": 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data =>{
                            navigate(form, {replace: true})
                    })
            
        })
    }


    return (
        <div className='flex justify-center mx-auto my-3'>
            {/* <button  className="btn btn-circle btn-outline btn-sm mr-4"><BsFacebook /></button> */}
            <div onClick={handleGoogleSignIn}  className='flex bg-yellow-400 rounded-md p-2'>
                <div><button className="btn btn-circle btn-outline btn-sm mx-4"><FcGoogle /></button></div>
                <div className='text-gray-800'>Continue with google</div>
            </div>
            
            {/* <button className="btn btn-circle btn-outline btn-sm mx-5"><FaGithub /></button> */}
         </div>
    );
};

export default SocialLogin;