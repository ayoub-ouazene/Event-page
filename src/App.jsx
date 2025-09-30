import { Routes, Route } from 'react-router-dom';
import RegistrationAnswerPage  from "./Pages/RegistrationAnswerPage/RegistrationAnswerPage.jsx"
import EventPage from "./Pages/EventPage/EventPage.jsx"

import "./App.css"

const App = () => {
  return (
 
    <Routes>
      <Route path="/" element = {<EventPage/>}/>

      <Route path = "/EventRegistrationAnswer" element={<RegistrationAnswerPage/>} />

    


    </Routes>
  
   
      

  )
}


export  default App 