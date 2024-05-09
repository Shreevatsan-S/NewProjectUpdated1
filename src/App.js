import React from 'react';
import Events from './pages/events.jsx'; // Assuming the file is named 'Events.jsx' with PascalCase
import UpcomingEvents from './pages/UpcomingEvents.jsx'; // Assuming the file is named 'Events.jsx' with PascalCase

import Gallery from './pages/Gallery.jsx'; // Assuming the file is named 'Gallery.jsx' with PascalCase
import Header from './components/Header.jsx'; // Assuming the file is named 'Header.jsx' with PascalCase
import Footer from './components/footer.jsx'; // Assuming the file is named 'Footer.jsx' with PascalCase
import Demo from './pages/demo.jsx'; // Assuming the file is named 'Events.jsx' with PascalCase
import Abacus from './pages/Abacus.jsx'; // Assuming the file is named 'Events.jsx' with PascalCase
import RubicCube from './pages/RubicCube.jsx'; // Assuming the file is named 'Events.jsx' with PascalCase
import MemoryTechniques from './pages/MemoryTechniques.jsx'; // Assuming the file is named 'Events.jsx' with PascalCase
import EKids from './pages/E-Kids.jsx'; // Assuming the file is named 'Events.jsx' with PascalCase
import Handwriting from './pages/Handwriting.jsx'; // Assuming the file is named 'Events.jsx' with PascalCase
import VedicMath from './pages/VedicMath.jsx'; // Assuming the file is named 'Events.jsx' with PascalCase

import LandingPage from './pages/landingpage.jsx'; // Assuming the file is named 'LandingPage.jsx' with PascalCase
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const media = { mobile: "768px", tab: "998px" };


function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/events' element={<Events />} />
          <Route path='/UpcomingEvents' element={<UpcomingEvents />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/demo' element={<Demo />} />
          <Route path='/Abacus' element={<Abacus />} />
          <Route path='/RubicCube' element={<RubicCube />} />
          <Route path='/MemoryTechniques' element={<MemoryTechniques />} />
          <Route path='/EKids' element={<EKids />} />
          <Route path='/Handwriting' element={<Handwriting />} />
          <Route path='/VedicMath' element={<VedicMath />} />


        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
