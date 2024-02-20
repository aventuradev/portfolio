import { useState } from "react"
import { Interaction, chatMessage } from "../types/types";
import meniiuProjectCover from '../assets/meniiu-project.png'
import meniiuPortalProjectCover from '../assets/meniiu-portal-banner.png'


export const useChat = () => {

    const [conversation, setConversation] = useState<chatMessage[]>([{ sender: '', message: '' }]);
    const [isTyping, setIsTyping] = useState(false);
    const [showProjectModal, setShowProjectModal] = useState<boolean>(false);

    const startTyping = async (time: number = 1000): Promise<boolean> => {
        setIsTyping(true);
        return await new Promise((resolve) => {
            setTimeout(() => {
                setIsTyping(false);
                resolve(true)
            }, time);
        })
    }

    const sendMessage = (message: Interaction, sender: string, time: number = 100): void => {
        setTimeout(() => {
            setConversation(prevState => ([
                ...prevState, { sender, message: message.ask || message.response }
            ]))
        }, time);
    }

    const clearChat = (): void => {
        setConversation([{ sender: '', message: '' }]);
    }

    const answerMessage = (message: Interaction): void => {
        let timer: number = 0;
        for (const response of message.response) {
            setTimeout(() => {
                setConversation(prevState => ([
                    ...prevState, { sender: '', message: response }
                ]))
            }, timer);
            timer += 1000;
        }
    }

    const interactions: Interaction[] = [
        {
            name: 'Experience',
            icon: '🧗🏽',
            ask: `Nice Antony. I'd like to know about your work experience.`,
            response: [
                <p>Absolutely! Here is a lowdown on my work journey:</p>,
                <div>
                    <h2>👨🏾‍💻 Web Software Developer</h2>
                    <p>Instituto Dominicano de las Telecomunicaciones - INDOTEL</p>
                    <small>🗓️ Oct 2020 - Present | 📍 Santo Domingo, Dominican Republic</small><br /><br />
                    <p>Some project that I've worked on:</p><br />
                    <b>🖥️ Intranet Project— July, 2022 - October, 2023</b>
                    <ul>
                        <li>Improve gathering and management of information between departments by developing a web platform to manage internal business processes and redesigning and integrating available assets into the new platform.</li>
                        <li>Achieved a 43% reduction in daily average support cases by improving performance and eliminating bugs in existing applications.</li>
                        <li>Enhanced productivity in current processes by 34% through the development of new applications.</li>
                    </ul>
                    <i>Tech Stack: React, Express, Node, SQL Server.</i><br /><br />
                    <b>🖥️ Series Negadas Project — January 2022 - April 2022</b>
                    <ul>
                        <li>Developed a web platform to consult IMEI status on the GSMA and national telecommunication provider’s record, Benefiting local businesses and the general public by enabling them to verify their mobile device's legitimacy.</li>
                        <li>Resolved 15% of design issues by simplifying the user process for requesting and obtaining desired information.</li>
                    </ul>
                    <i>Tech Stack: React, Express, Node, SQL Server.</i><br /><br />
                    <b>📱 Mobile App INDOTEL Project — January 2021 - May, 2023</b>
                    <ul>
                        <li>Developed an Institutional mobile app in order to improve some services’ accessibility, display relevant institutional information, and increase user interaction with the institution.</li>
                    </ul>
                    <i>Tech Stack: React Native, Node, Express, SQL Server.</i>
                </div>
            ]
        },
        {
            name: 'Projects',
            icon: '💻',
            ask: `Antony, can you show me some of your projects as a frontend developer?`,
            response: [
                <p>Of course. Explore some of the projects I've passionately worked on here:</p>,
                <div>
                    <img className='project-image' src={meniiuProjectCover} alt="project image" />
                    <p><b>meniiu</b> is an administrative web platform for gastronomic business 🍔 🍣 🍝 where they can have their own virtual establishment 🤳🏽. This allows them to present their products dynamically, with prices, photos and descriptions.</p> <br />
                    <p>Businesses can also centralize all communication channels, such as Instagram, Facebook, WhatsApp, etc., so that their customers can contact, make suggestions, follow, locate the business, and place orders that go directly to their WhatsApp.</p><br />
                    <small><i>Stack: <b>React, Redux, Firebase, Bootstrap</b> </i></small><br /><br />
                    <button className='project-button' onClick={()=>setShowProjectModal(!showProjectModal)}>Check more info</button>
                </div>,
                <div>
                    <img className='project-image' src={meniiuPortalProjectCover} alt="project image" />
                    <p>Business has complete control of their meniiu thanks to the <b>meniiu Business Portal</b> that can be accessed via computer 💻 or mobile 📱 to:</p>
                    <ul>
                        <li>Customize how the menu looks.</li>
                        <li>Modify, add, or remove items.</li>
                        <li>Modify, add, or remove sections and categories.</li>
                        <li>Schedule management for order taking.</li>
                        <li>View monthly reports, and more.</li>

                    </ul>
                    <small><i>Stack: <b>React, Zustand, Firebase, CSS</b> </i></small><br /><br />
                    <button className='project-button' onClick={()=>setShowProjectModal(!showProjectModal)}>Check more info</button>
                </div>
            ]
        },
        {
            name: 'Education',
            icon: '📚',
            ask: `I'm interested on your academic journey. Can you share your educational background.`,
            response: [
                <p>Thanks for your interest. You can explore my educational achievements right here:</p>,
                <div>
                    <h2>👨🏾‍💻 Software Development Technologist</h2>
                    <small><i>Bachelor of Technology - BTech, Computer Software Engineering</i></small><br />
                    <p><b>📍 Instituto Tecnológico de las Américas ITLA</b> | 🗓️ 2017 - 2020</p> <br />
                    <h2>👷🏾‍♂️ Industrial Engineer</h2>
                    <small><i>Bachelor's degree - Industrial Engineering</i></small><br />
                    <p><b>📍 Universidad Central del Este UCE</b> | 🗓️ 2012 - 2017</p>
                </div>
            ]
        },
        {
            name: 'Certifications',
            icon: '📄',
            ask: `Can you share details about your certifications?`,
            response: [
                <p>Sure. I've dedicated time to earn certifications such as:</p>,
                <div>
                    <b>React.js Course: Professional State Management</b>
                    <p>🏫 Platzi | 🗓️ 2022 | <i><a href="https://platzi.com/p/aventuradev/curso/2597-react-estado/diploma/detalle/" target="_blank">🔗 Show credential</a></i></p><br />
                    <b>React.js Course: Render and Composition Patterns</b>
                    <p>🏫 Platzi | 🗓️ 2022 | <i><a href="https://platzi.com/p/aventuradev/curso/2457-react-patrones-render/diploma/detalle/" target="_blank">🔗 Show credential</a></i></p><br />
                    <b>Data Structures Course with JavaScript</b>
                    <p>🏫 Platzi | 🗓️ 2022 | <i><a href="https://platzi.com/p/aventuradev/curso/2156-estructuras-datos/diploma/detalle/" target="_blank">🔗 Show credential</a></i></p><br />
                    <b>Curso Profesional de Git y GitHub</b>
                    <p>🏫 Platzi | 🗓️ 2022 | <i><a href="https://platzi.com/p/aventuradev/curso/1557-git-github/diploma/detalle/" target="_blank">🔗 Show credential</a></i></p><br />
                    <b>Firebase Course for Web</b>
                    <p>🏫 Platzi | 🗓️ 2022 | <i><a href="https://platzi.com/p/aventuradev/curso/1435-firebase-web/diploma/detalle/" target="_blank">🔗 Show credential</a></i></p>
                </div>
            ]
        },
    ]


    return {
        interactions,
        conversation,
        setConversation,
        startTyping,
        isTyping,
        sendMessage,
        answerMessage,
        clearChat,
        showProjectModal,
        setShowProjectModal

    }
}