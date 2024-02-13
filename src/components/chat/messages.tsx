
export type Message = {
    name?: string;
    icon?: string;
    ask?: string;
    response: string;
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
        response: `Of course. Explore some of the projects I've passionately worked on here:`
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
        ask: `Nice Antony. I'd like to know more about your work experience.`,
        response: `Sure. Here is my work experience:`
    },
]