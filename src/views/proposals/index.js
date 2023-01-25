import React from 'react'
import "./proposals.scss"
import { QuestionCircleOutlined } from "@ant-design/icons"
import { YouShangJTIcon,LogoIcon ,BottomIcon} from "../../layout/icons"

export default function Proposals() {
  return (
    <div className='proposals'>
      <div className='header'>
        <img src={require("../../utils/imgs/ProposalsBannerImage.png")} alt="" />
      </div>
      <div className='nav'>
        <h1>Coming Soon</h1>
      </div>
      <div className='main'>
        <hgroup></hgroup>
        <figure>Star Atlas community members shape the future.</figure>
        <figcaption>The Sustainable Governance Framework is intended to provide transparency and encourage public discussion by Star Atlas community members.</figcaption>
        <figcaption>For players and others interested in the governing principles and political framework of Star Atlas, this plan is a must read.</figcaption>
        <a href="https://staratlas.com/assets/pdfs/sustainable-governance.pdf" target="_blank" rel="noreferrer"><aside>
          <div className='logo'>
            <i><LogoIcon /></i>
            <i><BottomIcon /></i>
          </div> The Sustainable Governance Framework <b><YouShangJTIcon /></b></aside></a>
        <article>
          <i><QuestionCircleOutlined /></i>
          <a href="https://support.staratlas.com/knowledge/how-do-dao-proposals-work" target="_blank" rel="noreferrer">Learn more about proposals</a>
        </article>
      </div>
    </div>
  )
}
