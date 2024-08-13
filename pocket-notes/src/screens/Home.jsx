import React, {useRef, useState,useContext,useEffect} from 'react'
import styles from "./Home.module.css"
import DefaultNote from "../components/DefaultNote"
import GroupName from '../components/GroupName'
import Modal from '../../Modal'
import CreateClass from '../components/CreateClass'
import { Appcontext } from '../Context/Appcontext'
import ChatSection from '../components/ChatSection'

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const {class_data}=useContext(Appcontext);
  const [isChatShown,setisChatShown]=useState(null);
  const [isRightVisible, setIsRightVisible] = useState(true); 
  const [isLefttVisible, setIsLeftVisible] = useState(true); 
  const [isMobile, setIsMobile] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsRightVisible(false); 
    }
  }, [isMobile]);

  const toggleVisibility = () => {
    if (isMobile) {
      setIsRightVisible(true);
      setIsLeftVisible(false);
    }
  };
 

  const openModal = () => {
    setIsModalOpen(true);
  };


   
  const closeModal = () => {
    setIsModalOpen(false);
  };

  

 
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };



  const handleChatSectionClick = (item) => {
    setisChatShown(item)
    toggleVisibility()
    console.log(isChatShown);
  };

  
  const handleBackClick =()=>{
    if(isMobile){
      setIsLeftVisible((true))
      setIsRightVisible(false)
    }
    else{
      setisChatShown(null)
    }
     
  }
 

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('click', handleClickOutside, true);
    } else {
      document.removeEventListener('click', handleClickOutside, true);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isModalOpen]);

  return (
    <div className={styles.container}>
      { isLefttVisible && (<div className={styles.left}>
       <p className={styles.heading}>Pocket Notes</p>
       <div className={styles.class_name} > 
        {class_data.map((item,index)=>{
          return (
          <div key={index} className={styles.classname} onClick={()=>handleChatSectionClick(item)}>
            <GroupName key={index} item={item} />
          </div>
          )
        })}

        </div>
       <button className={styles.btn} onClick={()=>{setIsModalOpen(true)}}>+</button>
       {isModalOpen ? <Modal modalRef={modalRef} onClose={()=>{setIsModalOpen(false)}}><CreateClass onClose={()=>{setIsModalOpen(false)}}/></Modal> : null}
      </div> )}
      {isRightVisible && (<div className={styles.right}>
       {isChatShown ? <ChatSection  handleBackClick={handleBackClick}  item={isChatShown}/> : <DefaultNote/>}
      </div>)}
    </div>
  )
}

export default Home
