import React,{useState,useEffect} from 'react';
import './App.scss'
import ChatBody from './components/chat-body/chat-body';
import ChatInput from './components/chat-input/chat-input';
import WhoAreYou from './components/who-are-you/who-are-you';
import * as io from "socket.io-client";

function App() {
  
  const [userName,setUserName]:any=useState(JSON.parse(localStorage.getItem('user')!!)?.name?JSON.parse(localStorage.getItem('user')!!)?.name:'');
  const [socket,setState]:any=useState(io.connect("https://outopaloglu.xyz",{
      secure:true
    }));
  const [allUsers,setAllUsers]:any=useState() 
  const setName=(name:string)=>{
    setUserName(name)
    let user = JSON.parse(localStorage.getItem('user')!!);
    user.name=name;
    localStorage.setItem('user',JSON.stringify(user));
    socket.emit('newUser',user);
  }
    socket.on('connect', () => {
      const user={
            name:`${userName?userName:""}`,
            id:socket.id,
            color:`#${Math.floor(Math.random()*16777215).toString(16)}`
        }
        localStorage.setItem('user',JSON.stringify(user))
        socket.emit('newUser',user);
    });
    return(<div className='app-body'>
      <h1 className='mb-5 fw-bold'>SIPEŞIL ÇET</h1>
      {!userName?<div className='w-75'><WhoAreYou props={socket} func={setName}></WhoAreYou></div>:<div className='w-75'><ChatBody socket={socket} users={allUsers}></ChatBody><ChatInput props={socket}></ChatInput></div>}
    </div>)
}
export default App;
