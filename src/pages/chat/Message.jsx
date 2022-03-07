import PropTypes from 'prop-types'; 

function Message({message,author}){
    return (
        <p className="bg-white rounded-lg p-2 text-gray-700 shadow-lg max-w-xl mt-3">
            <spam className="font-bold">{author}</spam>: {message}
        </p>
    )
}
Message.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}
export default Message;