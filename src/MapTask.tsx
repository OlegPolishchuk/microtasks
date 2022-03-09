import React from 'react';

type TopCarsType = {
    topCars: Array<MapTaskPropsType>
}

type MapTaskPropsType = {
    manufacturer: string,
    model: string
}


const MapTask = (props: TopCarsType) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>manufacturer</th>
                    <th>model</th>
                </tr>
            </thead>
            <tbody>
                {props.topCars.map((el, i) => {
                    return (
                        <tr key={i.toString()}>
                            <td >{i + 1}</td>
                            <td >{el.manufacturer}</td>
                            <td >{el.model}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};

export default MapTask;