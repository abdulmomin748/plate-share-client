import React, { useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate  } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { FaRegEye  } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import useAuth from '../hooks/useAuth';
const Login = () => {
    const { signInEmailPassword,signInGoogle,setLoading } = useAuth();
    const [isOpen,setIsOpen] = useState(false);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    // console.log(location);
    
    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInEmailPassword( email,password )
        .then(() => {
            // console.log(result.user);
            setError('')
            navigate(location.state || '/');
            toast.success('Login successfully!')
            setLoading(false)

        })
        .catch(error => {
            // console.log(error.message);
            setError(error.message)
            
        })
    }
    const handleSignInGoogle = () => {
        signInGoogle()
        .then(() => {
            // console.log(result.user);
            navigate(location.state || '/');
            toast.success('Login successfully!')
            setLoading(false)
            
        })
        .catch(error => {
            // console.log(error.message);
            toast.error(`${error.message}`)
        })
     }
     const [pageLoading, setPageLoading] = useState(true);
        useEffect(() => {
           setTimeout(() => {
             setPageLoading(false);
           }, 700);
         }, []);
       
         if (pageLoading) {
           return (
             <div className="flex justify-center items-center h-[500px]">
               <div class="loader"></div>
             </div>
           );
         }
     document.title = "Login Page";
    return (
        <div>
            <div className=" pb-10">
                <h1 className='text-4xl text-center text-black mt-10'>Login Now</h1>

            
                <div className="card-body card bg-base-100 w-full max-w-sm m-auto my-10 ">
                    
                    <form onSubmit={handleSignIn}>
                        
                        <fieldset className="fieldset">
                        <label className="label">Email</label>

                        <input type="email"  name='email' className="input w-full" placeholder="Email" required/>
                        
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input 
                            type={isOpen ? '' : 'password'}
                            className="input w-full" 
                            name='password' 
                            placeholder="Password" 
                            required
                            />
                            <span onClick={() => setIsOpen(!isOpen)} className="text-xl p-2 cursor-pointer absolute right-3 bottom-0 z-40">
                                {isOpen ? <FaRegEyeSlash /> : <FaRegEye />}
                            </span>
                        </div>
                        <div>
                            {
                                <p className="text-red-600 my-2">{error ? error : ''}</p>
                            }
                        </div>
                            <input type='submit' className="btn text-[15px] font-semibold btn-neutral" placeholder='red'
                            value='Login'
                            ></input>
                            <span onClick={handleSignInGoogle}  className='bg-black cursor-pointer p-3 flex items-center text-white justify-center text-[15px] font-semibold mt-2'>
                                <FcGoogle className=' mr-4 cursor-pointer text-2xl' />
                                Login with Google
                            </span>
                            {/* <span className='bg-black p-3 flex justify-center mt-2'>
                                <FcGoogle onClick={handleSignGoogle} className='text-2xl mr-4 cursor-pointer' />
                                <FaGithub  className='text-2xl cursor-pointer'  />
                            </span> */}
                                <div className='z-100'>
                                Don't have an account? <Link to={'/register'} className='link link-hover underline'>Register </Link>
                            </div>
                            
                        </fieldset>
    
                    </form>
    
                </div>
            </div>
        </div>
    );
};

export default Login;