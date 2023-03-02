import React,{useState,useEffect,useRef} from "react";

import './chat-body.scss'
export default function ChatBody(props:any){
    const listRef = useRef<HTMLUListElement | null>(null);
    const [allMessages,setAllMessages]:any=useState([]);
    const [allUsers,setAllUsers]:any=useState([]);

    const socketIO:any=props.socket
    const scrollToBottom = () => {
        listRef.current?.lastElementChild?.scrollIntoView({behavior:"smooth"});
    }
    useEffect(()=>{
        scrollToBottom();
    }, [allMessages,allUsers])

    socketIO.on('messageResponse', (data:any) => {
        setAllMessages([...allMessages, data])
    });
    socketIO.on('newUserResponse', (users:any) => {
        setAllUsers(users)       
    });
    socketIO.on('disconnected', (users:any) => {
        setAllUsers(users)       
    });
    return(
        <div className="w-100 d-flex justify-content-center align-items-center flex-row mb-3">
            <div className="chat-body w-25  border rounded me-1">
            {allUsers.map((user:any,i:any)=><p className="users" style={user.name?{backgroundColor:user.color}:{}} key={i}>{user.name}</p>)}
            </div>
            <div className="chat-body w-75  border rounded ms-1">
            <ul className="list-group list-group" ref={listRef}>
                {allMessages.map((li:any,i:any)=><li key={i} className="list-group-item border border-0 border border-0">
                    <div className="ms-2 me-auto">
                        <div className="wrapper"><span style={{color:li.color}} className="fw-bold">{li.userName}:</span> <span>{li.text}</span></div>
                    </div>
                </li>)}
            </ul>
            </div>
        </div>
    )
}