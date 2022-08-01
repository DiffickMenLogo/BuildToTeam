import * as React from 'react';
import { Icars } from '../interfaces/Icars';
import '../styles/CarItem.scss';
import axios from 'axios';
import { useCarsContext } from '../context/carsContext';
import { useCallback } from 'react';
import CarSVG from './CarSvg';
import flag from '../../assets/Flag.svg';


function CarItem({name, id, color}: Icars) {
    const { setCars, setSelectedCar, selectedCar } = useCarsContext();
    const startEngine = React.useRef<HTMLButtonElement>(null);
    const stopEngine = React.useRef<HTMLButtonElement>(null);

    const deleteCar = useCallback(async() => {
        axios.delete(`http://localhost:3000/garage/${id}`);
        const response = await axios.get('http://localhost:3000/garage');
        setCars(response.data);
    }, []);

    const selectCar = useCallback(() => {
        setSelectedCar({name, id, color});
        const updateColor = document.getElementById('updated_color') as HTMLInputElement;
        updateColor.value = color;
        const updateName = document.getElementById('update_name') as HTMLInputElement;
        updateName.value = name;
    }, []);

    const animateCar = useCallback(async() => {
        const car = document.getElementById(`car_${id}`) as HTMLElement;

        startEngine.current.style.backgroundColor = 'gray';
        startEngine.current.style.cursor = 'default';
        stopEngine.current.style.cursor = 'pointer';
        stopEngine.current.style.backgroundColor = 'blueviolet';
        stopEngine.current.style.color = 'black';
        stopEngine.current.disabled = false;
        startEngine.current.disabled = true;


        const response = await axios.patch(`http://127.0.0.1:3000/engine?id=${id}&status=started`);
        car.style.animation = `move ${response.data.distance/window.screen.width/response.data.velocity}s linear`;
        car.style.animationFillMode = 'forwards';
        const engineStatus = await axios.patch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`).catch((err) => {
            console.log(err);
            disableAnimation();
        });

    }, []);
    const disableAnimation = useCallback(async() => {
        startEngine.current.style.color = 'black';
        startEngine.current.style.cursor = 'pointer';
        stopEngine.current.style.cursor = 'default';
        startEngine.current.style.backgroundColor = 'blueviolet';
        stopEngine.current.style.backgroundColor = 'gray';
        stopEngine.current.style.color = 'rgb(94, 92, 92)';
        stopEngine.current.disabled = true;
        startEngine.current.disabled = false;


        const car = document.getElementById(`car_${id}`) as HTMLElement;
        car.style.animation = '';
    }, []);
    return (
        <div className='car_item'>
            <div className="item_top">
                <div onClick={() => selectCar()} className={`select-item ${id}`}>SELECT</div>
                <div onClick={() => deleteCar()} className={`remove-item ${id}`}>REMOVE</div>
                <div className="name-item">{name}</div>
            </div>
            <div className="item_bottom">
                <button ref={startEngine} onClick={() => animateCar()} className='a'>A</button>
                <button ref={stopEngine} onClick={() => disableAnimation()} className='b'>B</button>
                <CarSVG fill={color} id={id}/>
                <img className='end-line' alt="flag" src={flag} height='50px' />
            </div>
        </div>
    )
}

export default CarItem;