import { useState } from "react"
import { Interaction, chatMessage } from "../types/types";
import meniiuProjectCover from '../assets/meniiu-project.png'
import meniiuPortalProjectCover from '../assets/meniiu-portal-banner.png'
import CDCProjectCover from '../assets/CDC.jpg'


export const useChat = (chatRef: React.MutableRefObject<HTMLDivElement>) => {

    const [conversation, setConversation] = useState<chatMessage[]>([{ sender: '', message: '' }]);
    const [isTyping, setIsTyping] = useState(false);
    const [showProjectModal, setShowProjectModal] = useState<boolean>(false);
    const [project, setProject] = useState<string>('');

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
            scrollToMessage()
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
                scrollToMessage()
            }, timer);
            timer += 1000;
        }
    }

    const scrollToMessage = (): void => {
        if (chatRef.current) {
            setTimeout(() => {
                chatRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 500);
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
                    <h2>👨🏾‍💻 Web Frontend Software Developer</h2>
                    <p>Seguros Reservas</p>
                    <small>🗓️ Nov 2024 - Present | 📍 Santo Domingo, Dominican Republic</small><br /><br />
                    <p>Some project that I've worked on:</p><br />
                    <b>🖥️ Portal Intermediario Project — November, 2024 - Febraury, 2025</b>
                    <ul>
                        <li>Developed and integrated key user interfaces, ensuring seamless communication with provided APIs.</li>
                        <li>Improved maintainability by implementing best practices in Angular development.</li>
                        <li>Collaborated closely with backend teams to ensure data consistency and efficiency.</li>
                        <li>Utilized Git for version control and Azure DevOps for CI/CD, enabling efficient collaboration and deployment.</li>
                    </ul>
                    <i>Tech Stack: Angular 18, TypeScript.</i><br /><br />
                </div>,
                  <div>
                  <h2>👨🏾‍💻 Web Software Developer</h2>
                  <p>Instituto Dominicano de las Telecomunicaciones - INDOTEL</p>
                  <small>🗓️ Oct 2020 - Oct 2024 | 📍 Santo Domingo, Dominican Republic</small><br /><br />
                  <p>Some project that I've worked on:</p><br />
                  <b>🖥️ Intranet Project — July, 2022 - October, 2023</b>
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
                    <p><b>meniiu</b> is an administrative web platform for gastronomic 🍔 🍣 🍝 business, optimized and focused for intuitive and efficient use on mobile devices, where they can have their own virtual establishment 🤳🏽. This allows them to present their products dynamically, with prices, photos, descriptions and more.</p> <br />
                    <p><b>Currently used by multiple businesses</b>, handling the reception of hundreds of orders from their customers monthly and taking advantage of its multiple features. <a href="https://meniiu.com/#/Demo" target="_blank"><b>👉🏾 Try Demo here</b>.</a></p> <br />
                    <small><i>Stack: <b>React, Context, Redux, Firebase, Bootstrap</b> </i></small><br /><br />
                    <button className='project-button' onClick={() => { setShowProjectModal(!showProjectModal); setProject('meniiu') }}>Check more info</button>
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
                    <a href="https://meniiu.github.io" target="_blank"><b>👉🏾 Check portal here</b>.</a>
                    <ul>
                        <li><b>Email:</b> e@j.com</li>
                        <li><b>Password:</b> 123456</li>
                        <p>Every change will be reflected on the <a href="https://meniiu.com/#/Ejemplo" target="_blank"><b>👉🏾 meniiu client side</b>.</a> </p>
                    </ul>
                    <small><i>Stack: <b>React, Zustand, Firebase, CSS</b> </i></small><br /><br />
                    <button className='project-button' onClick={() => { setShowProjectModal(!showProjectModal); setProject('portal') }}>Check more info</button>
                </div>,
                <div>
                    <img className='project-image' src={CDCProjectCover} alt="project image" />
                    <p>The official website for the <b>Dominican Cleveland Club</b> serves as a comprehensive digital platform designed to connect and engage the Dominican community in Cleveland. This project highlights my expertise in web development, user experience design, and community-focused solutions.</p>
                    <p>Features:</p>
                    <ul>
                        <li>Basic Information.</li>
                        <li>Authetication.</li>
                        <li>Events manager.</li>
                        <li>Volunteer form.</li>
                    </ul>
                    <a href="https://clubdominicanocleveland.org" target="_blank"><b>👉🏾 Check website here</b>.</a><br/><br/>
                    <small><i>Stack: <b>React, Zustand, Firebase, CSS</b> </i></small><br /><br />
                    <button className='project-button' onClick={() => { setShowProjectModal(!showProjectModal); setProject('CDC') }}>Check more info</button>
                </div>,
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
                    <b>Typescript Course: Complete guide</b>
                    <p>🏫 Devtalles | 🗓️ 2024 | <i><a href="https://cursos.devtalles.com/certificates/ycnq4p98qt/" target="_blank">🔗 Show credential</a></i></p><br />
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
        interactions,conversation,
        startTyping, isTyping,
        sendMessage,answerMessage,
        clearChat,
        project,setProject,
        showProjectModal,setShowProjectModal
    }
}