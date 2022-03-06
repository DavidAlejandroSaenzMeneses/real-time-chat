import {UserIcon} from '@heroicons/react/solid';

export default function users() {
    const userList = ['Tesla','Peter','Stan','Musk','Tony','Brendan'];
    return (
        <section className="h-full w-full">
            <div className="titulo h-[10%] p-2 font-bold text-gray-700 border-b">Users Online</div>
            <div className="lista-usuarios h-[90%] w-full overflow-auto">
                {userList &&(
                    userList.map((user,i)=>{
                        return(
                            <div key={i} className="user-item block md:flex w-full md:h-16 border-y md:border-0">
                                <div className="user-foto flex w-full md:w-1/5 items-center justify-center py-1">
                                    <div className="content-foto flex bg-gray-300 w-11 h-11 rounded-full items-center justify-center overflow-hidden border-2 border-gray-300">
                                        <UserIcon className="h-11 w-11 text-white relative top-1"/>
                                    </div>
                                </div>
                                <div className="user-info flex w-full md:w-4/5 text-gray-800 font-bold md:border-y items-center justify-center md:justify-start">{user}</div>
                            </div>
                        )
                    })
                )}
            </div>
        </section>
    )
}
