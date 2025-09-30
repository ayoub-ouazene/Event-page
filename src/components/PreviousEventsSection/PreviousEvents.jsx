import './PreviousEvents.css'
import PreviousEventImg from './PreviousEventImg.jsx'
import PrevImg from "../../assets/gdg-event-photo.png"
import { useState } from 'react'

import RightImg from '../../assets/gdg-right-arrow.png'
import LeftImg from '../../assets/gdg-left-arrow.png'

const PreviousEvents = ()=>
{

  const [ index  , setIndex ] = useState(0);

    const PrevEvents = [
    {
      img : {PrevImg},
      title: "GDG Quest 3.0",
      date :  "23 Feb 2025",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quibusdam quis, itaque inventore doloribus similique iusto a quae fuga esse, et unde facilis exercitationem, non odio aperiam voluptatibus ipsam ad!"
    },

     {
      img : {PrevImg},
      title: "GDG Quest 2.0",
      date :  "23 Feb 2025",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quibusdam quis, itaque inventore doloribus similique iusto a quae fuga esse, et unde facilis exercitationem, non odio aperiam voluptatibus ipsam ad!"
    },

     {
      img : {PrevImg},
      title: "GDG Quest 1.0",
      date :  "23 Feb 2025",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quibusdam quis, itaque inventore doloribus similique iusto a quae fuga esse, et unde facilis exercitationem, non odio aperiam voluptatibus ipsam ad!"
    },

     {
      img : {PrevImg},
      title: "GDG Quest 0.0",
      date :  "23 Feb 2025",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quibusdam quis, itaque inventore doloribus similique iusto a quae fuga esse, et unde facilis exercitationem, non odio aperiam voluptatibus ipsam ad!"
    },

     {
      img : {PrevImg},
      title: "GDG Quest 3.0",
      date :  "23 Feb 2025",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quibusdam quis, itaque inventore doloribus similique iusto a quae fuga esse, et unde facilis exercitationem, non odio aperiam voluptatibus ipsam ad!"
    }
  ]

  const handleSwitchEventToRight = ()=>{
      setIndex(index+1 >= PrevEvents.length ? index: index +1 );
  }
  const handleSwitchEventToLeft = ()=>
  {
     setIndex(index <= 0 ? index : index -1 );
  }



  return (
    <div className="PreviousEventsContainer">

       <div className="title3">
            <h2>Previous Events</h2>
            <p>{PrevEvents.length}</p>
       </div>

       <div className="PreviousEvents">
           
           <div className="PreviousEventImgs"> 
               <PreviousEventImg ImgLink={PrevEvents[index].img} Title={PrevEvents[index].title} date={PrevEvents[index].date} />
           </div>
         
         <div className="arrows">
              {index <=0 ? <></>: <button className="EventArrowLeft"  onClick={handleSwitchEventToLeft}></button>}
              {index +1 >= PrevEvents.length ? <></>:<button className="EventArrowRight"   onClick={handleSwitchEventToRight}></button>}


         </div>
          


           <div className="description3">
              <h3>{PrevEvents[index].description}</h3>
           </div>

       </div>
       
        <div className="title-behind3">SEE OUR EVENTS</div>
        


    </div>

    
  )
}


export default PreviousEvents