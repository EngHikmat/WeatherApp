import React from 'react';
import './Form.css'

export default function Form(props){

    return(
        <div className='container-fuild'>
            
            <form onSubmit={props.value} >
            <input type='text' name='city' className='form-control' placeholder="City"/>
                <input type='text' name='country' className='form-control mt-3 mb-3' placeholder="Country"/>
                <button className='btn btn-primary d-flex mx-auto'>Search</button>
            </form>
            
        </div>
    )
}