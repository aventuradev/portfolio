import { Chat } from './components/chat/Chat';
import { ContactInfo } from './components/contactInfo/ContactInfo';
import './styles/styles.css';
import './styles/chat.css';
import './styles/contactInfo.css';
import 'animate.css';

function App() {

  return (
    <main className='main'>
      <ContactInfo />
      <Chat />
    </main>
  )
}

export default App
