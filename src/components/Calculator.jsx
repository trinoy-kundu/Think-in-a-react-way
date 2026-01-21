import React from "react";
import TemperatureInput from "./TemperatureInput";
import { convert, toCelcius, toFahrenheit } from "../converterfunc/converter";
import BoilingVerdict from "./BoilingVerdict";

export default class calculator extends React.Component {
    state = { temperature: '', scale: 'c'};

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });

    };

    render() {
        const {temperature, scale} = this.state;
        const Celsius = scale === "f" ? convert(temperature, toCelcius): temperature;
        const Fahrenheit = scale === "c"? convert(temperature, toFahrenheit): temperature;

        return (
            <>
                <TemperatureInput
                    scale="c"
                    temperature={Celsius}
                    onTemperatureChange={this.handleChange}
                />

                <TemperatureInput
                    scale="f"
                    temperature={Fahrenheit}
                    onTemperatureChange={this.handleChange}
                />

                <BoilingVerdict celsius={parseFloat(Celsius)}/>
            </>
        )
    }
}