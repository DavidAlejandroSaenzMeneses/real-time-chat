import {takeEvery} from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';

const handleNewMessage = function* handleNewMessage(params){
    yield takeEvery(types.ADD_MESSAGE,(action)=>{
        action.author = params.username
        params.socket.emit(action.type,action);
    });
}

export default handleNewMessage;