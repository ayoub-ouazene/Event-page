
import "./Workshop.css"

const Workshop = ({ ImgLink, Name, description, day, month, place, Time }) => {
  return (
    <div className="WorkshopContainer">
      
      <div className="Images">
         <div className="MainImg" style={{ backgroundImage: 'url(' + ImgLink + ')' }}></div>
         <div className="SubImgs">
            <div className="SubImg1"></div>
            <div className="SubImg2"></div>
         </div>

      </div>
        

        <div className="InfoContainer2">

            <div className="description2">
              <h3>{Name}</h3>
              <p>{description}</p>
            </div>

            <div className="timeInfo2">
                <div className="date2">
                  <h1>{day}</h1>
                  <h4>{month}</h4>
                </div>
                <div className="otherInfo2">
                   <p>{place}</p>
                   <p>{Time}</p>
                </div>
               
            </div>

           

        </div>
       
    </div>


  )
}

export default Workshop