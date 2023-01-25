import React from 'react'
import "./terms_of_service.scss"
import TermsMain from "../../components/terms_main"
import { useNavigate } from 'react-router-dom'
import { LeftOutlined } from "@ant-design/icons"

export default function Terms_of_service() {
  const navigate = useNavigate()
  return (
    <div className='terms_of_service'>
      <div className='nav'>
          <i onClick={() => navigate("/more")}><LeftOutlined />More</i>
          <h1>Terms of Service</h1>
        </div>
      <TermsMain />
    </div>
  )
}
