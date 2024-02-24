// import meniiuProjectCover from '../assets/meniiu-project.png'
import meniiuProjectCover from '../../assets/meniiu-project.png'
import meniiuPortalProjectCover from '../../assets/meniiu-portal-banner.png'

export const projectMeniiu = (): [string, JSX.Element] => {
    return [
        'meniiu Digital',
        <>
            <img className='project-image' src={meniiuProjectCover} alt="project image" />
            <small><i>Stack: <b>React, Zustand, Firebase, CSS</b> </i></small><br /><br />
            <p><b>meniiu is an administrative web platform</b> for gastronomic business 🍔 🍣 🍝 where they can have their own virtual establishment 🤳🏽. This allows them to present their products dynamically, with prices, photos and descriptions.</p><br />
            <p>Businesses can also centralize all communication channels, such as Instagram, Facebook, WhatsApp, etc., so that their customers can contact, make suggestions, follow, locate the business, and place orders that go directly to their WhatsApp.</p><br />
            <p><b>Currently used by multiple businesses</b>, handling the reception of hundreds of orders from their customers monthly and taking advantage of its multiple features. <a href="https://meniiu.com/#/Demo" target="_blank"><b>👉🏾 Try Demo here</b>.</a></p> <br />
            <h3>Features</h3>
            <div className="project-features">
                <div className="feature">
                    <b>🍱 Dynamic items presentation</b><br />
                    <small>Display dishes and items in an attractive and dynamic manner with vibrant photos and enticing descriptions to give your customers a clear idea of what you offer.</small>
                    <div className="feature-images">
                        <img src="https://clean-condition-bd4.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9641a867-3fa6-42c1-8471-85c7ae31f067%2F073892cc-4e30-4051-bfa0-882a87527d61%2FUntitled.png?table=block&id=a8fa832c-fe5c-4e2d-aa64-798890de0b42&spaceId=9641a867-3fa6-42c1-8471-85c7ae31f067&width=580&userId=&cache=v2" alt="" />
                        <img src='https://clean-condition-bd4.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9641a867-3fa6-42c1-8471-85c7ae31f067%2F661fd5db-a3bf-4a92-b5e7-1c8576a4a2d8%2FUntitled.png?table=block&id=d961b40e-cac9-4399-bc0b-40fd9d9264a2&spaceId=9641a867-3fa6-42c1-8471-85c7ae31f067&width=670&userId=&cache=v2' alt="" />
                        <img src='https://clean-condition-bd4.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9641a867-3fa6-42c1-8471-85c7ae31f067%2Fc5b0eabd-0c51-4407-8d9c-b45e4422e500%2FUntitled.png?table=block&id=cb0ed2ff-6c7e-497a-ba20-ec863e468374&spaceId=9641a867-3fa6-42c1-8471-85c7ae31f067&width=780&userId=&cache=v2' alt="" />
                    </div>
                </div>
                <div className="feature">
                    <b>📲 Receive orders directly through WhatsApp</b><br />
                    <small>Customers have the opportunity to order directly through the platform, whether for delivery, takeout, or dining in, which facilitates communication and the ordering process.</small>
                    <div className="feature-images">
                        <img src="https://clean-condition-bd4.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9641a867-3fa6-42c1-8471-85c7ae31f067%2Fe0164aca-f45c-4b00-be02-cd3d0163a1e6%2FUntitled.png?table=block&id=eb3b623f-cf48-40db-a641-0df4449cd140&spaceId=9641a867-3fa6-42c1-8471-85c7ae31f067&width=1490&userId=&cache=v2" alt="" />
                        <img src='https://clean-condition-bd4.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9641a867-3fa6-42c1-8471-85c7ae31f067%2Fe2834edd-8718-46ce-b8a6-5119225badc7%2FUntitled.png?table=block&id=bc67782c-9eaa-41ba-b1e5-c669de341cac&spaceId=9641a867-3fa6-42c1-8471-85c7ae31f067&width=1480&userId=&cache=v2' alt="" />
                        <img src='https://clean-condition-bd4.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9641a867-3fa6-42c1-8471-85c7ae31f067%2F489dce01-7b01-4207-bba7-a88f003c51c2%2FUntitled.png?table=block&id=be656696-f0fc-4d13-ad61-db0fad8ef2b5&spaceId=9641a867-3fa6-42c1-8471-85c7ae31f067&width=990&userId=&cache=v2' alt="" />
                    </div>
                </div>
                <div className="feature">
                    <b>ℹ️ Information in one place and 📩 Suggestion mailbox</b><br />
                    <small>Centralized information so that customers can easily find all the information they need about the business. And the suggestions mailbox allows business owners to receive direct feedback through email, which is invaluable for improvement and growth.</small>
                    <div className="feature-images">
                        <img src="https://clean-condition-bd4.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9641a867-3fa6-42c1-8471-85c7ae31f067%2Fdabab87c-cd3e-4e41-a823-3158836d828e%2FUntitled.png?table=block&id=a38e21fe-8c4d-40a5-9626-0def135bd462&spaceId=9641a867-3fa6-42c1-8471-85c7ae31f067&width=1500&userId=&cache=v2" alt="" />
                        <img src='https://clean-condition-bd4.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9641a867-3fa6-42c1-8471-85c7ae31f067%2Ff7bdcd4b-874b-4f80-974e-d5840f9a2c08%2FUntitled.png?table=block&id=a8fb4b4e-2b3f-4588-9040-da9cf23c6917&spaceId=9641a867-3fa6-42c1-8471-85c7ae31f067&width=1490&userId=&cache=v2' alt="" />
                        <img src='https://clean-condition-bd4.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9641a867-3fa6-42c1-8471-85c7ae31f067%2F43a9c26d-5591-4b38-a5cc-7fae85174772%2FUntitled.png?table=block&id=6948e653-3b2f-4e4e-8324-c97bdee0b808&spaceId=9641a867-3fa6-42c1-8471-85c7ae31f067&width=670&userId=&cache=v2' alt="" />
                    </div>
                </div>
            </div>

        </>
    ]
}

export const projectMeniiuPortal = (): [string, JSX.Element] => {
    return [
        'meniiu Portal',
        <>
            <img className='project-image' src={meniiuPortalProjectCover} alt="project image" />
            <small><i>Stack: <b>React, Zustand, Firebase, CSS</b> </i></small><br /><br />
            <p>Business has complete control of their meniiu thanks to the <b>meniiu Business Portal</b> that can be accessed via computer 💻 or mobile 📱 to:</p>
            <ul>
                <li>Customize how the menu looks.</li>
                <li>Modify, add, or remove items.</li>
                <li>Modify, add, or remove sections and categories.</li>
                <li>Schedule management for order taking.</li>
                <li>View monthly reports, and more.</li>
            </ul>
            <div className="project-features">
                <div className="feature">
                    <b>⚙️ Configurations</b><br />
                    <small>The portal's compatibility with both computers and mobile devices adds an extra layer of convenience, allowing business owners and managers to manage their menus anytime, anywhere. This flexibility is particularly valuable in the fast-paced and dynamic restaurant industry, where adaptability is key to staying competitive.</small>
                    <div className="feature-images">
                        <img src="https://clean-condition-bd4.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9641a867-3fa6-42c1-8471-85c7ae31f067%2F88a2c9aa-be84-4371-ac58-79071a5e3887%2FUntitled.png?table=block&id=4131fa69-a24e-4eaf-b9d3-3db1c04bb7ba&spaceId=9641a867-3fa6-42c1-8471-85c7ae31f067&width=1480&userId=&cache=v2" alt="" />
                        <img src='https://clean-condition-bd4.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9641a867-3fa6-42c1-8471-85c7ae31f067%2F27a064cb-bfb7-4225-a26b-5b858c845c14%2FUntitled.png?table=block&id=6707ddf6-eed1-42eb-a1a7-843f665cce51&spaceId=9641a867-3fa6-42c1-8471-85c7ae31f067&width=1480&userId=&cache=v2' alt="" />
                        <img src="https://clean-condition-bd4.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9641a867-3fa6-42c1-8471-85c7ae31f067%2F7feecb5f-94f9-4d5d-89ca-228f9213bf7f%2FUntitled.png?table=block&id=79bfc0ae-94e0-476a-8d1e-91b859fa49e5&spaceId=9641a867-3fa6-42c1-8471-85c7ae31f067&width=1490&userId=&cache=v2" alt="" />
                        <img src='https://clean-condition-bd4.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9641a867-3fa6-42c1-8471-85c7ae31f067%2F7d45a7ef-af89-4240-bfc2-ec21fee433c0%2FUntitled.png?table=block&id=2f7f206e-62cd-4a40-b83b-d3cb2d3743d6&spaceId=9641a867-3fa6-42c1-8471-85c7ae31f067&width=1480&userId=&cache=v2' alt="" />
                        <img src='https://clean-condition-bd4.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9641a867-3fa6-42c1-8471-85c7ae31f067%2Fc181c7d1-1b50-463d-aed2-1a6c876b571b%2FUntitled.png?table=block&id=55968008-b4bf-4b9a-bb6c-dfd47cfbedad&spaceId=9641a867-3fa6-42c1-8471-85c7ae31f067&width=1490&userId=&cache=v2' alt="" />
                        <img src='https://clean-condition-bd4.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9641a867-3fa6-42c1-8471-85c7ae31f067%2F180b8733-7b2d-4b8c-903e-b8b0f167092c%2FUntitled.png?table=block&id=ecad697c-523c-4c15-905d-ba028200428c&spaceId=9641a867-3fa6-42c1-8471-85c7ae31f067&width=1490&userId=&cache=v2' alt="" />
                    </div>
                </div>
                <div className="feature">
                    <b>⚒️ Tools</b><br />
                    <small>The platform's user-friendly design ensures that even those without extensive technical expertise can navigate and leverage its features effectively.</small>
                    <div className="feature-images">
                        <img src="https://clean-condition-bd4.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9641a867-3fa6-42c1-8471-85c7ae31f067%2F7a47ab73-def8-4628-a07e-b21390c7cf64%2FUntitled.png?table=block&id=9b6e5701-312f-4a52-8cf7-bd75a3bcc3ad&spaceId=9641a867-3fa6-42c1-8471-85c7ae31f067&width=1480&userId=&cache=v2" alt="" />
                        <img src='https://clean-condition-bd4.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9641a867-3fa6-42c1-8471-85c7ae31f067%2Fbeaabdc6-4eb8-4605-be78-ae329f4b7c40%2FUntitled.png?table=block&id=7ec69665-f2d8-441f-b212-79813bf3719c&spaceId=9641a867-3fa6-42c1-8471-85c7ae31f067&width=1480&userId=&cache=v2' alt="" />
                        <img src="https://clean-condition-bd4.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9641a867-3fa6-42c1-8471-85c7ae31f067%2Fb17f8d25-7936-4db9-ba0c-4aaf37475cd0%2FUntitled.png?table=block&id=4e9513e9-b2a4-4cd6-b064-77fc3ee1f963&spaceId=9641a867-3fa6-42c1-8471-85c7ae31f067&width=1490&userId=&cache=v2" alt="" />
                    </div>
                </div>
            </div>
        </>
    ]
}
