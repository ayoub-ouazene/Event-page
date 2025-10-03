
import "./Event.css"
import { useNavigate } from 'react-router-dom';

const Event = ({ ImgLink, Name, description, day, month, place, Time ,Case ,days,daysCalender , PreviousEditions ,Reviews }) => {

  const navigate = useNavigate();
  const EventData = {
ImgLink, Name, description, day, month, place, Time ,Case ,days,daysCalender , PreviousEditions ,Reviews 
  }

  const handleRegister  = ()=>{
    navigate("/EventRegistrationAnswer",{
      state : {
        Event : EventData
      }
    })

  }
 

  
  return (
    <div className="EventContainer">
      
        <div className="EventImg" style={{ backgroundImage: 'url(' + ImgLink + ')' }}></div>

        <div className="InfoContainer">

            <div className="description">
              <h3>{Name}</h3>
              <p>{description}</p>
            </div>

            <div className="timeInfo">
                <div className="date">
                  <h1>{day}</h1>
                  <h4>{month}</h4>
                </div>
                <div className="otherInfo">
                   <p>{place}</p>
                   <p>{Time}</p>
                </div>
               
            </div>

            <button className="RegisterBtn"  onClick={handleRegister}>
              Register
              <div className="RegisterBtnShdow"></div>
            </button>


        </div>
       
    </div>


  )
}

export default Event 