import "./ChatMessage.css"
const ChatMessage=({info,name,timestamp,isSender})=>{
    console.log(isSender);
    return (
        <div className={`chatmessage  ${isSender && "chatmessage_receiver"}`}>
            <p className="chatmessage_info">
                <span className="chatmessage_name">{name}</span>
                {info}
                <span className="chatmessage_timestamp">{new Date(timestamp?.toDate()).toString()}</span>
            </p>
        </div>
    )
}
export default ChatMessage; 