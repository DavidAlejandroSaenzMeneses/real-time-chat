import {useEffect} from 'react';
import io from 'socket.io-client';
import './assets/css/main.css';
import Chat from './pages/chat/Chat';

function App() {
    const URL_SERVER='http://localhost:3900'
    const socket = io(URL_SERVER);
  return (
    <div className="App w-screen h-screen bg-gray-200">
      <Chat socket={socket}/>
    </div>
  );
}

export default App;