import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import Field from '../Fields/Field';



const Main = () => {
    const [myName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState([]);

    const addData = () => {
        setData([...data, {
            myName, email
        }])
    }

    return (
        <div className='form'>
            <Stack direction="row" spacing={2}>
                <TextField value={myName} onChange={(e) => setName(e.target.myName)} id="outlined-basic" label="Name" variant="outlined" />
                <TextField value={email} onChange={(e) => setEmail(e.target.email)} id="outlined-basic" label="Email" variant="outlined" />
                <Button onClick={addData} variant="contained" color="success" >
                    <AddIcon />
                </Button>
            </Stack>
            <div className='data'>
                <div className='data-value'>
                    <h4>Name</h4>
                    <h4>Email</h4>
                    <h4>Remove</h4>
                </div>
                {
                    data.map((element, index) => {
                        return (
                            <Field  key={index} myName={element.myName} email={element.email} index={index} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Main