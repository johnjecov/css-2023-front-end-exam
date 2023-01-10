import React from 'react'
import { Button } from '@mui/material'
import { theme } from '../App.js'

function CustomButton() {
    return (
        <Button
        onClick={()=>customFunction()}
        >Hello World</Button>
    )
}

function customFunction() {
    console.log(theme.palette.accents.orange);
}

export default CustomButton