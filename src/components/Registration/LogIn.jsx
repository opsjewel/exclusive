
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


    if (!email) {
      setEmailErr("please enter your email")
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailErr("please enter your valid email")
      }
    }

    if (!password) {
      setPasswordErr("please enter your password")
    } else {
      if (!/(?=.*[a-z])/.test(password)) {
        setPasswordErr("use small character")
      } else if (!/(?=.*[A-Z])/.test(password)) {
        setPasswordErr("use upper character")
      } else if (!/(?=.*[0-9])/.test(password)) {
        setPasswordErr("use number")
      } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
        setPasswordErr("use special character")
      } else if (!/(?=.{8,})/.test(password)) {
        setPasswordErr("use minimum eignt character")
      }
    }

    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        
        toast.success("Login done")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
        setEmail("")
        setPassword("")
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
        <img src={signupimg} alt="" />
      </div>
      <div className='mt-[125px] ml-[129px]'>
        <h3 className='font-secondary fonr-medium text-[36px]'>Log in to Exclusive</h3>
        <p className='font-secondary mt-6'>Enter your details below</p>
        <div className='mt-[48px]'>
          <div>
            <div className='mt-[48px]'>
              <div className='mt-[40px]'>
                <input onChange={handleEmail} className='w-[370px] py-2 border-b-2 border-black focus:outline-0' type="email" placeholder='Email or Phone Number' />
                <p>{emailErr}</p>
              </div>
              <div className='relative mt-[40px]'>
                <input onChange={handlePassword} className='w-[370px] py-2 border-b-2 border-black focus:outline-0' type={show ? "text" : "password"}

                  placeholder='Password' />
                <div className='absolute top-3 right-2'>
                  {
                    show ? <p onClick={(e) => setShow(!show)} className=''><FaEye /></p> : <p onClick={(e) => setShow(!show)}><FaEyeSlash /></p>
                  }
                </div>
              </div>
              <p>{passwordErr}</p>
            </div>
          </div>
          <div className='flex justify-between items-center mt-[40px]'>
            <button onClick={handleLoginAccount} className='py-4 px-[48px] bg-primary text-white rounded-[4px]'>Log In</button>
            <p className='font-primary text-primary'>Forget Password?</p>
          </div>
          <div className='mt-[32px] text-center'>
            <p><Link to="/signup">or Create An Account!</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn
