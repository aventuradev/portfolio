export const ProjectModal = ({ show, setShow }: { show: boolean, setShow: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div
      className={`project-modal ${show ? 'show' : ''}`}
      onClick={() => setShow(!show)}
    >
      <div className="modal-content">
        <h2>meniiu</h2>

        <p>Is an <b>administrative web platform</b> for gastronomic business 🍔 🍣 🍝 where they can have their own virtual establishment 🤳🏽. This allows them to present their products dynamically, with prices, photos and descriptions.</p><br />
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
            <b>ℹ️ Information in one place</b><br />
            <small>Centralized information so that customers can easily find all the information they need about the business.</small>
            <div className="feature-images">
              <img src="https://clean-condition-bd4.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9641a867-3fa6-42c1-8471-85c7ae31f067%2Fdabab87c-cd3e-4e41-a823-3158836d828e%2FUntitled.png?table=block&id=a38e21fe-8c4d-40a5-9626-0def135bd462&spaceId=9641a867-3fa6-42c1-8471-85c7ae31f067&width=1500&userId=&cache=v2" alt="" />
              <img src='https://clean-condition-bd4.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9641a867-3fa6-42c1-8471-85c7ae31f067%2Ff7bdcd4b-874b-4f80-974e-d5840f9a2c08%2FUntitled.png?table=block&id=a8fb4b4e-2b3f-4588-9040-da9cf23c6917&spaceId=9641a867-3fa6-42c1-8471-85c7ae31f067&width=1490&userId=&cache=v2' alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
