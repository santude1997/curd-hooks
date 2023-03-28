import React from 'react'
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Field = ({ myName, email, index }) => {
    console.log(myName);
    return (
        <div className='data-value'>
            <h4>{myName}</h4>
            <h4>{email}</h4>
            <Button variant="outlined" color="error">
                <DeleteForeverIcon />
            </Button>
        </div>
    )
}

export default Field