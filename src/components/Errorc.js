import React from 'react'
import { Link, Redirect } from 'react-router-dom'

function Errorc(){
    return (
        <div>
            <Redirect to="/" />
        </div>
    )
}

export default Errorc