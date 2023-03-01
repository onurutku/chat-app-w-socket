import React,{useState,useEffect} from "react";

import './chat-body.scss'
export default function ChatBody(props:any){
    const [allMessages,setAllMessages]:any=useState([]);
    const socketIO:any=props.socket
    socketIO.on('messageResponse', (data:any) => setAllMessages([...allMessages, data]));
    return(
        <div className="w-50 mb-4 chat-body border rounded">
            <ul className="list-group list-group">
                {allMessages.map((li:any,i:any)=><li key={i} className="list-group-item border border-0 border border-0">
                    <div className="ms-2 me-auto d-flex">
                        <div><span className="fw-bold">{li.userName}:</span> <span>{li.text}</span></div>
                    </div>
                </li>)}
            </ul>
        </div>
    )
}