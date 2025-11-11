
import { FaRegEye  } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const Register = () => {

    const {crateUserEP, updateUserProfile, signInGoogle, setLoading} = useAuth();
    const [isOpen,setIsOpen] = useState(false);
    const [error,setError] = useState('');
    const [pError,setPError] = useState('');
    const location  = useLocation();
    const navigate = useNavigate();
     const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photoUrl.value;
        const password = e.target.password.value;
        

        if(!/(?=.{6,})/.test(password)){
            return setPError('Password Should be at least 6 charecter or long');
        }else{
            setPError('');
        }
        if(!/(?=.*[a-z])/.test(password)){
            return setPError('Password should be contain at least 1 lowercase alphabetical character');
        }else{
            setPError('');
        }
        if(!(/(?=.*[A-Z])/.test(password))){
            return setPError('Password should be contain at least 1 uppercase alphabetical character');
        }else{
            setPError('');
        }if(!(/(?=.*[0-9])/.test(password))){
            return setPError('Password should be contain at least 1 numeric character');
        }else{
            setPError('');
        }

        crateUserEP(email,password)
        .then((result) => {
            // const user = result.user;
            setError('')
            setPError('')
            setLoading(false)
            
            updateUserProfile(name,photo).then(() => {
                // setUser({...user, displayName: name, photoURL: photo});
                setLoading(false)
            })
            toast.success(`Registerd successfully!`)
            navigate(location.state || '/')
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
            
        });
     }  
     
     const handleSignInGoogle = () => {
        signInGoogle()
        .then(() => {
            // console.log(result.user);
            toast.success(`Login successfully!`)
            navigate(location.state || '/')
        })
        .catch(error => {
            // console.log(error.message);
            toast.error(`${error.message}`)
        })
     } 

    document.title = "Register Page";
    return (
        <div>
            <div className="pb-10">
                <h1 className='text-4xl text-center text-black mt-10'>Register Now</h1>
                <div className="card-body card bg-base-100 w-full max-w-sm m-auto my-10 ">
                    <form onSubmit={handleRegister}>
                        
                      <fieldset className="fieldset">

                       
                        <label className="label">Name </label>
                        <input type="text" name='name' className="input w-full" placeholder="Your Name" required/>

                        <label className="label">Photo Url</label>
                        <input type="url" name='photoUrl' className="input w-full" placeholder="Photo Url" required/>


                        <label className="label">Email</label>

                        <input type="email" name='email' className="input w-full" placeholder="Email" required/>
                        
                        <label className="label">Password</label>
                        
                        <div className='relative'>
                            <input 
                           
                            className="input w-full" 
                            name='password' 
                            type={`${isOpen ? 'text' : 'password'}`}
                            placeholder="Password" 
                            required/>
                            <span onClick={() => setIsOpen(!isOpen)} className="text-xl p-2 cursor-pointer absolute right-3 bottom-1 z-40">
                                {isOpen ? <FaRegEyeSlash /> : <FaRegEye />}
                            </span>
                            
                        </div>
                        {
                               <p className="text-red-600 mt-2">{pError ? pError : ''}</p>
                            }
                        <div>
                            <label className="label block my-2">
                                <input type="checkbox" name='terms' defaultChecked 
                                className="checkbox" />
                                <span className='ml-2'>Accept Our Terms & condition</span>
                                {
                                    <p className="text-red-600 mt-2">{error ? error : ''}</p>
                                }
                            </label>
                        </div>
                            <input type='submit' className="btn btn-neutral text-[15px] font-semibold mt-2" placeholder='red'
                            value='Register'
                            ></input>
                            
                            <span onClick={handleSignInGoogle}  className='bg-black cursor-pointer p-3 flex items-center text-white justify-center text-[15px] font-semibold mt-2'>
                                    <FcGoogle className=' mr-4 cursor-pointer text-2xl' />
                                    Login with Google
                            </span>
                             <div className='z-100'>
                                Already have an account? <Link to={'/login'} className='link link-hover underline'> Login </Link>
                            </div>
                            
                        </fieldset>
  
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;