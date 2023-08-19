import React from 'react'
import AuthHeader from "../../components/Layout/AuthHeader"
import LoginForm from '../../components/AuthForms/LoginForm'
const login = () => {
  return (
    <>
      <div className="bg-[#F5F6F8] min-h-screen">
      <AuthHeader/>
        <LoginForm/>
      </div>
    </>
  )
}

export default login