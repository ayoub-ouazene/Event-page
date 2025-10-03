import React from 'react'
import "./WorkshopSection.css"
import {  useState , useEffect} from "react"
import Workshop from "../Workshop/Workshop.jsx"


import AIFestImg from '../../assets/AIFest.png'

function WorkshopSection() {

  const events = [
    {
      img : AIFestImg,
      Name : "AI Fest" ,
      description : "Learn ethical hacking and network defense fundamentals." ,
      day : "23",
      month : "Feb",
      place : "Green Room",
      Time : "6.00 pm - 9:00pm"
    },
    {
      img:  AIFestImg , 
      Name: "Cyber Security Workshop",
      description: "Learn ethical hacking and network defense fundamentals.",
      day: "15",
      month: "Mar",
      place: "Lecture Hall A",
      Time: "10:00 am - 1:00 pm"
    },
    {
      img:  AIFestImg,
      Name: "Cyber Security Workshop",
      description: "Learn ethical hacking and network defense fundamentals.",
      day: "15",
      month: "Mar",
      place: "Lecture Hall A",
      Time: "10:00 am - 1:00 pm"
    },
    {
      img:  AIFestImg,
      Name: "Web Dev Hackathon",
      description: "24 hours of coding to build the next great web application.",
      day: "30",
      month: "May",
      place: "The Innovation Lab",
      Time: "All Day"
    },
    {
      img:  AIFestImg,
      Name: "Future of Robotics Talk",
      description: "Guest speaker on advanced automation and AI in manufacturing.",
      day: "19",
      month: "Jun",
      place: "Conference Room 3",
      Time: "7:30 pm - 8:30 pm"
    }

  ]

  const [n , setN] = useState(6);
  const [Index , SetIndex ] = useState(0);
  const [translation , setTranslation ] = useState(0);

  useEffect(()=>{
    setN(events.length)
  },[]);

  const getCardWidthUnit = () => {
        if (typeof window === "undefined") return 30;
        if(window.innerWidth <= 900 ) return 90;
        if (window.innerWidth <= 639) return 98; // Mobile: one item (100% of the list width)
        if (window.innerWidth <= 1150) return 40; // Tablet: two items (50% of the list width)
        return 43; // Desktop: three items (33.33% of the list width)
    };
   

const handleRightSideClick = ()=>{
  SetIndex(Index+1 >= events.length ? events.length -1 : Index +1  );
  setTranslation(Index+1 >= events.length ? translation : translation - getCardWidthUnit())

  }

const handleLeftSideClick = ()=> {
  SetIndex(Index-1 <0 ? 0 : Index -1);
  setTranslation(Index-1 <0 ? 0 : translation + getCardWidthUnit())
}

const points = () => {

  const totalPoints = events.length; 

  return Array.from({ length: totalPoints }, (_, i) => {

    if (i === Index) { 
      return <div key={i} className="page-point-selected"></div>;
    } 
    else {
      return <div key={i} className="page-point"></div>;
    }
  });
};

 




  return (
    <div className="WorkshopSectionContainer">
      <div className="title2">
        <h2>Workshops Highlights</h2>
        <p>{n}</p>
      </div>
      <div className="WorkshopSection"  style={{ transform: `translateX(${translation}vw)`}}>
  
           {events.map((event,index) => (
          <Workshop
              key={index} 
              ImgLink = {event.img} 
              Name = {event.Name}
              description = {event.description}
              day = {event.day}
              month = {event.month}
              place = {event.place}
              Time = {event.Time} 
           />
           
          ))}

      </div>

    <div className="mover">   
            <button className="left-side-arrow" onClick={handleLeftSideClick}></button>
            <div className="page-points">
                {points()}
            </div>
            <button className="right-side-arrow" onClick={handleRightSideClick}></button>
    </div>

            <div className="title-behind2">OUR WORKSHOPS</div>
            
    </div>
    
  )
}


export default WorkshopSection