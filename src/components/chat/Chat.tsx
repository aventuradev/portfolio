import profilePicture from '../../assets/profile-picture.jpeg';
export const Chat = () => {
  return (
    <div className="chat card">
      <div className="top">
        <div className='chat-contact-info'>
          <img src={profilePicture} alt="Antony Ventura Picture" />
          <p>Antony Ventura 💻</p>
        </div>
        <p>Experience 🧗🏽</p>
      </div>
      <div className='chat-conversation'>
       
        <div className="loading">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <p><small>typing</small></p>
        </div>
        
      </div>
      <div className='bottom'>

      </div>
    </div>
  )
}
