import GDGImg  from    "../../assets/GDG-Community.png"
import "./RegistrationCase.css"
import { useEffect , useState} from "react"

function monthAbbrevToNumber(abbrev) {
  const months = {
    Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
    Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12
  };

  const key = abbrev.slice(0, 3).charAt(0).toUpperCase() + abbrev.slice(1, 3).toLowerCase();
  const num = months[key] || null;

  if (num === null) return null;
  return num.toString().padStart(2, "0"); // add leading zero
}
const RegistrationCase = ({event}) => {
    const [diff, setDiff] = useState(0);

   
    useEffect(() => {
        if (event.Case === "not-yet") {
            const eventDate = new Date(`2025-${monthAbbrevToNumber(event.month)}-${event.day}`);

            const timer = setInterval(() => {
                const currentDate = new Date();
                const timeRest = eventDate - currentDate;

                if (timeRest <= 0) {
                    clearInterval(timer);
                    setDiff(0);
                } else {
                    setDiff(timeRest);
                }
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [event.Case, event.month, event.day]);

    const DisplayCase = () => {
        if (event.Case === "open") {
            let areOpen = true;
            return (
                <>
                    <section className="registirations">
                            <div className="container">
                                <div className="textGroup">
                                <h1>Secure Your Spot</h1>
                                <div className="registirationsStatus">
                                    <span
                                    className={areOpen ? "statusOpen" : "statusClosed"}
                                    ></span>
                                    <h3>Registrations are {areOpen ? "open" : "closed"}</h3>
                                </div>
                                </div>
                                <div className="ticketsContainer">
                                <img src="src\assets\Ticket.png" alt="Ticket Image" />
                                <img src="src\assets\Ticket.png" alt="Ticket Image" />
                                <img src="src\assets\Ticket.png" alt="Ticket Image" />
                                </div>
                            </div>
                     </section>
                </>
            );

        } else if (event.Case === "not-yet") {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);

            return (
                <div className="NotYetSection">
                    <div className="textContent">
                        <h3>Registrations Opens In :</h3>
                        <div className="RestTime">
                            <div>
                                <p>{days}</p>Days
                            </div>
                            <div>
                                <p>{hours}</p>Hours
                            </div>
                            <div>
                                <p>{minutes}</p>Min
                            </div>
                        </div>
                    </div>

                    <div className="OldTimer"></div>
                </div>
            );
        } else if (event.Case === "close") {
            return <div className="ClosedSection"></div>;
        }
    };

    return (
        <div className="EventCaseSection">
            <h2 className="EventCaseSection-title"> Registration</h2>
        
            {DisplayCase()}

        </div>
    );
};

export default RegistrationCase;