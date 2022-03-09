import React, {useState} from 'react';
import '../App.css';
import NewComponent from "./NewComponent";

export type  FilterType = 'All' | 'Dollar' | 'RUBL';

function FilterTask() {
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ]);

    let [filter , setFilter] = useState<FilterType>('All');

    const checkState = (banknot: FilterType)=>{
        setFilter(banknot)
    };

    let currentMoney = money;
    if (filter === "RUBL") {
        currentMoney = money.filter(el=> el.banknots === 'RUBLS')
    }
    if (filter === "Dollar") {
        currentMoney = money.filter(el=> el.banknots === 'Dollars')
    }


    return (
        <NewComponent money = {currentMoney} callBack={(banknot: FilterType)=>checkState(banknot)}/>
    );
}

export default FilterTask;
