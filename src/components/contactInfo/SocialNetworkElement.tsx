import { IconType } from "react-icons"

export const SocialNetworkElement = ({ Icon, URL }: { Icon: IconType, URL: string }) => {
    return (
        <a href={URL} target="_blank">
            <div className='social-container'>
                <div className='sn-element'>
                    <Icon className='icon' />
                </div>
            </div>
        </a>
    )
}
