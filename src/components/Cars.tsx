import * as React from 'react';
import { Icars } from '../interfaces/Icars';
import CarItem from './CarItem';
import '../styles/Cars.scss';
import { useCarsContext } from '../context/carsContext';

interface IcarsProps {
    cars: Icars[];
}

function Cars() {
    const { cars } = useCarsContext();
    return (
        <div className='garage'>
            <h1 className=''>Garage({cars.length})</h1>
            <h2>Page #{Math.ceil(cars.length / 7)}</h2>
            {cars.map((car: Icars) => (
                <CarItem key={car.name} name={car.name} id={car.id} color={car.color} />
            ))}
        </div>
    )
}

export default Cars;