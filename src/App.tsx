import React,{useState,useEffect} from 'react';
import './App.scss'
import ChatBody from './components/chat-body/chat-body';
import ChatInput from './components/chat-input/chat-input';
import WhoAreYou from './components/who-are-you/who-are-you';
import * as io from "socket.io-client";


function App() {
  const socket = io.connect("https://outopaloglu.xyz",{
    secure:true
  });
  const [userLoggedIn,setUserLoggedIn]=useState();
  const userLogin=(user:any)=>{
    setUserLoggedIn(user);
  }
  useEffect(() => {
    if(localStorage.getItem('user')){
      setUserLoggedIn(JSON.parse(localStorage.getItem('user')!!));
    }
  }, [])
  
  if(!userLoggedIn){
    return(<div className='app-body'>
     <WhoAreYou userLogin={userLogin} props={socket}></WhoAreYou>
    </div>)
  }else{
    return (
      <div className='app-body'>
       <ChatBody socket={socket}></ChatBody><ChatInput props={socket}></ChatInput>
      </div>
    );
  }
}

export default App;
