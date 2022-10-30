import React from 'react';
import './Forms.css'

const InputsForm = (props) => {
    return (
        <>
            <div className='flex-center divContainerInputs'>
                <label htmlFor="">{props.title}</label>
                <input className='inputsForm' value={props.value} type={props.type} name={props.name} onChange={props.onChange} />
            </div>
        </>
    );
};

export default InputsForm;