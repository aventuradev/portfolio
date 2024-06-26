import { useEffect, useRef, useState } from 'react';
import profilePicture from '../../assets/profile-picture.jpeg';
import { Typing } from './Typing';
import { useChat } from '../../hooks/useChat';
import { Interaction } from '../../types/types';
import { FaCircleInfo } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { ProjectModal } from './ProjectModal';
import { projectMeniiu, projectMeniiuPortal, projectCDC } from './Projects';

export const Chat = () => {
  const chatRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const {
    conversation, interactions,
    isTyping, startTyping,
    sendMessage, answerMessage,
    clearChat,
    project, setProject,
    showProjectModal, setShowProjectModal
  } = useChat(chatRef);

  const [openBottom, setOpenBottom] = useState<boolean>(false);

  const handleClearChat = (): void => {
    clearChat();
    handleWelcomeMessage(500, true);
  }
  const activeProject = {
    title: project === 'meniiu' ? projectMeniiu()[0]
      : project === 'portal' ? projectMeniiuPortal()[0]
        : project === 'CDC' ? projectCDC()[0]
          : '',
    text: project === 'meniiu' ? projectMeniiu()[1]
      : project === 'portal' ? projectMeniiuPortal()[1]
        : project === 'CDC' ? projectCDC()[1]
          : <></>

  }

  const sendAnswerMessage = (message: Interaction, sender: string, time: number = 500): void => {
    if (isTyping) return;

    sendMessage(message, sender, time); // Question
    startTyping(time * 4);

    setTimeout(async () => {
      answerMessage(message); // Answer 1 second after question
    }, time * 4);
  }

  const handleWelcomeMessage = async (time: number = 5000, clear: boolean = false): Promise<void> => {
    if (!clear && conversation.length > 1) return;
    await startTyping(time);
    const firtMessage: string = clear ? `Okay, from the beginning again.` : `Hello, I'm Antony 👋🏾 a frontend developer. Welcome to my portfolio.`;
    sendMessage({ response: firtMessage }, 'aventuradev');
    sendMessage({ response: `Let's chat! Click the input message bubbles  💬  from bellow to know more about me.` }, 'aventuradev', 1000);
  }
  const handleOpenBottom = (): void => {
    setOpenBottom(!openBottom);
  }

  const handleOpenInfo = () => {
    const sideBanner: Element | null = document.querySelector('.contact-info');
    sideBanner?.classList.toggle('open');
    const overlay: Element | null = document.querySelector('.overlay');
    overlay?.classList.toggle('open');
  }

  useEffect(() => {
    handleWelcomeMessage(3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="chat animate__animated animate__fadeInUp animate__delay-1s">
      <div className="top">
        <div className='chat-contact-info'>
          <img src={profilePicture} alt="Antony Ventura Picture" />
          <div>
            <p>Antony Ventura 💻</p>
            {isTyping && (<Typing />)}
          </div>
        </div>
        <button onClick={handleClearChat} className='clear-chat-button'><abbr title="Clear chat"><RiDeleteBin5Fill size={25} /></abbr></button>
        <button onClick={handleOpenInfo} className='about-me-button'><FaCircleInfo size={25} /></button>
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
              onClick={() => { sendAnswerMessage(interaction, 'viewer'); handleOpenBottom() }}
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
            <button onClick={() => { handleClearChat(); handleOpenBottom(); }}>Clear chat 🧹</button>
            <button onClick={handleOpenBottom}>Close  🔽</button>
          </div>
        </div>
      </div>

      <ProjectModal
        show={showProjectModal}
        setShow={setShowProjectModal}
        setProject={setProject} title={activeProject.title}
      >
        {activeProject.text}
      </ProjectModal>
    </div>
  )
}
