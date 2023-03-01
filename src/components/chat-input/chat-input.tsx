import React,{useState} from "react";
import './chat-input.scss'
export default function ChatInput(props:any){
    const [message,setMessage]=useState<string|number>("");
    const user=JSON.parse(localStorage.getItem('user')!!)
    const onChange=(e:any)=>{
        setMessage(e.target.value)
    }
    const onSubmit=(e:any)=>{
        props.props.emit('message', {
            text: message,
            userName:user.name,
            id:props.props.id
        });
        setMessage('');
        e.preventDefault();
    }
    return(
        <div className="w-50">
            <form onSubmit={onSubmit}>
            <div className="input-group mb-3">
                  <input value={message} onChange={onChange} type="text" className="form-control" placeholder="message" />
                  <button type="submit" className="btn btn-primary">Send</button>
            </div>
            </form>
        </div>
    )
}