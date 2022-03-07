import * as types from '../constants/ActionTypes';
import {addUser, messageReceived,populateUsesList} from '../actions';
import io from 'socket.io-client';

const setupSockets = (dispatch, username)=>{
    const URL_SERVER='http://localhost:3900'
    const socket = io(URL_SERVER);

    socket.emit({
        type:type.ADD_USER,
        name:username
    })

    socket.on(type.ADD_USER,(user)=>{
        dispatch(addUser(user.name));
    });

    socket.on(type.ADD_MESSAGE,(message)=>{
        dispatch(addUser(users.name));
    })

    socket.on(USER_LIST,(users)=>{
        dispatch(populateUsesList(users));
    })
}

export default setupSockets;