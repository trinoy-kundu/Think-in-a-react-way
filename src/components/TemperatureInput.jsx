import React from "react";
import "./TemperatureInput.css"; // Add this line

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
};

export default function TemperatureInput({temperature, scale, onTemperatureChange}) {

    return (

        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input 
                type="text"
                value = {temperature}
                onChange={(e) => {onTemperatureChange(e, scale)}}
            />
        </fieldset>
    )
}
