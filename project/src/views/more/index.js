import React, { useState ,useMemo} from 'react'
import "./more.scss"
import { WalletFilled, FileTextFilled, QuestionCircleFilled, SettingFilled, RightOutlined } from "@ant-design/icons"
import { Switch, Checkbox } from 'antd';
import { YouShangJTIcon, LogoIcon, BottomIcon, SunIcon,MoonIcon } from "../../layout/icons"
import { useNavigate } from 'react-router-dom';
import { SET_FLAG } from '../../store/actionTypes';
import { useSelector, useDispatch } from 'react-redux';

export default function More() {
  const flag = useSelector(state => state.flagReducer.flag)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isCheck1 = useMemo(()=>flag.checked1)
  const isCheck2 = useMemo(()=>flag.checked2)
  const isSwitch = useMemo(()=>flag.isSwitch)
  console.log(flag, '6666')
  console.log(isCheck1, '16666')
  console.log(isCheck2, '26666')

  const onSwitch = (checked) => {
    console.log(`switch to ${checked}`);
    dispatch({
      type: SET_FLAG,
      payload: { theme: "light",checked1:"true",checked2:"false" ,isSwitch:String(checked)}
    })
  };
  const onChange1 = (e) => {
    if (e.target.checked) {
      dispatch({
        type: SET_FLAG,
        payload: { theme: "light" ,checked1:"true",checked2:"false" }
      })
    }
  };
  const onChange2 = (e) => {
    if (e.target.checked) {
      dispatch({
        type: SET_FLAG,
        payload: { theme: "dark" ,checked1:"false",checked2:"true" }
      })
    }
  };
  return (
    <div className='more'>
      <div className='main'>
        <h1>DAO Resources</h1>
        <hgroup>General Information</hgroup>
        <div className='col'>
          <aside onClick={() => navigate("/locker_details")} className='Coinbase'><span><i><WalletFilled /></i>Locker Details</span><b className='isShow'><RightOutlined /></b></aside>
          <aside onClick={() => navigate("/terms_of_service")} className='Coinbase'><span><i><FileTextFilled /></i>Terms of Service</span><b className='isShow'><RightOutlined /></b></aside>
          <aside onClick={() => navigate("/privacy_policy")} className='Coinbase'><span><i><FileTextFilled /></i>Privacy Policy</span><b className='isShow'><RightOutlined /></b></aside>
          <a href="https://support.staratlas.com/knowledge/dao" target="_blank" rel="noreferrer"><aside><span><i><QuestionCircleFilled /></i>DAO Help</span><b><YouShangJTIcon /></b></aside></a>
          <a href="https://support.staratlas.com/knowledge/how-does-polis-locking-work" target="_blank" rel="noreferrer"><aside><span><i><WalletFilled /></i>How POLIS Lockers Work</span><b><YouShangJTIcon /></b></aside></a>
          <a href="https://support.staratlas.com/knowledge/how-does-the-atlas-locker-work" target="_blank" rel="noreferrer"><aside><span><i><WalletFilled /></i>How ATLAS Lockers Work</span><b><YouShangJTIcon /></b></aside></a>
        </div>
        <hgroup>Star Atlas Vision</hgroup>
        <div className='col'>
          <a href="https://staratlas.com/white-paper.pdf" target="_blank" rel="noreferrer"><aside><span><div className='logo'>
            <i><LogoIcon /></i>
            <i><BottomIcon /></i>
          </div>Star Atlas - Official White Paper</span><b><YouShangJTIcon /></b></aside></a>
          <a href="https://staratlas.com/economics-paper.pdf" target="_blank" rel="noreferrer"><aside><span><div className='logo'>
            <i><LogoIcon /></i>
            <i><BottomIcon /></i>
          </div>Star Atlas Economics Paper</span><b><YouShangJTIcon /></b></aside></a>
          <a href="https://staratlas.com/assets/pdfs/sustainable-governance.pdf" target="_blank" rel="noreferrer"><aside><span><div className='logo'>
            <i><LogoIcon /></i>
            <i><BottomIcon /></i>
          </div>Sustainable Governance</span><b><YouShangJTIcon /></b></aside></a>
        </div>
        <hgroup>Audit Service Providers</hgroup>
        <div className='col audit'>
          <a href="https://support.staratlas.com/knowledge/is-the-dao-secure" target="_blank" rel="noreferrer"><aside><span><i><SettingFilled /></i>General Audit Information</span><b><YouShangJTIcon /></b></aside></a>
        </div>
        <hgroup>User Settings</hgroup>
        <div className='col setting'>
          <article>
            <div className='left'>
              <i>{flag.theme==="light"?<SunIcon />:<MoonIcon />}</i>DAO Theme
            </div>
            <div className='right'>
              <figure><Switch checked={isSwitch==="true"?true:false} onChange={onSwitch} />Automatic</figure>
              <figcaption><Checkbox disabled={isSwitch==="true"?true:false} checked={isCheck1==="true"?true:false} onChange={onChange1}>Light Mode</Checkbox></figcaption>
              <figcaption><Checkbox disabled={isSwitch==="true"?true:false} checked={isCheck2==="true"?true:false} onChange={onChange2}>Dark Mode</Checkbox></figcaption>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
