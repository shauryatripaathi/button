import { useState } from 'react';
import EmojiGrid from '../EmojiGrid';
import SearchBar from '../SearchBar';
import './style.css';
import Nav from '../Nav';

function EmojiApp(){
    const[text,setText] = useState("");
    const[display,setDisplay] = useState("block");
    const handleChange = (e)=>{
        setText(e.target.value)
    }
    const handleClick = ()=>{
        
    }

    return(
        <>
        <div className="navBar">
            <SearchBar value = {text} handleChange = {handleChange} />
            <Nav icon = "😄" action = {()=>{setText("face")}}/>
            <Nav icon = "🐴" action = {()=>{setText("animal")}}/>
            <Nav icon = "🍜" action = {()=>{setText("face")}}/>
            <Nav icon = "😄" action = {()=>{setText("face")}}/>
            <Nav icon = "😄" action = {()=>{setText("face")}}/>
        </div>
        <div className='emojiList'>
            <EmojiGrid text = {text} display = {display}/>
        </div>
        </>
    )
}
export default EmojiApp;