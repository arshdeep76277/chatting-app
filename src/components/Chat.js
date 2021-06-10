import { Avatar } from '@material-ui/core'
import './Chat.css'
import {useEffect,useState} from 'react';
import ChatMessage from './ChatMessage';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import {useParams} from "react-router-dom";
import db from '../firebase';
import { useStateValue } from '../StateProvider';
import firebase from "firebase";

const Chat =()=>{
    const {roomId}=useParams();
    const [input,setInput]=useState("");
    const [messages, setmessages] = useState([]);
    const [{user},]=useStateValue();
    const [seed, setSeed] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, []);
    const sendMessage=(e)=>{
        e.preventDefault();
        db.collection('rooms').doc(roomId).collection('messages').add({
            message:input,
            name:user.displayName, 
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    }
    
    const [roomName,setRoomName]=useState("");
    useEffect(()=>{
       if(roomId){
          db.collection('rooms').doc(roomId).onSnapshot((snapShot)=>
            setRoomName(snapShot.data().name));

            db.collection("rooms").doc(roomId).collection('messages').orderBy('timestamp','asc').onSnapshot(snapShot=>{setmessages(snapShot.docs.map(doc=>doc.data()));
            });
       }
    },[roomId]);


    return (
        <div className="chat">
            <div className="chat_header">
                 <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                 <h1>{roomName}</h1>
            </div>
            <div className="chat_message" >
                {messages.map(message=>(<ChatMessage isSender={`${message.name===user.displayName && 1}`} name={message.name} info={message.message} timestamp={message.timestamp} />))}
                
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder="Type a message" />
                    <button type="submit" onClick={sendMessage}>send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}
export default Chat;