import { useState } from "react"
import { useMoralis } from "react-moralis"

function SendMessage({endOfMessagesRef}) {
    const {user, Moralis} =useMoralis()
    const [message , setMessage] = useState("")
    const sendMessage = (e)=>{
        e.preventDefault();
        if(!message) return;

        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages()
        messages.save({
            message : message,
            username : user.getUsername(),
            ethAddress : user.get("ethAddress")
        }).then((message) => {

        }, (error) => {
            console.log(error)
        })

        endOfMessagesRef.current.scrollIntoView({behavior: 'smooth'})

        setMessage('');

    }
  return (
    <form className="flex fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-full border-blue-400 border-4 w-11/12">
        <input className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5 "
        placeholder={`Enter A Message ${user.getUsername()}...`}
        value={message}
        onChange={(e) => {
            setMessage(e.target.value)
        }}
        type="text" />
        <button className="font-bold text-pink-500"
                onClick={sendMessage}
                type="submit"
        >SendMessage</button>
    </form>
  )
}
export default SendMessage