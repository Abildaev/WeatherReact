import React, {useState} from 'react';
import classes from './Form.module.css'
import {MdSearch} from "react-icons/md";


const Form = (props) => {


    return (
        <div>
            <form className={classes.form} onSubmit={props.submit} >
                <input className={classes.form__search} type="text" name='city' placeholder="Введите город"  />
                <button className={classes.form__btn}><MdSearch/></button>
            </form>
        </div>

    )

}




export default Form;