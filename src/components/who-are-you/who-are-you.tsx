import './who-are-you.scss'
import React,{useState,} from 'react';
export default function WhoAreYou(props:any){
    const [userName,setUserName]=useState<string|number>('')
    
    const onChange=(e:any)=>{
        setUserName(e.target.value);
    }
    const onSubmit=(e:any)=>{
        if(userName){
            props.func(userName)
        }
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
            <div className="input-group mb-3">
                  <input value={userName} onChange={onChange} type="text" className="form-control" placeholder="your name" />
                  <button disabled={!userName} type="submit" className="btn btn-primary ms-1">Join</button>
            </div>
            </form>
        </div>
    )
}