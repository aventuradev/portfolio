import { useEffect, useState } from 'react';
import profilePicture from '../../assets/profile-picture.jpeg';
import { Typing } from './Typing';
import { messages } from './messages';
export const Chat = () => {

  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState('');
  // const [conversation, setConversation] = useState([]);
  const handleTopic = (topic: string): void => {
    startTyping();
    setTopic(topic);

  }
  const startTyping = (time: number = 1500, topic?: string): void => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (topic) sendMessage();
    }, time);
  }

  const sendMessage = (): void => {

  }

  useEffect(() => {
    startTyping(5000);
  }, [])

  return (
    <div className="chat card animate__animated animate__fadeInUp animate__delay-2s">
      <div className="top">
        <div className='chat-contact-info'>
          <img src={profilePicture} alt="Antony Ventura Picture" />
          <div>
            <p>Antony Ventura 💻</p>
            {loading && (<Typing />)}
          </div>
        </div>
        <p>{topic}</p>
      </div>
      <div className='chat-conversation'>
        <div className={`message-bubble animate__animated animate__fadeInUp animate__faster`}>
          <p>Primer mensajePrimer mensajePrimer mensajePrimer mensajePrimer mensajePrimer mensajePrimer mensajePrimer mensajePrimer mensajePrimer mensajePrimer mensaje</p>
        </div>
        <div className={`message-bubble animate__animated animate__fadeInUp animate__faster you`}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat animi minima ratione iste dicta cum aliquid maxime debitis laborum, itaque harum quia porro aut? Repellendus commodi odit dolores aliquid sit!</p>
        </div>
        <div className={`message-bubble animate__animated animate__fadeInUp animate__faster`}>
          <p>Primer mensajePrimer mensajePrimer mensajePrimer mensajePrimer mensajePrimer mensajePrimer mensajePrimer mensajePrimer mensajePrimer mensajePrimer mensaje</p>
        </div>
        <div className={`message-bubble animate__animated animate__fadeInUp animate__faster you`}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat animi minima ratione iste dicta cum aliquid maxime debitis laborum, itaque harum quia porro aut? Repellendus commodi odit dolores aliquid sit!</p>
        </div>
      </div>
      <div className='bottom'>
        {
          messages.map(message => (
            <div
              key={message.name}
              onClick={() => handleTopic(`${message.name} ${message.icon}`)}
              className='input-bubble'>
              {message.name} {message.icon}
            </div>
          ))
        }
      </div>
    </div>
  )
}
