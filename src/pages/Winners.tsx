import * as React from 'react';
import '../styles/Winners.scss';
import { useCarsContext } from '../context/carsContext';
import WinnersItem from '../components/WinnersItem';
import { IwinnersProps } from '../interfaces/Icars';

function Winners() {
    const { winnersCars } = useCarsContext();
    console.log(winnersCars);
    return (
        <div className='winners'>
            <h1>Winners ()</h1>
            <h2>Page #</h2>
            <div className='winners-box'>
                <div className="winners-top">
                    <div className="winners-top-item">Number</div>
                    <div className="winners-top-item">Car</div>
                    <div className="winners-top-item">Name</div>
                    <div className="winners-top-item">Wins</div>
                    <div className="winners-top-item">Time</div>
                </div>
                {winnersCars.map((winnerCar: IwinnersProps) => (
                <WinnersItem key={winnerCar.id} id={winnerCar.id} time={winnerCar.time} wins={winnerCar.wins} />
            ))}
            </div>
        </div>
    )
}

export default Winners;