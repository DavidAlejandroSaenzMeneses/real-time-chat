import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Message from './Message';

function MessageList() {
    let messages = useSelector(state => state.messages);
    return (
        <section className="container-messages flex w-full font-bold bg-amber-50 h-[90%] justify-center">
            <div className="message-list w-4/5 p-2">
                <ul>
                    {messages &&
                        messages.map((message, i) => (
                            <Message key={message.id} {...message} />
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
/*MessageList.propTypes = {
    message: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}*/
MessageList.propTypes = {
    message: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            message: PropTypes.string,
            author: PropTypes.string
        })
    )
}

export default MessageList;