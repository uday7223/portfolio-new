import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Portfolio from './main-comp/Portfolio';
import "./main-comp/styles.scss"
import { BrowserRouter, Route, Routes } from 'react-router';

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>

      {/* <Portfolio/> */}

    </>

  )
}

export default App