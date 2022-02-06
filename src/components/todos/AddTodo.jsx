import React from 'react';

import { TextField, Button } from '@material-ui/core';
import { Send } from '@material-ui/icons';




const AddTodo = ({ todo, setTodo }) => {
    

    return ( 
        <>
            <form noValidate autoComplete="off" className="" onSubmit = "">
                <TextField
                    id="enter-todo"
                    label="enterToDo"
                    variant="outlined"
                    autoFocus
                    fullWidth
                    value = ""
                   
                />
                <Button variant="contained" color="primary" className = "" type="submit">
                    <Send/>
                </Button>
            </form>
        </>
     );
}
 
export default AddTodo;