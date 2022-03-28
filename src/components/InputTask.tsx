import React, {useState} from 'react';
import FullInput from "./FullInput";
import Input from "./Input";
import Button from "./Button";

type TitleType = {
    message: string
}

type TitlesType = Array<TitleType>

const InputTask = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        // setMessage([newMessage, ...message])
        console.log('btn')
    }

    return (
        <div>
            <FullInput addMessage={addMessage}/>
            {message.map((el,index) => {
                return(
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};

export default InputTask;