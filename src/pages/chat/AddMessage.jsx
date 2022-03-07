import { useRef } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../actions';

function AddMessage(props) {
    const dispatch = useDispatch();
    //referencias DOM
    const messageRef = useRef();
    const sendMessage = async (event) => {
        event.preventDefault();
        if (messageRef.current.value !== '') {
            try {
                await props.socket.emit('send message', messageRef.current.value, (res) => {
                    if (res !== true) {
                        dispatch(addMessage(res, 'Me'));
                    } else {
                        dispatch(addMessage(messageRef.current.value, 'Me'));
                        messageRef.current.value = '';
                    }
                });
                
            } catch (error) {
                dispatch(addMessage('mensaje no enviado', 'Me'));
            }
        }
    }
    return (
        <div className="send-bar flex bg-gray-200 h-[10%] w-full items-center justify-between">
            <div className="hidden lg:flex lg:w-1/6"></div>
            <form className="message-box flex w-full lg:w-5/6 h-full px-2 items-center justify-center" onSubmit={sendMessage}>
                <input className="h-5/6 w-[90%] rounded-lg px-3 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300" placeholder="Escribe un mensaje aquí" ref={messageRef}></input>
                <div className="flex w-[10%] item-center justify-center">
                    <button><PaperAirplaneIcon className="h-6 w-6 text-indigo-500 transform rotate-90 lg:hover:rotate-45 lg:hover:r-translate-y-2 lg:hover:translate-x-2 transition duration-500" /></button>
                </div>
            </form>
        </div>
    )
}
/*AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired
}*/
AddMessage.propTypes = {
    dispatch: PropTypes.func
}
export default AddMessage;