import React, { useState } from 'react'
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import Container from '../components/Layout/Container';
import { Bounce, ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const [name, setName] = useState("")
  const [nameErr, setNameErr] = useState("")

  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState("")

  const [phone, setPhone] = useState("")
  const [phoneErr, setPhoneErr] = useState("")

  const [message, setMessage] = useState("")
  const [messageErr, setMessageErr] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
    setNameErr("")
  };

  const handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailErr("")
  };

  const handlePhone = (e) => {
    setPhone(e.target.value)
    setPhoneErr("")
  };

  const handleMessage = (e) => {
    setMessage(e.target.value)
    setMessageErr("")
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSend = (e) => {
    e.preventDefault() 

    let hasError = false

  
    if (!name.trim()) {
      setNameErr("Please Enter Your Name")
      hasError = true
    }


    if (!email.trim()) {
      setEmailErr("Please Enter Your Email")
      hasError = true
    } else if (!validateEmail(email)) {
      setEmailErr("Please Enter a Valid Email")
      hasError = true
    }


    if (!phone.trim()) {
      setPhoneErr("Please Enter Your Number")
      hasError = true
    } else if (phone.length < 10) {
      setPhoneErr("Please Enter a Valid Phone Number")
      hasError = true
    }


    if (!message.trim()) {
      setMessageErr("Please Enter Your Message")
      hasError = true
    }


    if (!hasError) {
      toast.success("Your Message Successfully Submitted")

      setName("")
      setEmail("")
      setPhone("")
      setMessage("")
    }
  };

  return (
    <div>
      <Container>
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
                <div className='flex font-primary pt-[96px] pb-[80px] gap-x-3'>
          <p className='text-[14px] leading-[21px] text-black/70'>Home</p>
          <p>/</p>
          <p className='text-[14px] leading-[21px]'>Contact</p>
        </div>
        <div className='pb-[140px] lg:flex justify-between'>
          <div className="left w-auto lg:w-[30%] pt-[40px] px-[35px] pb-[51px] shadow">
            <div className='flex items-center gap-x-[16px]'>
              <div className='w-[40px] h-[40px] rounded-full bg-primary flex justify-center items-center text-white'>
                <IoCallOutline />
              </div>
              <h1 className='font-primary font-medium text-base leading-[24px]'>Call To Us</h1>
            </div>
            <p className='font-primary text-[14px] leading-[21px] pt-6 pb-4'>We are available 24/7, 7 days a week.</p>
            <p className='font-primary text-[14px] leading-[21px] mb-[32px]'>Phone: +8801611112922</p>
            <div className='border-b border-b-black/30 mb-[32px]'></div>
            <div className='flex items-center gap-x-[16px]'>
              <div className='w-[40px] h-[40px] rounded-full bg-primary flex justify-center items-center text-white'>
                <CiMail />
              </div>
              <h1 className='font-primary font-medium text-base leading-[24px]'>Write To Us</h1>
            </div>
            <p className='font-primary text-[14px] leading-[21px] pt-6 pb-4'>Fill out our form and we will contact you within 24 hours.</p>
            <p className='font-primary text-[14px] leading-[21px] mb-[16px]'>Email: customer@exclusive.com</p>
            <p className='font-primary text-[14px] leading-[21px]'>Email: support@exclusive.com</p>
          </div>
          <div className="right py-[40px] lgx:px-[27px] lst:px-[32px] shadow">
            <form onSubmit={handleSend}>
              <div className='md:flex gap-2 lg:gap-[16px]'>
                <div className='flex flex-col'>
                  <input
                    type="text"
                    value={name}
                    placeholder='Your Name'
                    onChange={handleName}
                    className='font-primary text-base leading-[24px] text-[#999999] bg-[#f5f5f5] py-[13px] pl-[16px] rounded outline-0 w-[235px]'
                  />
                  {nameErr && <p className='text-red-600 mt-2 font-primary text-[12px]'>{nameErr}</p>}
                </div>
                <div className='flex flex-col'>
                  <input
                    type="email"
                    value={email}
                    placeholder='Your Email'
                    onChange={handleEmail}
                    className='font-primary text-base leading-[24px] text-[#999999] bg-[#f5f5f5] py-[13px] pl-[16px] rounded outline-0 w-[235px]'
                  />
                  {emailErr && <p className='text-red-600 mt-2 font-primary text-[12px]'>{emailErr}</p>}
                </div>
                <div className='flex flex-col'>
                  <input
                    type="tel"
                    value={phone}
                    placeholder='Your Phone'
                    onChange={handlePhone}
                    className='font-primary text-base leading-[24px] text-[#999999] bg-[#f5f5f5] py-[13px] pl-[16px] rounded outline-0 w-[235px]'
                  />
                  {phoneErr && <p className='text-red-600 mt-2 font-primary text-[12px]'>{phoneErr}</p>}
                </div>
              </div>
              <div className='my-[32px]'>
                <textarea
                  value={message}
                  placeholder='Your Message'
                  onChange={handleMessage}
                  className='font-primary text-base leading-[24px] text-[#999999] bg-[#f5f5f5] py-[13px] pl-[16px] rounded outline-0 w-full h-[207px] resize-none'
                />
                {messageErr && <p className='text-red-600 mt-2 font-primary text-[12px]'>{messageErr}</p>}
              </div>
              <button
                type="submit"
                className='font-primary font-medium text-base leading-[24px] bg-primary text-white rounded py-4 px-6 lg:ml-[570px] hover:opacity-90 transition-opacity'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>

    </div>
  )
}

export default Contact