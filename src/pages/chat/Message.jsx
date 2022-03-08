import PropTypes from 'prop-types';

function Message({ author, message, create_at }) {
    return (
        <div className="bloc bg-white rounded-lg p-2 text-gray-700 shadow-lg max-w-xl mt-3">
            <div className="flex jusntify-start font-bold">{author}</div>
            <div className="flex justify-between">
                <div className="text-gray-500 font-normal">{message}</div>
                <div className="flex justify-end italic font-normal">{create_at}</div>
            </div>
        </div>
    )
}
Message.propTypes = {
    message: PropTypes.string,
    author: PropTypes.string,
    create_at: PropTypes.string
}
export default Message;