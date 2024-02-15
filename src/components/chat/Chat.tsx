import { useEffect, useRef } from 'react';
import profilePicture from '../../assets/profile-picture.jpeg';
import { Typing } from './Typing';
import { useChat } from '../../hooks/useMessages';
import { Interaction } from '../../types/types';

export const Chat = () => {

  const { conversation, interactions, isTyping, startTyping, sendMessage, answerMessage, clearChat, } = useChat();
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
    const firtMessage: string = clear ? `Okay, from the beginning again.` : `Hello 👋🏾, welcome to my portfolio.`;
    sendMessage({ response: firtMessage }, 'aventuradev');
    sendMessage({ response: `Let's chat. Click the input message bubbles  💬  from bellow to know more about me.` }, 'aventuradev', 1000);
  }

  useEffect(() => {
    handleWelcomeMessage();
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollIntoView({ behavior: 'smooth' });
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
        <button onClick={handleClearChat} className='clear-chat-button'>Clear chat</button>
      </div>
      <div className='chat-conversation'>
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
      <div className='bottom'>
        {
          interactions.map(interaction => (
            <div
              key={interaction.name}
              onClick={() => sendAnswerMessage(interaction, 'viewer')}
              className='input-bubble'>
              {interaction.name} {interaction.icon}
            </div>
          ))
        }
      </div>
    </div>
  )
}
