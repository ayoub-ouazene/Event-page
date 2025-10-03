import Banner from "../../components/HeroSection/Banner.jsx"
import UpcomingEvents from "../../components/UpcomingEventsSection/UpcomingEvents.jsx"
import WorkshopSection from "../../components/WorkshopsSection/WorkshopSection.jsx"
import "./EventPage.css"
import PreviousEvents from "../../components/PreviousEventsSection/PreviousEvents.jsx"
import Footer from "../../components/FooterSection/Footer.jsx"
import Nav from "../../components/Nav/Nav.jsx"
const EventPage = () => (
  <div className="event-page">
    <Nav />
    <Banner />
    <UpcomingEvents />
    <WorkshopSection />
    <PreviousEvents />
    <Footer/>

  </div>
)


export  default EventPage