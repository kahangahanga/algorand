import React from 'react'
import "./locker_details.scss"
import { LeftOutlined } from "@ant-design/icons"
import { useNavigate } from 'react-router-dom'

export default function Locker_details() {
  const navigate = useNavigate()
  return (
    <div className='locker_details'>
      <div className='main'>
        <div className='nav'>
          <i onClick={() => navigate("/more")}><LeftOutlined />More</i>
          <h1>Locker Details</h1>
        </div>
      </div>
    </div>
  )
}