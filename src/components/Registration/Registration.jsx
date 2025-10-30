import React, { useState } from 'react'
import signupimg from '../../assets/signupimg.png'
import googleimg from '../../assets/googleimg.png'
import { Link, useNavigate } from 'react-router'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const Registration = () => {

  const auth = getAuth();
  const navigate = useNavigate()

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then(()=>{
      toast.success("LogIn with google done");
    })
  }

  const [show, setShow] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [nameErr, setNameErr] = useState("")
  const [emailErr, setEmailErr] = useState("")
  const [passwordErr, setPasswordErr] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
    setNameErr("")
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailErr("")
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setPasswordErr("")
  }

  const handleCreateAccount = () => {
    if(!name){
      setNameErr("please enter your name")
    }

    if(!email){
      setEmailErr("please enter your email")
    }else{
      if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        setEmailErr("please enter your valid email")
      }
    }

    if(!password){
      setPasswordErr("please enter your password")
    }else{
      if(!/(?=.*[a-z])/.test(password)){
        setPasswordErr("use small character")
      }else if(!/(?=.*[A-Z])/.test(password)){
        setPasswordErr("use upper character")
      }else if(!/(?=.*[0-9])/.test(password)){
        setPasswordErr("use number")
      }else if(!/(?=.*[!@#$%^&*])/.test(password)){
        setPasswordErr("use special character")
      }else if(!/(?=.{8,})/.test(password)){
        setPasswordErr("use minimum eignt character")
      }
    }

    if(name && email && password){
      // toast.success("your registration successfully done")
      createUserWithEmailAndPassword(auth, email, password)
  .then((user) => {
        sendEmailVerification(auth.currentUser)
        toast.success("create your account successfully done")
        setTimeout(()=>{
          navigate("/login")
        },2000)
        
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
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
        <img src={signupimg} alt="" />
      </div>
      <div className='mt-[125px] ml-[129px]'>
        <h3 className='font-secondary fonr-medium text-[36px]'>Create an account</h3>
        <p className='font-secondary mt-6'>Enter your details below</p>
        <div className='mt-[48px]'>
          <div>
            <input onChange={handleName} className='w-[370px] py-2 border-b-2 border-black focus:outline-0' type="text" placeholder='Name' />
            <p>{nameErr}</p>
          </div>
          <div className='mt-[40px]'>
            <input onChange={handleEmail} className='w-[370px] py-2 border-b-2 border-black focus:outline-0' type="email" placeholder='Email or Phone Number' />
            <p>{emailErr}</p>
          </div>
          <div className='relative mt-[40px]'>
            <input onChange={handlePassword} className='w-[370px] py-2 border-b-2 border-black focus:outline-0' type={show ? "text" : "password"}
            
            placeholder='Password' />
            <div className='absolute top-3 right-2'>
              {
              show ? <p onClick={(e)=>setShow(!show)} className=''><FaEye /></p> : <p onClick={(e)=>setShow(!show)}><FaEyeSlash /></p>
            }
            </div>
          </div>
            <p>{passwordErr}</p>
        </div>
        <div className='mt-[40px]'>
          <button onClick={handleCreateAccount} className='py-4 px-[133px] bg-primary text-white rounded-[4px]'>Create Account</button>
        </div>
        <div className='mt-4'>
          <button className='flex py-4 px-[86px] border border-black/40 bg-transparent rounded-[4px]'>
            <img src={googleimg} alt="" />
            <p onClick={handleGoogleSignIn} className='font-primary ml-4'>Sign up with Google</p>
          </button>
        </div>
        <div className='mt-[32px] text-center'>
          <p>Already have account? <span className='ml-4'><Link to="/login">Log in</Link></span></p>
        </div>
      </div>
    </div>
  )
}

export default Registration
