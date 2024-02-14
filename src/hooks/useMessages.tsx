import { useState } from "react"
import { Interaction, chatMessage } from "../types/types"


export const useChat = () => {

    const [conversation, setConversation] = useState<chatMessage[]>([{ sender: '', message: '' }]);
    const [isTyping, setIsTyping] = useState(false);

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
        for (let res of message.response) {
            setTimeout(() => {
                setConversation(prevState => ([
                    ...prevState, { sender: '', message: res }
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
                    <small>🗓️ Oct 2020 - Present | 📍 Santo Domingo, Domincan Republic</small><br /><br />
                    <p>Some project that I've worked on:</p><br />
                    <b>Intranet Project— July, 2022 - October, 2023</b>
                    <ul>
                        <li>Improve gathering and management of information between departments by developing a web platform to manage internal business processes and redesigning and integrating available assets into the new platform.</li>
                        <li>Achieved a 43% reduction in daily average support cases by improving performance and eliminating bugs in existing applications.</li>
                        <li>Enhanced productivity in current processes by 34% through the development of new applications.</li>
                    </ul>
                    <i>Tech Stack: React, Express, Node, SQL Server.</i><br /><br />
                    <b>Series Negadas Project — January 2022 - April 2022</b>
                    <ul>
                        <li>Developed a web platform to consult IMEI status on the GSMA and national telecommunication provider’s record, Benefiting local businesses and the general public by enabling them to verify their mobile device's legitimacy.</li>
                        <li>Resolved 15% of design issues by simplifying the user process for requesting and obtaining desired information.</li>
                    </ul>
                    <i>Tech Stack: React, Express, Node, SQL Server.</i><br /><br />
                    <b>Mobile App INDOTEL Project — January 2021 - May, 2023</b>
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
            response: [<p>Of course. Explore some of the projects I've passionately worked on here:</p>]
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
                    <h3>React.js Course: Professional State Management</h3>
                    <p><b>🏫 Platzi</b> | 🗓️ 2022 | <i><a href="https://platzi.com/p/aventuradev/curso/2597-react-estado/diploma/detalle/" target="_blank">🔗 Show credential</a></i></p><br />
                    <h3>React.js Course: Render and Composition Patterns</h3>
                    <p><b>🏫 Platzi</b> | 🗓️ 2022 | <i><a href="https://platzi.com/p/aventuradev/curso/2457-react-patrones-render/diploma/detalle/" target="_blank">🔗 Show credential</a></i></p><br />
                    <h3>Data Structures Course with JavaScript</h3>
                    <p><b>🏫 Platzi</b> | 🗓️ 2022 | <i><a href="https://platzi.com/p/aventuradev/curso/2156-estructuras-datos/diploma/detalle/" target="_blank">🔗 Show credential</a></i></p><br />
                    <h3>Curso Profesional de Git y GitHub</h3>
                    <p><b>🏫 Platzi</b> | 🗓️ 2022 | <i><a href="https://platzi.com/p/aventuradev/curso/1557-git-github/diploma/detalle/" target="_blank">🔗 Show credential</a></i></p><br />
                    <h3>Firebase Course for Web</h3>
                    <p><b>🏫 Platzi</b> | 🗓️ 2022 | <i><a href="https://platzi.com/p/aventuradev/curso/1435-firebase-web/diploma/detalle/" target="_blank">🔗 Show credential</a></i></p>
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
        clearChat
    }
}