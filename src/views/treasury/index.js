import React from 'react'
import "./treasury.scss"
import { QuestionCircleOutlined, CheckOutlined } from "@ant-design/icons"

export default function Treasury() {
  return (
    <div className='treasury'>
      <div className='header'>
        <img src={require("../../utils/imgs/TreasuryBannerImage.png")} alt="" />
      </div>
      <div className='nav'>
        <h1>Coming Soon</h1>
      </div>
      <div className='main'>
        <hgroup></hgroup>
        <figcaption>Get insight into token management.</figcaption>
        <article>
          <i><QuestionCircleOutlined /></i>
          <a href="https://support.staratlas.com/knowledge/what-is-the-star-atlas-dao-treasury" target="_blank">Learn more about the treasury</a>
        </article>
      </div>
    </div>
  )
}
