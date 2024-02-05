
import { useState } from 'react'

import classes from './NewPost.module.css'


function NewPost() {
    useState('');
    let enteredBody = '';

    function changeBodyHandler(event) {
        enteredBody = event.target.value;
    };
    
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor='body'>Text</label>
                <textarea id='body' required rows={3} onChange={changeBodyHandler}></textarea>
            </p>
            <p>{enteredBody}</p>
            <p>
                <label htmlFor='name'>Your Name</label>
                <textarea type='text' id='name required'></textarea>
            </p>
        </form>
    )

}

export default NewPost;