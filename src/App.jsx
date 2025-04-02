import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { PersonajeProvider } from './context/PersonajeContext.jsx';
import PlanetaProvider from './context/PlanetContext.jsx';
import Home from './pages/Home.jsx';
import VehiculoProvider from './context/VehiculoContext.jsx';
import PersonajesDetails from './pages/PersonajeDetails.jsx';
import PlanetaDetails from './pages/PlanetaDetails.jsx';
import VehiculoDetails from './pages/VehiculoDetails.jsx';
import { FavoritesProvider } from './context/FavoriteContext.jsx';

function App() {
  return (
      <div>
        <PersonajeProvider>
          <PlanetaProvider>
          <VehiculoProvider>
            <FavoritesProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/personaje/:id" element={<PersonajesDetails/>}/>
                    <Route path="/planeta/:id" element={<PlanetaDetails/>}/>
                    <Route path="/vehiculo/:id" element={<VehiculoDetails/>}/>
                </Routes>
            </Router>
            </FavoritesProvider>
            </VehiculoProvider>
          </PlanetaProvider> 
        </PersonajeProvider> 
      </div>
  )
}

export default App;