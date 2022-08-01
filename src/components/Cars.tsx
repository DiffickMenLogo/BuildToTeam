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
    const [currentPageGarage, setCurrentPageGarage] = React.useState<number>(1);
    const [carsOnPage, setCarsOnPage] = React.useState<Icars[]>([]);
    React.useEffect(() => {
        if(currentPageGarage === 0) {
            setCurrentPageGarage(1);
        }
        if(currentPageGarage > Math.ceil(cars.length / 7)) {
            setCurrentPageGarage(Math.ceil(cars.length / 7));
        }
        console.log(cars);
        setCarsOnPage(cars.slice((currentPageGarage - 1) * 7, currentPageGarage * 7));
    }, [currentPageGarage, cars]);
    return (
        <div className='garage'>
            <h1 className=''>Garage({cars.length})</h1>
            <h2>Page #{currentPageGarage}</h2>
            {carsOnPage.map((car: Icars) => (
                <CarItem key={car.name} name={car.name} id={car.id} color={car.color} />
            ))}
            <div className="garage__pagination">
                <button className="garage__pagination__button" onClick={() => setCurrentPageGarage(currentPageGarage - 1)}>Prev</button>
                <button className="garage__pagination__button" onClick={() => setCurrentPageGarage(currentPageGarage + 1)}>Next</button>
            </div>
        </div>
    )
}

export default Cars;