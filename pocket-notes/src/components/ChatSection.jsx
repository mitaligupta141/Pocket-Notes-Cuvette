import React, { useContext, useRef } from 'react'
import styles from './ChatSection.module.css'
import Message from './Message'
import { IoSend } from "react-icons/io5";
import { Appcontext } from '../Context/Appcontext';
import formatDateAndTime from '../data/formatDateandtime.js';
import { FaArrowLeftLong } from "react-icons/fa6";
import {color} from '../data/color.js'

function ChatSection({item,handleBackClick}) {
  const {notes,setNotes} =useContext(Appcontext);
  const user_text=useRef(null)
  const {date,time}=formatDateAndTime();
  const activecolor=color[item.color-1]
  const str = item.className.trim();; 
  const words = str.split(" ");
  const logo = words.length > 1 ? words[0][0] + words[1][0] : words[0][0];

  

  const handleEnterclick=()=>{
    let user_content=user_text.current.value
    if(!user_content){
      alert('Please enter your message first than press send button')
    }
    else{
      console.log(user_content);
      console.log(date,time);
      setNotes([...notes,{className:item.className,user_content:user_content,date:date,time:time}])
      user_text.current.value=""
    }
   
  }

  const handleEnterKeyPress=(e)=>{
    if(e.key==='Enter'){
      e.preventDefault();
      handleEnterclick()
    }
  }


  
  return (
    <div className={styles.container}>


      <div className={styles.header}>
      <FaArrowLeftLong className={styles.back_arrow} onClick={handleBackClick} size={25}/>
        <div className={styles.logo} style={{backgroundColor:activecolor}}>
       
          <p>{logo}</p>
        </div>
        <p className={styles.header_classname}>{str}</p>
      </div>

 
      

    
      <div className={styles.mid_section}>
        {notes.map((content,index)=>{
          if(content.className === item.className){
            return <Message key={index} content={content} />
          }
        })}

      </div>

     
     <div className={styles.footer}>
      <textarea className={styles.text_write} placeholder='Enter your text here...' ref={user_text} onKeyPress={handleEnterKeyPress}></textarea>
      <IoSend className={styles.send_icon} size={25} color='#ABABAB' onClick={handleEnterclick} />
     </div>

    
    </div>
  )
}

export default ChatSection