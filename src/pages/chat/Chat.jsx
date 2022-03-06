import { useRef } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/solid';
import Header from '../../components/Header'
import Users from './Users.jsx';

export default function Chat() {
  //referencias DOM
  const messageRef = useRef();
  const sendMessage = (event) => {
    event.preventDefault();
    if (messageRef.current.value!=='') {
      alert('Enviando: ' + messageRef.current.value);
      messageRef.current.value = '';
    }
  }
  return (
    <>
      <Header />
      <div className="chat flex h-[90%] w-full">
        <aside className="left h-full w-[25%] md:w-2/6 bg-white">
          <Users />
        </aside>
        <section className="right h-full w-[75%] md:w-4/6">
          <div className="title font-bold text-gray-700 bg-amber-50 h-[90%]">Chat Room</div>
          <div className="send-bar flex bg-gray-200 h-[10%] w-full items-center justify-between">
            <div className="hidden lg:flex lg:w-1/6"></div>
            <form className="message-box flex w-full lg:w-5/6 h-full px-2 items-center justify-center" onSubmit={sendMessage}>
              <input className="h-5/6 w-[90%] rounded-lg px-3 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300" placeholder="Escribe un mensaje aquí" ref={messageRef}></input>
              <div className="flex w-[10%] item-center justify-center">
                <button><PaperAirplaneIcon className="h-6 w-6 text-indigo-500 transform rotate-90 lg:hover:rotate-45 lg:hover:r-translate-y-2 lg:hover:translate-x-2 transition duration-500" /></button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}
