import { Chat } from "./components/chat/Chat"
import { ContactInfo } from "./components/contactInfo/ContactInfo"
import './styles/styles.css'
function App() {

  return (
    <main className="main">
      <ContactInfo />
      <Chat />
    </main>
  )
}

export default App
