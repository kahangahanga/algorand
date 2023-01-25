import React, { useState } from 'react'
import "./profile.scss"
import { NavLink } from 'react-router-dom'
import { QuestionCircleOutlined, StarOutlined } from "@ant-design/icons"
import { ZuoShangIcon, YouXiaIcon ,HeadIcon,CoinbaseIcon,LedgerIcon,SolflareIcon,TorusIcon,ExodusIcon} from '../../layout/icons'
import { useSelector, useDispatch } from 'react-redux';
import TermsMain from "../../components/terms_main"
import PrivacyMain from '../../components/privacy_main'
import { SET_MODEL } from '../../store/actionTypes'

export default function Profile() {
  const model = useSelector(state => state.flagReducer.model)
  const dispatch = useDispatch()
  const [isMask, setIsMask] = useState(false)
  const [wallet, setWallet] = useState('')
  const [modelShow, setModelShow] = useState(false)
  const modelShows = (_wallet) => {
    if (model.Privacy_main === "false") {
      setWallet(_wallet)
      return (setIsMask(true), setModelShow(true))
    }else walletConnect(_wallet)
  }

  // Wallet Connect
  const walletConnect=(_wallet_type)=>{
    setWallet(_wallet_type);
    console.log('connect:',_wallet_type)
  }

  return (
    <div className='profile'>
      <div className={`mask ${isMask ? "isMask" : ""}`}></div>
      <div className={`model_show ${modelShow ? "model_is_show" : ""}`}>
        <i><ZuoShangIcon /></i>
        <b><YouXiaIcon /></b>
        <h1>{model.Terms_main === "false" ? "Terms Of Service" : "Privacy Policy"}</h1>
        {model.Terms_main === "false" ? <div className='Terms_main'><TermsMain /></div> :
          <div className='PrivacyMain'><PrivacyMain /></div>}
        <div className='article'>
          <div className='aside' onClick={() => (setIsMask(false), setModelShow(false), setWallet(''))}>Disagree</div>
          {
            model.Terms_main === "false" ? <div className='aside' onClick={() => dispatch({ type: SET_MODEL, payload: { Terms_main: "true", Privacy_main: "false" } })}>Agree</div> : <div className='aside' onClick={() => (dispatch({ type: SET_MODEL, payload: { Terms_main: "true", Privacy_main: "true" } }), setIsMask(false), setModelShow(false), walletConnect(wallet))}>Agree</div>
          }
        </div>
      </div>
      <div className='started'>
        <aside>Connect a wallet to get started</aside>
        <article>Your wallet is used to lock tokens and vote on proposals</article>
      </div>
      <main>
        <div>
          <aside className='Phantom' onClick={()=>modelShows('Phantom')}><i><HeadIcon /></i>
            <section>
              <figure>Phantom</figure>
              <figcaption><i><StarOutlined /></i> Recommended</figcaption>
            </section></aside>
        </div>
        <div>
          <aside className='Coinbase' onClick={()=>modelShows('Coinbase')}><i><CoinbaseIcon /></i>Coinbase</aside>
        </div>
        <div>
          <aside className='Exodus' onClick={()=>modelShows('Exodus')}><i><ExodusIcon /></i>Exodus</aside>
        </div>
        <div>
          <aside className='Solflare' onClick={()=>modelShows('Solflare')}><i><SolflareIcon /></i>Solflare</aside>
        </div>
        <div>
          <aside className='Torus' onClick={()=>modelShows('Torus')}><i><TorusIcon /></i>Torus</aside>
        </div>
        <div>
          <aside className='Ledger' onClick={()=>modelShows('Ledger')}><i><LedgerIcon /></i>Ledger</aside>
        </div>
      </main>
      <div className='footer'>
        <aside>
          <i><QuestionCircleOutlined /></i>
          <a href="https://support.staratlas.com/knowledge/what-is-a-crypto-wallet" target="_blank" rel="noreferrer">Learn more about Solana wallets</a>
        </aside>
        <article>
          <span>By connecting your wallet, you agree to the</span>
          <span>
            <NavLink to="/terms_of_service"> Terms of Service</NavLink> and
            <NavLink to="/privacy_policy"> Privacy Policy</NavLink>
          </span>
        </article>
      </div>
    </div>
  )
}
