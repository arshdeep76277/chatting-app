import React from 'react';
import './Sidebar.css';
import {useState,useEffect} from "react";
import {Avatar,IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import db from '../firebase';
import {useStateValue} from '../StateProvider';
const Sidebar=()=> {
    const [rooms,setRooms]=useState([]);
    const [{user},dispatch]=useStateValue();
    useEffect(() => {
        const unsubscribe= db.collection('rooms').onSnapshot(
            (snapshot)=>{
            setRooms(snapshot.docs.map((doc)=>({
                id:doc.id,
                data: doc.data(),
            }))
            )
        }
        );
        return ()=>{unsubscribe();}
    }, [])
    return (
        <div className="sidebar">
            
            <div className="sidebar_header">
                <Avatar src={user?.photoURL}/>
                <div className="sidebar_headerRight">
                    <IconButton> <DonutLargeIcon className="smaller"/></IconButton>
                    <IconButton> <ChatIcon className="smaller" /></IconButton>
                    <IconButton><MoreVertIcon className="smaller"/></IconButton>
                </div>
            </div>

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                     <SearchOutlined />
                    <input placeholder="search or start a chat"      type="text" />
                </div>
             
            </div>

            <div className="sidebar_chats">
                <SidebarChat addnewchat/>
                {
                    rooms.map(room=>(
                    <SidebarChat key={room.id} id={room.id}
                    name={room.data.name} />
                ))}
            </div>

        </div>
    )
}

export default Sidebar;