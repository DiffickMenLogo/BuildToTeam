import { Icars } from './../interfaces/Icars';
import { createContext, useContext } from "react";

interface ICarsContext {
    cars: Icars[];
}

export const CarsContext = createContext<ICarsContext>({
    cars: []
})

export const useCarsContext = () => useContext(CarsContext);