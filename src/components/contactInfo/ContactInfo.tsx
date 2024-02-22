import profilePicture from '../../assets/profile-picture.jpeg';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { SocialNetworkElement } from './SocialNetworkElement';


export const ContactInfo = () => {
  const handleOpenInfo = () => {
    const sideBanner: Element | null = document.querySelector('.contact-info');
    const overlay: Element | null = document.querySelector('.overlay');
    sideBanner?.classList.toggle('open');
    overlay?.classList.toggle('open');
  }
  return (
    <>
      <div className="contact-info animate__animated animate__fadeInDown animate__delay-1s animate__slow">
        <div className="top">
          <p>Contact info</p>
        </div>

        <div className="info">
          <div className='profile-ssnn-container'>
            {/* Social Networks */}
            <div className='social-networks'>
              <SocialNetworkElement
                Icon={FaLinkedinIn}
                URL='https://linkedin.com/in/antonyventuramorey'
              />
              <SocialNetworkElement
                Icon={FaGithub}
                URL='https://github.com/aventuradev'
              />
              <SocialNetworkElement
                Icon={RiWhatsappFill}
                URL='https://wa.me/18493532894'
              />
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
            <img src='https://skillicons.dev/icons?i=react,js,typescript,html,css,firebase,tailwind,mongo,git,github,nodejs,express&perline=6' />
          </div>
        </div>
      </div>
      <div
        className='overlay'
        onClick={handleOpenInfo}
      ></div>
    </>
  )
}
