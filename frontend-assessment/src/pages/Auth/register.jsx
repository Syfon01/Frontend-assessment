import React from 'react'
import AuthHeader from "../../components/Layout/AuthHeader"
import RegisterForm from '../../components/Layout/RegisterForm'
const register = () => {
  return (
    <>
      <div className="bg-[#F5F6F8] min-h-screen">
      <AuthHeader/>
        <RegisterForm/> 
      </div>
    </>
  )
}

export default register