import { Icars, IwinnersProps } from './../interfaces/Icars';
import { createContext, useContext } from "react";

interface ICarsContext {
    cars: Icars[];
    setCars: (cars: Icars[]) => void;
    selectedCar: Icars | null;
    setSelectedCar: (car: Icars | null) => void;
    winnersCars: IwinnersProps[];
    setWinnersCars: (cars: IwinnersProps[]) => void;
}

export const CarsContext = createContext<ICarsContext>({
    cars: [],
    setCars: (cars: Icars[]) => {},
    selectedCar: null,
    setSelectedCar: (car: Icars | null) => {},
    winnersCars: [],
    setWinnersCars: (cars: IwinnersProps[]) => {},
})

export const useCarsContext = () => useContext(CarsContext);