import { useEffect, useRef, useState } from 'react';
import profilePicture from '../../assets/profile-picture.jpeg';
import { Typing } from './Typing';
import { Message, messages } from './messages';
export const Chat = () => {

  const [loading, setLoading] = useState(false);
  const [topic] = useState('');
  const [conversation, setConversation] = useState([{ sender: '', message: '' }]);

  const chatRef = useRef() as any;

  // const handleTopic = (message: Message): void => {
  //   startTyping();
  //   setTopic(topic);
  // }
  const startTyping = async (time: number = 1000): Promise<boolean> => {
    setLoading(true);
    return await new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
        resolve(true)
      }, time);
    })
  }

  const sendMessage = (message: Message, sender: string, time: number = 100): void => {
    if (loading) return;
    setTimeout(() => {
      setConversation(prevState => ([
        ...prevState, { sender, message: message.ask || message.response }
      ]))
    }, time);
    if (sender === 'viewer') {
      setTimeout(async () => {
        await startTyping();
        setConversation(prevState => ([
          ...prevState, { sender: '', message: message.response }
        ]))
      }, time + 500);
    }
  }

  const handleWelcomeMessage = async (): Promise<void> => {
    if (conversation.length > 1) return;
    await startTyping(5000);
    sendMessage({ response: 'Hello 👋🏾, welcome to my portfolio.' }, 'aventuradev');
    sendMessage({ response: `Let's chat. Click the input message bubbles  💬  from bellow to know more about me.` }, 'aventuradev', 1000);
  }

  useEffect(() => {
    handleWelcomeMessage();
  }, []);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [conversation]);

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
      <div ref={chatRef} className='chat-conversation'>
        {
          conversation.map((c, idx) => {
            if (c.message) return (
              <div key={idx} className={`message-bubble ${c.sender} animate__animated animate__fadeInUp animate__faster`}>
                <p>{c.message}</p>
              </div>
            )
          })
        }
      </div>
      <div className='bottom'>
        {
          messages.map(message => (
            <div
              key={message.name}
              onClick={() => sendMessage(message, 'viewer')}
              className='input-bubble'>
              {message.name} {message.icon}
            </div>
          ))
        }
      </div>
    </div>
  )
}
