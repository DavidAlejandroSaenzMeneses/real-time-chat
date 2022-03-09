import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { PaperAirplaneIcon } from '@heroicons/react/outline';
import Cookies from 'universal-cookie';

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const nickRef = useRef();
    const urlServer = 'http://localhost:3900/api/v1';
    const MySwal = withReactContent(Swal);
    const cookies = new Cookies();
    const navigate = useNavigate();
    useEffect(()=>{
        if(cookies.get('username')){
            navigate("/chat-room", { replace: true });
        }
    });
    const login = async (event) => {
        event.preventDefault();
        if (!userRef.current.value || !passwordRef.current.value) {
            return MySwal.fire('ERROR', 'Datos incompletos', 'warning');
        }
        try {
            await axios.post(`${urlServer}/login`, { user: userRef.current.value, password: passwordRef.current.value })
                .then(data => (data))
                .then(data => {
                    if (data.status === 200) {
                        const payload = data.data.userData;
                        cookies.set('idUser', payload._id, { path: '/' });
                        cookies.set('username', payload.username, { path: '/' });
                        cookies.set('name', payload.fullName, { path: '/' });
                        cookies.set('nickname', (nickRef.current.value!=='' ? nickRef.current.value: payload.nickname), { path: '/' });
                        navigate("/chat-room", { replace: true });

                    }
                })
        } catch (error) {
            MySwal.fire('ERROR', 'Por Favor verifique sus credenciales', 'error');
        }

    }
    return (
        <div className="content-primary flex w-full h-full item-center justify-end bg-indigo-300">
            <div className="login flex bg-gray-200/70 w-2/5 justify-center items-center">
                <form className="w-4/5" onSubmit={login}>
                    <div className="icono-login flex justify-center items-center py-4">
                        <h1 className="text-emerald-400 font-bold text-4xl">MyChat</h1>
                        <PaperAirplaneIcon className="h-12 w-12 text-indigo-500  transform rotate-45 relative -top-4" />
                    </div>
                    <div className="block w-full my-2">
                        <input type="text" ref={userRef} className="rounded-sm w-full px-2 h-12 focus:outline-none text-gray-700 focus:ring focus:ring-indigo-400" placeholder="Usuario" />
                    </div>
                    <div className="block w-full my-2">
                        <input type="password" ref={passwordRef} className="rounded-sm w-full px-2 h-12 focus:outline-none text-gray-700 focus:ring focus:ring-indigo-400" placeholder="Contraseña" />
                    </div>
                    <div className="block w-full my-2">
                        <input type="text" ref={nickRef} className="rounded-sm w-full px-2 h-12 focus:outline-none text-gray-700 focus:ring focus:ring-indigo-400" placeholder="Nick | Apodo"/>
                        <h3 className="text-gray-400 text-justify text-md bg-white/30 p-2 rounded-b-lg">Campo Nick No Obligatorio, Si No Lo Ingresa Se Tomara El Que Tiene Registrado Por Defecto.</h3>
                    </div>
                    <div className="flex justify-center w-full my-4">
                        <button type="submit" className="bg-green-400 rounded py-4 px-12 font-bold text-white">Iniciar Sesion</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
