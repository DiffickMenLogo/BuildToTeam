import React, { useCallback } from 'react';
import NavBar from './components/NavBar';
import ReactDOM from 'react-dom/client';
import './styles/App.scss';
import 'normalize.css';
import { CarsContext } from './context/carsContext';
import axios from 'axios';
import { Icars, IwinnersProps } from './interfaces/Icars';

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import MainRouter from './MainRouter';

function App() {
    const [cars, setCars] = React.useState<Icars[]>([]);
    const [selectedCar, setSelectedCar] = React.useState<Icars | null>(null);
    const [winnersCars, setWinnersCars] = React.useState<IwinnersProps[]>([]);
  
    const getWinnersCars = useCallback(async() => {
      const response = await axios.get('http://localhost:3000/winners');
      if(JSON.stringify(response.data) !== JSON.stringify(cars)) {
        setWinnersCars(response.data);
        console.log(response.data);
      }
    }, [winnersCars]);
    const getCars = useCallback(async() => {
      const response = await axios.get('http://127.0.0.1:3000/garage');
      if(JSON.stringify(response.data) !== JSON.stringify(cars)) {
        setCars(response.data);
      }
    } , [cars]);
  
    React.useEffect(() => {
      getCars();
      getWinnersCars();
    }, [cars]);

    return (
        <CarsContext.Provider value={{cars, setCars, selectedCar, setSelectedCar, winnersCars, setWinnersCars}}>
            <BrowserRouter>
                <NavBar />
                <MainRouter />
            </BrowserRouter>
        </CarsContext.Provider>
    );
}

export default App;