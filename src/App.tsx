import React from 'react';
import './App.css';
import MapTask from "./MapTask";
import Button from "./components/Button";
import FilterTask from "./components/FilterTaskt";


const topCars = [
  {manufacturer:'BMW', model:'m5cs'},
  {manufacturer:'Mercedes', model:'e63s'},
  {manufacturer:'Audi', model:'rs6'}
];


const button1Foo = (subscriber: string, age: number)=>{
    console.log(subscriber, age)
};
const button2Foo = (subscriber: string)=>{
    console.log(subscriber)
};
const button3Foo = ()=>{
  console.log('Im stupid button')
};

function App() {

  return (
    // <div className="App">
    //   <MapTask topCars={topCars}/>
    //
    //   <Button name={'MyYouTubeChanel-1'} callBack={()=>button1Foo('Im Vasya', 21)}/>
    //   <Button name={'MyYouTubeChanel-2'} callBack={()=>button2Foo('Im Ivan')}/>
    //   <Button name={'Stupid Button'} callBack={button3Foo}/>
    // </div>
      <FilterTask/>
  );

}

export default App;
