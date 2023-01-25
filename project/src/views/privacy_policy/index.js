import React from 'react'
import "./privacy_policy.scss"
import { LeftOutlined } from "@ant-design/icons"
import { useNavigate } from 'react-router-dom'
import PrivacyMain from '../../components/privacy_main'

export default function Privacy_policy() {
  const navigate = useNavigate()
  return (
    <div className='privacy_policy'>
      <div className='nav'>
        <i onClick={() => navigate("/more")}><LeftOutlined />More</i>
        <h1>Privacy Policy</h1>
      </div>
      <PrivacyMain />
    </div>
  )
}
