import { useEffect, useRef, useState } from 'react';
import profilePicture from '../../assets/profile-picture.jpeg';
import { Typing } from './Typing';
import { useChat } from '../../hooks/useMessages';
import { Interaction } from '../../types/types';
import { FaCircleInfo } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const Chat = () => {

  const { conversation, interactions, isTyping, startTyping, sendMessage, answerMessage, clearChat, } = useChat();
  const [openBottom, setOpenBottom] = useState<boolean>(false);
  const chatRef = useRef() as any;

  const handleClearChat = (): void => {
    clearChat();
    handleWelcomeMessage(500, true);
  }

  const sendAnswerMessage = (message: Interaction, sender: string, time: number = 500): void => {
    if (isTyping) return;

    sendMessage(message, sender, time); // Question

    setTimeout(async () => {
      await startTyping();
      answerMessage(message); // Answer 1 second after question
    }, time * 2);
  }

  const handleWelcomeMessage = async (time: number = 5000, clear: boolean = false): Promise<void> => {
    if (!clear && conversation.length > 1) return;
    await startTyping(time);
    const firtMessage: string = clear ? `Okay, from the beginning again.` : `Hello I'm Antony 👋🏾 a software developer. Welcome to portfolio.`;
    sendMessage({ response: firtMessage }, 'aventuradev');
    sendMessage({ response: `Let's chat. Click the input message bubbles  💬  from bellow to know more about me.` }, 'aventuradev', 1000);
  }
  const handleOpenBottom = (): void => {
    setOpenBottom(!openBottom);
  }
  useEffect(() => {
    handleWelcomeMessage();
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      setTimeout(() => {
        chatRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, [conversation]);

  return (
    <div className="chat card animate__animated animate__fadeInUp animate__delay-2s">
      <div className="top">
        <div className='chat-contact-info'>
          <img src={profilePicture} alt="Antony Ventura Picture" />
          <div>
            <p>Antony Ventura 💻</p>
            {isTyping && (<Typing />)}
          </div>
        </div>
        <button onClick={handleClearChat} className='clear-chat-button'><abbr title="Clear chat"><RiDeleteBin5Fill size={25} /></abbr></button>
        <button onClick={handleClearChat} className='about-me-button'><FaCircleInfo size={25} /></button>
      </div>
      <div className={`chat-conversation ${openBottom && 'bottom-open'}`}>
        {
          conversation.map((c, idx) => {
            if (c.message) return (
              <div ref={chatRef} key={idx} className={`message-bubble ${c.sender} animate__animated animate__fadeInUp animate__faster`}>
                {c.message}
              </div>
            )
          })
        }
      </div>
      <div className={`bottom ${openBottom && 'open'}`}>
        {
          interactions.map(interaction => (
            <div
              key={interaction.name}
              onClick={() => {sendAnswerMessage(interaction, 'viewer'); handleOpenBottom()}}
              className='input-bubble'>
              {interaction.name} {interaction.icon}
            </div>
          ))
        }
        <div className='bottom-actions'>
          <div className='bottom-actions-close'>
            <button onClick={handleOpenBottom}>Let's chat 💬</button>
          </div>
          <div className='bottom-actions-open'>
            <button onClick={()=> { handleClearChat(); handleOpenBottom(); }}>Clear chat 🧹</button>
            <button onClick={handleOpenBottom}>Close  🔽</button>
          </div>
        </div>
      </div>
    </div>
  )
}
