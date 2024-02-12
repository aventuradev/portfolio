import { IconType } from "react-icons"

export const SocialNetworkElement = ({ Icon }: {Icon: IconType}) => {
    return (
        <div className='social-container'>
            <div className='sn-element'>
                <Icon className='icon' />
            </div>
        </div>
    )
}
