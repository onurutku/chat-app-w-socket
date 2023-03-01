import './who-are-you.scss'
import React,{useState} from 'react';
export default function WhoAreYou(props:any){
    const [userName,setUserName]=useState<string|number>('')
    const onChange=(e:any)=>{
        setUserName(e.target.value);
    }
    const onSubmit=(e:any)=>{
        e.preventDefault();
        const user={
            name:userName,
            id:props.props.id,
            color:`#${Math.floor(Math.random()*16777215).toString(16)}`
        }
        localStorage.setItem('user',JSON.stringify(user));
        props.userLogin(user);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
            <div className="input-group mb-3">
                  <input value={userName} onChange={onChange} type="text" className="form-control" placeholder="your name" />
                  <button type="submit" className="btn btn-primary">Join</button>
            </div>
            </form>
        </div>
    )
}