import PropTypes from 'prop-types'; 

function Message({message,author}){
    return (
        <div className="flex bg-white rounded-lg p-2 text-gray-700 shadow-lg max-w-xl mt-3">
            <h3 className="font-bold">{author}</h3>: {message}
        </div>
    )
}
Message.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}
export default Message;