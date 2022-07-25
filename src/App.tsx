import React, { useCallback } from 'react';
import Menu from './components/Menu';
import './styles/App.scss';
import 'normalize.css';
import axios from 'axios';
import Cars from './components/Cars';
import { Icars } from './interfaces/Icars';
import { CarsContext } from './context/carsContext';

function App() {
  const [cars, setCars] = React.useState<Icars[]>([
    {name: 'Car 1', id: 1, color: 'red'},
    {name: 'Car 2', id: 2, color: 'blue'},
    {name: 'Car 3', id: 3, color: 'green'},
  ]);

  const getCars = useCallback(async() => {
    const response = await axios.get('http://127.0.0.1:3000/garage');
    console.log(response.data);
    setCars(response.data);
  } , []);

  React.useEffect(() => {
    getCars();
  }, []);


  return (
    <CarsContext.Provider value={{cars}}>
    <div className="App">
      <Cars />
    </div>
    </CarsContext.Provider>
  );
}

export default App;
