import React from 'react'
import NavBar from '../components/NavBar.jsx'
import List from '../components/List.jsx'
import ListaPlanet from '../components/ListaPlanet.jsx'
import ListaVehicle from '../components/ListaVehicle.jsx'

const Home = () => {

  return (
    <div>
       <NavBar/>
       <List/>
       <ListaPlanet/>
       <ListaVehicle/>
    </div>
  )
}

export default Home