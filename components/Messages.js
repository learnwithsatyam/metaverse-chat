import { useRef } from "react";
import { ByMoralis , useMoralis , useMoralisQuery} from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";
function Messages() {
    // only show messages from last 15 minutes
    
    const MIN_DURATION = 15;

    const {user} = useMoralis()
    const endOfMessagesRef = useRef(null)
    const { data , loading , error } = useMoralisQuery(
        'Messages' , 
        (query) => query
        .ascending('createdAt')
        .greaterThan(
            'createdAt',
             new Date(Date.now() - 1000*60 * MIN_DURATION)
             ),
            [] , 
            {live : true}
    )
  return (
    <div className="pb-56">
        <div className="my-5">
            <ByMoralis style={{marginLeft : 'auto' , marginRight : 'auto'}} variant={"dark"} />
        </div>
        <div className="space-y-10 p-4">
            {/** each message */}
            {data.map(message => (
                <Message key={message.id} message={message} />
            ))}
            
        </div>
        <div className="flex justify-center">
            {/** send message button */}
            <SendMessage endOfMessagesRef = {endOfMessagesRef} />
        </div>
        <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
            <p>You are upto-date {user.getUsername()}!</p>
        </div>
    </div>
  )
}
export default Messages