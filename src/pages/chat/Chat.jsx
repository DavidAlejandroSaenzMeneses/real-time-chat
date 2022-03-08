import Header from '../../components/Header'
import Users from './Users';
import MessageList from './MessageList'
import AddMessage from './AddMessage';

export default function Chat() {
  return (
    <>
      <Header />
      <div className="chat flex h-[90%] w-full">
        <aside className="left h-full w-[25%] md:w-2/6 bg-white">
          <Users />
        </aside>
        <section className="right h-full w-[75%] md:w-4/6">
          <MessageList />
          <AddMessage/>
        </section>
      </div>
    </>
  )
}
