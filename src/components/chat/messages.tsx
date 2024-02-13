
type Message = {
    name: string;
    icon: string;
    message?: string;
    response?: string;
}
export const messages: Message[] = [
    {
        name: 'Experience',
        icon: '🧗🏽',
        message: `Nice Antony. I'd like to know more about your work experience.`,
        response: `Sure. Here is my work experience:`
    },
    {
        name: 'Projects',
        icon: '💻',
    },
    {
        name: 'Education',
        icon: '📚',
    },
    {
        name: 'Certifications',
        icon: '📄',
    },
]