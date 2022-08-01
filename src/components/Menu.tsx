import * as React from 'react';
import { Icars } from '../interfaces/Icars';
import '../styles/Menu.scss';
import axios from 'axios';
import { useCarsContext } from '../context/carsContext';
import { useCallback } from 'react';

// interface ImenuProps {
//     cars : Icars[];
//     setCars : (cars : Icars[]) => void;
// }
function Menu() {
    const { cars, setCars, selectedCar } = useCarsContext();
    const [carName, setCarName] = React.useState<string>('');
    const [carColor, setCarColor] = React.useState<string>('#fff');
    const [updateCarName, setUpdateCarName] = React.useState<string>('');
    const [updateCarColor, setUpdateCarColor] = React.useState<string>('');
    const optionsCreate = {
        url: 'http://localhost:3000/garage',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
          name: carName,
          color: carColor,
        }
    };
    const optionsUpdate = {
        url: `http://localhost:3000/garage/${cars.findIndex(car => car.name === selectedCar?.name) + 1}`,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
          name: updateCarName,
          color: updateCarColor,
        }
    };
    const createCar = useCallback(async() => {
        axios(optionsCreate);
        const response = await axios.get('http://127.0.0.1:3000/garage');
        setCars(response.data);
        const currentColor = document.getElementById('change_color') as HTMLInputElement;
        currentColor.value = '#ffffff';
        const currentName = document.getElementById('create_Placeholder') as HTMLInputElement;
        currentName.value = '';
        setCarColor('#ffffff');
    } , [carName]);
    console.log(carColor);
    const changeName = useCallback((name: string) => {
        setCarName(name);
    } , [carName]);

    const changeColor = useCallback((color: string) => {
        setCarColor(color);
    } , [carColor]);

    const updateName = useCallback((name: string) => {
        setUpdateCarName(name);
    } , [updateCarName]);

    const updateColor = useCallback((color: string) => {
        setUpdateCarColor(color);
    } , [updateCarColor]);

    const updateCar = useCallback(async() => {
        optionsUpdate.url = `http://localhost:3000/garage/${cars.findIndex(car => car.name === selectedCar?.name) + 1}`
        axios(optionsUpdate);
        const response = await axios.get('http://127.0.0.1:3000/garage');
        setCars(response.data);
        const updateColor = document.getElementById('updated_color') as HTMLInputElement;
        updateColor.value = '#ffffff';
        const updateName = document.getElementById('update_name') as HTMLInputElement;
        updateName.value = '';
        setCarColor('#ffffff');
    } , [updateCarName, updateCarColor]);

    return (
        <div className='menu'>
            <div className='menu_create'>
                <input onChange={(e) => changeName(e.currentTarget.value)} id='create_Placeholder' type="text"/>
                <input onChange={(e) => changeColor(e.currentTarget.value)} type="color" className='set_color' defaultValue={"#ffffff"} id='change_color' />
                <div onClick={() => createCar()} className='menu_btn'>CREATE</div>
            </div>
            <div className='menu_update'>
                <input id='update_name' onChange={(e) => {updateName(e.currentTarget.value)}} type="text" />
                <input onChange={(e) => {updateColor(e.currentTarget.value)}} type="color" id='updated_color' className='set_color' defaultValue={"#ffffff"} />
                <div onClick={() => updateCar()} className='menu_btn'>UPDATE</div>
            </div>
            <div className='menu_bottom'>
                <div className='menu_btn'>RACE</div>
                <div className='menu_btn'>RESET</div>
                <div className='menu_btn_long'>GENERATE CARS</div>
            </div>
        </div>
    );
}

export default Menu;