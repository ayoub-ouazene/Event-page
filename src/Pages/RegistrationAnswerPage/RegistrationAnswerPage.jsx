
import RegisterAnswerHero from '../../components/RegisterAnswerHero/RegisterAnswerHero.jsx'
import Nav from  '../../components/Nav/Nav.jsx'
import EventInfo from '../../components/EventInfo/EventInfo.jsx'
import RegistrationCase from "../../components/RegistrationCase/RegistrationCase.jsx"
import PreviousEditions from '../../components/PreviousEditionsSection/PreviousEditions.jsx'
import Reviews from '../../components/ReviewsSection/ReviewSection.jsx'
import Footer from '../../components/FooterSection/Footer.jsx'
import "./RegistrationAnswerPage.css"
import { useLocation } from 'react-router-dom';


const RegistrationAnswerPage = () => {

  const location = useLocation();
  const state = location.state || {};

  const {Event} = state ;
  return (
    <div className='RegistrationAnswerPage'>
        <Nav/>
        <RegisterAnswerHero event={Event}/>
        <EventInfo event={Event}/>
        <RegistrationCase event={Event} />
        <PreviousEditions event={Event} />
        <Reviews event={Event} />
        <Footer/>
    </div>
  )
}

export default RegistrationAnswerPage