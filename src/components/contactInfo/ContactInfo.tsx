import profilePicture from '../../assets/profile-picture.jpeg'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

import reactLogo from '../../assets/react-logo.png'
import JSLogo from '../../assets/javascript-logo.png'
import TSLogo from '../../assets/typescript-logo.png'
import HTMLLogo from '../../assets/html-logo.webp'
import CSSLogo from '../../assets/css-logo.webp'
import FirebaseLogo from '../../assets/firebase-logo.webp'


export const ContactInfo = () => {
  return (
    <div className="contat-info card">
      <div className="top">
        <p>Contact info</p>
      </div>

      <div className="info">

        <div className='profile-ssnn-container'>
          {/* Social Networks */}
          <div className='social-networks'>
            <div className='social-container'>
              <div className='sn-element'>
                <FaLinkedinIn className='icon' />
              </div>
            </div>

            <div className='social-container'>
              <div className='sn-element'>
                <FaGithub className='sn-icon' />
              </div>
            </div>

            <div className='social-container'>
              <div className='sn-element'>
                <RiWhatsappFill className='sn-icon' />
              </div>
            </div>
          </div>
          {/* Profile Picture */}
          <img src={profilePicture} alt="Antony Ventura Picture" />
        </div>
        <div className='info-name'>
          <p className='name'>Antony Ventura 💻</p>
          <p className='rol'>Frontend Developer</p>
        </div>
      </div>

      <div className='divider'></div>
      {/* ABOUT  */}
      <div className="about">
        <p className='info-title'>About</p>
        <p>I'm a <b>Frontend Developer</b> with 4 years of experience developing and designing web apps using <b>Javascript and React</b>, also with backend and database knowledge using <b>NodeJs, SQL Server and Firebase.</b> </p>
      </div>
      <div className='divider'></div>
      {/* SKILLS */}
      <div className="skills">
        <p className='info-title'>Skills</p>
        <div className='skills-logos'>
          <img src={reactLogo} alt="React logo" />
          <img src={JSLogo} alt="Javascript logo" />
          <img src={TSLogo} alt="Typescript logo" />
          <img src={HTMLLogo} alt="HTML logo" />
          <img src={CSSLogo} alt="CSS logo" />
          <img src={FirebaseLogo} alt="Firebase logo" />
          <img src={FirebaseLogo} alt="Firebase logo" />
          <img src={FirebaseLogo} alt="Firebase logo" />
          <img src={FirebaseLogo} alt="Firebase logo" />
          <img src={FirebaseLogo} alt="Firebase logo" />
          <img src={FirebaseLogo} alt="Firebase logo" />
          <img src={FirebaseLogo} alt="Firebase logo" />
        </div>
      </div>
    </div>
  )
}
