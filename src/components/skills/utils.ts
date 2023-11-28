import { getRandomIntFunctionType } from "./Skills.types";


export const getRandomInt: getRandomIntFunctionType = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}