import React from 'react';
import logo from '../assets/img/logoswsf.png';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoriteContext';

const NavBar = () => {
  const navigate = useNavigate();
  const { favorites, removeFavorite, setIsFavorite } = useFavorites();
   console.log("desde el navbar", favorites)
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <nav className="navbar navbar-expand-lg badge mx-5"
        style={{ width: '90%', background: 'linear-gradient(45deg,rgb(255, 255, 255),rgb(0, 0, 0))' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img 
              src={logo} 
              alt="Logo de Star Wars"
              onClick={() => navigate('/')}
              style={{
                background: 'linear-gradient(45deg,rgb(255, 255, 255),rgb(0, 0, 0)))',
                borderRadius: '8px', 
                width: '150px', 
                height: 'auto',
                cursor: 'pointer'
              }}
            />
          </a>

          {/* Botón para móviles */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Contenido del navbar */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Espacio para otros elementos del navbar */}
            </ul>

            {/* Dropdown de favoritos */}
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  borderRadius: '8px', 
                  width: '250px', 
                  height: '75px',
                  fontSize: '25px'
                }}
              >
                Favorites
                <span className='m-3 bg-secondary'>{favorites.length}</span>
              </button>
                  <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                    {favorites.length === 0 ? (
                      <li className="text-center p-2">No hay favoritos</li>
                    ) : (
                      favorites.map((item) => (
                        <li key={item.id} className="d-flex justify-content-between align-items-center px-2">
                          <span>{item.name}</span>
                          <button 
                            className="btn btn-sm btn-link text-danger"
                            onClick={() => {
                              // e.preventDefault();
                              // e.stopPropagation(); // Esto previene que el evento se propague
                              removeFavorite(item.url);
                            }}
                          >
                            <i className="bi bi-trash-fill"></i>
                          </button>
                        </li>
                        // Opcional: <hr className="dropdown-divider my-1" /> si quieres separadores
                      ))
                    )}
                  </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;