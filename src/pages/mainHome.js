import React from 'react'
import Featured from '../components/featured/index'
import './mainPage.css'
import Img from '../images/j1.png'
import Typing from 'react-typing-animation';
import Typist from 'react-typist'


const mainHome = () => {
  return (
    <div className="main__page">
      <div>

 
  <div className="back-to-top" style={{display: 'block', opacity: 0.5}}>
    <a className="semplice-event" href="#" data-event-type="helper" data-event="scrollToTop" style={{opacity: 1}}>
      <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="53px" height="20px" viewBox="0 0 53 20" enableBackground="new 0 0 53 20" xmlSpace="preserve">
        <g id="Ebene_3" />
        <g><polygon points="43.886,16.221 42.697,17.687 26.5,4.731 10.303,17.688 9.114,16.221 26.5,2.312 	" /></g>
      </svg>
    </a>
  </div>
  <header id="header" data-type="parallax" data-speed={2}>
    <div className="header-logo-wrapper">
      <img src={Img} className="header-logo"  alt=""/>
    
      <Typist>
        <h1>Jassem Gaaloul</h1>
         
      </Typist>
      <button className="header-button">
        <i className="uil uil-arrow-down" />
      </button>
    </div>
    <div className="header-overlay" />
  </header>
 
  <footer id="footer">
    <div className="footer-logo-wrapper">
      <svg className="footer-logo" xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" viewBox="0 0 805.93 1044.03">
        <defs><style dangerouslySetInnerHTML={{__html: ".cls-4{fill:none;stroke:var(--bc-purple);stroke-miterlimit:10;stroke-width:45px;}.cls-5{font-size:92.32px;fill:var(--bc-purple);font-family:DINPro, DIN Pro;letter-spacing:0.26em;}.cls-5{letter-spacing:0.28em;}" }} /></defs>
        <title>icon-wtext</title>
        <polyline className="cls-4" points="518.08 328.59 783.43 177.13 783.43 39 401.75 258.32 22.5 39 22.5 183.8 588.35 507.92 510.81 553.96 783.43 706.63 783.43 839.92 402.97 621.82 22.5 839.92 22.5 707.85 386 497.02" />
        <text className="cls-5" transform="translate(187.07 1022.89)">X<tspan className="cls-5" x="74.41" y={0}>CRAFT</tspan></text>
      </svg>
    </div>
    <div className="footer-inner">
      <div className="footer-left">
        <svg className="footer-ico" xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" viewBox="0 0 805.93 878.75">
          <defs><style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;stroke:indigo;stroke-miterlimit:10;stroke-width:45px;}" }} /></defs><title>icon</title>
          <polyline className="cls-1" points="518.08 328.59 783.43 177.13 783.43 39 401.75 258.32 22.5 39 22.5 183.8 588.35 507.92 510.81 553.96 783.43 706.63 783.43 839.92 402.97 621.82 22.5 839.92 22.5 707.85 386 497.02" />
        </svg>
        <a className="footer-mail">Find us everywhere.</a>
      </div>
      <div className="footer-right">
        <div className="footer-links">
          <a className="footer-link fl-first" href="https://www.youtube.com/channel/UCfstx-8p0M5K1KTBUB4ORLQ" target="_blank">YouTube.</a>
          <a className="footer-link" href="https://twitter.com/xcraftserver" target="_blank">Twitter.</a>
          <a className="footer-link" href="https://www.instagram.com/xcraftofficial/" target="_blank">Instagram.</a>
          <a className="footer-link fl-last" href="https://discordapp.com/invite/G7yJ2Ww" target="_blank">Discord.</a>
        </div>
        <div className="footer-text">
          <p>xCraft ©2020. All rights reserved.</p>
          <p>Made with ♥ by Areal Alien</p>
        </div>
        <div className="footer-sites">
          <a>Cookie Policy.</a> | <a href="https://www.unsplash.com" target="_blank">Unsplash.</a>
        </div>
      </div>
    </div>
  </footer>
</div>

    </div>
  )
}

export default mainHome
