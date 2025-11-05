import signupimg from '../../assets/signupimg.png'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import React, { useState } from 'react'
import { Link } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Bounce, ToastContainer, toast } from 'react-toastify';

const LogIn = () => {
  const auth = getAuth();

  const [show, setShow] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailErr, setEmailErr] = useState("")
  const [passwordErr, setPasswordErr] = useState("")

  const handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailErr("")
  }
  
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setPasswordErr("")
  }

  const handleLoginAccount = () => {
    let hasError = false

    if (!email) {
      setEmailErr("Please enter your email")
      hasError = true
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailErr("Please enter a valid email")
      hasError = true
    }


    if (!password) {
      setPasswordErr("Please enter your password")
      hasError = true
    } else if (!/(?=.*[a-z])/.test(password)) {
      setPasswordErr("Use small character")
      hasError = true
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordErr("Use upper character")
      hasError = true
    } else if (!/(?=.*[0-9])/.test(password)) {
      setPasswordErr("Use number")
      hasError = true
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setPasswordErr("Use special character")
      hasError = true
    } else if (!/(?=.{8,})/.test(password)) {
      setPasswordErr("Use minimum eight characters")
      hasError = true
    }


    if (!hasError) {
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          toast.success("Login successful!")

          setEmail("")
          setPassword("")
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === 'auth/user-not-found') {
            toast.error("No user found with this email")
          } else if (errorCode === 'auth/wrong-password') {
            toast.error("Incorrect password")
          } else {
            toast.error("Login failed. Please try again")
          }
        });
    }
  }

  return (
    <div className='flex pt-[60px] pb-[140px]'>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className=''>
        <img src={signupimg} alt="Sign up" />
      </div>
      <div className='mt-[125px] ml-[129px]'>
        <h3 className='font-secondary font-medium text-[36px]'>Log in to Exclusive</h3>
        <p className='font-secondary mt-6'>Enter your details below</p>
        <div className='mt-[48px]'>
          <div>
            <div className='mt-[48px]'>
              <div className='mt-[40px]'>
                <input 
                  value={email}
                  onChange={handleEmail} 
                  className='w-[370px] text-black/50 py-2 border-b-2 border-black focus:outline-0' 
                  type="email" 
                  placeholder='Email or Phone Number' 
                />
                {emailErr && <p className='text-red-600 mt-2 text-sm'>{emailErr}</p>}
              </div>
              <div className='relative mt-[40px]'>
                <input 
                  value={password}
                  onChange={handlePassword} 
                  className='w-[370px] text-black/50 py-2 border-b-2 border-black focus:outline-0' 
                  type={show ? "text" : "password"}
                  placeholder='Password' 
                />
                <div className='absolute top-3 right-2 cursor-pointer'>
                  {show ? (
                    <FaEye onClick={() => setShow(!show)} />
                  ) : (
                    <FaEyeSlash onClick={() => setShow(!show)} />
                  )}
                </div>
              </div>
              {passwordErr && <p className='text-red-600 mt-2 text-sm'>{passwordErr}</p>}
            </div>
          </div>
          <div className='flex justify-between items-center mt-[40px]'>
            <button 
              onClick={handleLoginAccount} 
              className='py-4 px-[48px] bg-primary text-white rounded-[4px] hover:opacity-90 transition-opacity'
            >
              Log In
            </button>
            <p className='font-primary text-primary cursor-pointer'>Forget Password?</p>
          </div>
          <div className='mt-[32px] text-center'>
            <p className='font-primary'>
              <Link to="/signup" className='text-primary hover:underline'>
                or Create a new account!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn