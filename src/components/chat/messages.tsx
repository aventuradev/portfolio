

import { ReactElement } from "react";

export type Message = {
    name?: string;
    icon?: string;
    ask?: string;
    response: string | string[] | ReactElement;
}
export const messages: Message[] = [
    {
        name: 'Experience',
        icon: '🧗🏽',
        ask: `Nice Antony. I'd like to know about your work experience.`,
        response: `Absolutely! Here is a lowdown on my work journey:`
    },
    {
        name: 'Projects',
        icon: '💻',
        ask: `Antony, can you show me some of your projects as a frontend developer?`,
        response: <b>Of course. Explore some of the projects I've passionately worked on here:</b>
    },
    {
        name: 'Education',
        icon: '📚',
        ask: `I'm interested on your academic journey. Can you share your educational background.`,
        response: `Thanks for your interest. You can explore my educational achievements right here:`
    },
    {
        name: 'Certifications',
        icon: '📄',
        ask: `Can you share details about your certifications?.`,
        response: `Sure. I've dedicated time to earn certifications such as:`
    },
]