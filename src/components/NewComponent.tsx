import React from 'react';
import {FilterType} from "./FilterTaskt";



type MoneyListPropsType = {
    money: Array<MoneyPropsType>,
    callBack: (filter: FilterType)=>void
}

type MoneyPropsType = {
    banknots: string,
    value: number,
    number: string
}


const NewComponent = (props: MoneyListPropsType) => {

    const onClickFilterkHandler = (filter: FilterType)=>{
      props.callBack(filter)
    };

    return (
        <div className={'wrapper'}>
            <ol className={'money_list'}>
                {props.money.map((el,index)=>{
                    return (
                        <li key={index.toString()}>
                            <span className={'banknots'}>{el.banknots}</span>
                            <span className={'b_value'}>{el.value}</span>
                            <span className={'b_number'}>{el.number}</span>
                        </li>
                    )
                })}
            </ol>
            <div style={{margin: '50px'}}>
                <button onClick={()=>onClickFilterkHandler('All')}>All</button>
                <button onClick={()=>onClickFilterkHandler(`RUBL`)}>RUBL</button>
                <button onClick={()=>onClickFilterkHandler(`Dollar`)}>Dollar</button>
            </div>
        </div>
    );
};

export default NewComponent;