import Event  from "../Event/Event.jsx"
import {  useState , useEffect} from "react"
import "./UpcomingEvents.css"

import AIFest from '../../assets/AIFest.png'
import GDGImg from "../../assets/GDG-Community.png"

function UpcomingEvents() {

  const events = [
      {
               img: GDGImg,
               Name: "AI Fest",
               description: "Learn ethical hacking and network defense fundamentals.",
               day: "23",
               month: "Mar",
               place: "Green Room",
               Time: "6.00 pm - 9:00pm",
               Case: "close",
               days: 2,
               daysCalender: [
                   [
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                   ],
                   [
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                   ],
               ],
   
               PreviousEditions : {
                   img1:GDGImg ,
                   img2 : AIFest,
                   img3: GDGImg ,
                   img4 : AIFest
               },
               Reviews : [
                   {
                       comment:"ruly amazing event , I hope I participated againT",
                       user : "Mohammed , 2nd year student"
                   },
                   {
                       comment:"Truly amazing event?ruly amazing event , I hope I participated againruly amazing event , I hope I participated again",
                       user : "Mohammed , 2nd year student"
                   }
               ]
   
   
           },

   {
               img: GDGImg,
               Name: "AI Fest",
               description: "Learn ethical hacking and network defense fundamentals.",
               day: "23",
               month: "Dec",
               place: "Green Room",
               Time: "6.00 pm - 9:00pm",
               Case: "not-yet",
               days: 2,
               daysCalender: [
                   [
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                   ],
                   [
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                   ],
               ],
   
               PreviousEditions : {
                   img1:GDGImg ,
                   img2 : AIFest,
                   img3: GDGImg ,
                   img4 : AIFest
               },
               Reviews : [
                   {
                       comment:"ruly amazing event , I hope I participated againT",
                       user : "Mohammed , 2nd year student"
                   },
                   {
                       comment:"Truly amazing event?ruly amazing event , I hope I participated againruly amazing event , I hope I participated again",
                       user : "Mohammed , 2nd year student"
                   }
               ]
   
   
           },

    {
               img: GDGImg,
               Name: "AI Fest",
               description: "Learn ethical hacking and network defense fundamentals.",
               day: "23",
               month: "Dec",
               place: "Green Room",
               Time: "6.00 pm - 9:00pm",
               Case: "open",
               days: 2,
               daysCalender: [
                   [
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                   ],
                   [
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                   ],
               ],
   
               PreviousEditions : {
                   img1:GDGImg ,
                   img2 : AIFest,
                   img3: GDGImg ,
                   img4 : AIFest
               },
               Reviews : [
                   {
                       comment:"ruly amazing event , I hope I participated againT",
                       user : "Mohammed , 2nd year student"
                   },
                   {
                       comment:"Truly amazing event?ruly amazing event , I hope I participated againruly amazing event , I hope I participated again",
                       user : "Mohammed , 2nd year student"
                   }
               ]
   
   
           },

    {
               img: GDGImg,
               Name: "AI Fest",
               description: "Learn ethical hacking and network defense fundamentals.",
               day: "23",
               month: "Dec",
               place: "Green Room",
               Time: "6.00 pm - 9:00pm",
               Case: "open",
               days: 2,
               daysCalender: [
                   [
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                   ],
                   [
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                   ],
               ],
   
               PreviousEditions : {
                   img1:GDGImg ,
                   img2 : AIFest,
                   img3: GDGImg ,
                   img4 : AIFest
               },
               Reviews : [
                   {
                       comment:"ruly amazing event , I hope I participated againT",
                       user : "Mohammed , 2nd year student"
                   },
                   {
                       comment:"Truly amazing event?ruly amazing event , I hope I participated againruly amazing event , I hope I participated again",
                       user : "Mohammed , 2nd year student"
                   }
               ]
   
   
           },

    {
               img: GDGImg,
               Name: "AI Fest",
               description: "Learn ethical hacking and network defense fundamentals.",
               day: "23",
               month: "Dec",
               place: "Green Room",
               Time: "6.00 pm - 9:00pm",
               Case: "open",
               days: 2,
               daysCalender: [
                   [
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                   ],
                   [
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                       { time: "9:30 - 10:20", activity: "Presentation" },
                   ],
               ],
   
               PreviousEditions : {
                   img1:GDGImg ,
                   img2 : AIFest,
                   img3: GDGImg ,
                   img4 : AIFest
               },
               Reviews : [
                   {
                       comment:"ruly amazing event , I hope I participated againT",
                       user : "Mohammed , 2nd year student"
                   },
                   {
                       comment:"Truly amazing event?ruly amazing event , I hope I participated againruly amazing event , I hope I participated again",
                       user : "Mohammed , 2nd year student"
                   }
               ]
   
   
           },
  ]

  
  const [n , setN] = useState(6);
  const [Index , SetIndex ] = useState(0);
  const [translation , setTranslation ] = useState(0);

  useEffect(()=>{
    setN(events.length)
  },[]);
   
  const getCardWidthUnit = () => {
        if (typeof window === "undefined") return 30; // Default for SSR
        if (window.innerWidth <= 639) return 100; // Mobile: one item (100% of the list width)
        if (window.innerWidth <= 1150) return 45; // Tablet: two items (50% of the list width)
        return 33.33; // Desktop: three items (33.33% of the list width)
    };

const handleRightSideClick = ()=>{
  SetIndex(Index+1 >= events.length ? events.length -1 : Index +1  );
  setTranslation(Index+1 >= events.length ? translation : translation -getCardWidthUnit())

  }

const handleLeftSideClick = ()=> {
  SetIndex(Index-1 <0 ? 0 : Index -1);
  setTranslation(Index-1 <0 ? 0 : translation +  getCardWidthUnit())
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
    <div className="eventSectionContainer">
      <div className="title">
        <h2>Upcoming Events</h2>
        <p>{n}</p>
      </div>
      <div className="UpcomingEventsSection"  style={{ transform: `translateX(${translation}vw)`}}>
  
           {events.map((event,index) => (
          <Event 
              key={index} 
              ImgLink = {event.img} 
              Name = {event.Name}
              description = {event.description}
              day = {event.day}
              month = {event.month}
              place = {event.place}
              Time = {event.Time} 
              Case = {event.Case}
              days = {event.days}
              daysCalender = {event.daysCalender}
              PreviousEditions = {event.PreviousEditions}
              Reviews = {event.Reviews}
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
            <div className="title-behind">OUR NEXT EVENTS</div>
   </div>
    
  )
}


export default UpcomingEvents