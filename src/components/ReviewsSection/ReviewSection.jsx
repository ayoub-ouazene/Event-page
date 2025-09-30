import "./ReviewSection.css"
import GDGImg from "../../assets/GDG-Community.png"
import  AIFest from "../../assets/AIFest.png"

const Reviews = ({event}) => {
    
      
  return (
    <div className="ReviewsSection">
        <h2>Reviews</h2>
        <div className="Reviews">
            <div className="review">
                <h3>&ldquo;{event.Reviews[0].comment}&rdquo;</h3>
                <p>- {event.Reviews[0].user}</p>
                <h1 className="span-logo">&ldquo;</h1>

            </div>
            <div className="review">
                <h3>&ldquo;{event.Reviews[1].comment}&rdquo;</h3>
                <p>- {event.Reviews[1].user}</p>
                 <h1 className="span-logo">&ldquo;</h1>
            </div>

        </div>
       
      

    </div>
  )
}


export default Reviews