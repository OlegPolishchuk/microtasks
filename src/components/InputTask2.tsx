import React, {useState} from 'react';
import Input from "./Input";
import Button from "./Button";


const InputTask = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    let [title, setTitle] = useState('');

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title);
        setTitle('');
    }

    return (
        <div>
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el,index) => {
                return(
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};

export default InputTask;