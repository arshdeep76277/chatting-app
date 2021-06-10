import './SidebarChat.css';
import {Avatar} from '@material-ui/core';
import {useState,useEffect} from 'react';
import db from '../firebase';
import {Link} from 'react-router-dom';

const SidebarChat=({addnewchat,name,id})=>{
    const [seed, setSeed] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, []);
    const startachat=()=>{
        const chatName=prompt("enter the room name");
        if(chatName)
        {
           db.collection("rooms").add({
            name:chatName,
           })
        }
    }
    
    return !addnewchat?(
        <Link to={`/rooms/${id}`}>
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}  />   
         <div className="sidebarChat_info">
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
        </div>
        </Link>
    ):(
        <div className="sidearChat" onClick={startachat}>
            <h3>Add a new chat</h3>
        </div>
    )
}
export default SidebarChat;