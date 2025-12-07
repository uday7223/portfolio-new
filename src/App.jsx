import React, { useEffect } from 'react'
import Portfolio from './main-comp/Portfolio';
import { BrowserRouter, Route, Routes } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,     // whether animation should happen only once
    });
  }, []);
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>

      {/* <Portfolio/> */}

    </>

  )
}

export default App