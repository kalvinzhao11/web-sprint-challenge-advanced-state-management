import React, { useState } from 'react'
import { connect } from "react-redux";
import {postSMURF} from '../store/actions'

const SmurfForm = (props) => {
    const newSmurf = {
        name: '',
        age: null,
        height: null,
    }
    const [smurf, setSmurt] = useState(newSmurf)

    const submitHandler = (e) => {
        e.preventDefault()
        if (!smurf.name || !smurf.age || !smurf.height) return
        const smurtMaker = {
            name: smurf.name,
            age: smurf.age,
            height: smurf.height,
            id: Date.now()
        }
        console.log(postSMURF(smurtMaker))
    }

    return (
        <>
        <form onSubmit={submitHandler}>
            <label>name: </label>
            <input
                name='name'
                value={smurf.name}
                onChange={(e) => setSmurt({...smurf, name: e.target.value })}
            ></input>

            <label>age: </label>
            <input
                name='age'
                value={smurf.age}
                onChange={(e) => setSmurt({...smurf, age: e.target.value })}
            ></input>
            
            <label>height: </label>
            <input
                name='height'
                value={smurf.height}
                onChange={(e) => setSmurt({...smurf, height: e.target.value })}
            ></input>

            <button>submit</button>
        </form>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps, {postSMURF})(SmurfForm)