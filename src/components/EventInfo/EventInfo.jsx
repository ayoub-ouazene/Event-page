
import GDGImg  from    "../../assets/GDG-Community.png"
import  "./EventInfo.css"

const EventInfo = ({event}) => {



 

const DisplayCalender = () => {
    let i = 1; // Start day numbering from 1

    return (
        <>
            {event.daysCalender.map((day, index) => (
                <div className="day" key={index}>
                    <h3 className='day-number' style={{backgroundColor : i%3==1?"var(--redColor)":i%3==2?"var(--greenColor)":"var(--blueColor)"}}>Day {i++}</h3>
                    <div className="timeline">
                        {day.map((time, timeIndex) => (
                            <div key={timeIndex} className="time">
                                <h3>{time.time}</h3>
                                <h3>{time.activity}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};




  return (
    <div className="EventInfo">
            <div className="AboutEvent">
                <h2>{event.Name}</h2>
                <p>{event.description}</p>
            </div>

            <div className="EventCalender">
                <h2>Calendar</h2>  
                {DisplayCalender() }

            </div>
    </div>
  )
}


export default EventInfo