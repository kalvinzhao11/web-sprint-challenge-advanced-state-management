import React, { useState } from 'react'
import { connect } from "react-redux";
import {postSMURF} from '../store/actions'

const SmurfForm = (props) => {
    const newSmurf = {
        name: '',
        age: '',
        height: '',
    }
    const [smurf, setSmurf] = useState(newSmurf)

    const submitHandler = (e) => {
        e.preventDefault()
        if (!smurf.name || !smurf.age || !smurf.height) return
        const smurtMaker = {
            name: smurf.name,
            age: smurf.age,
            height: smurf.height+'cm',
            id: Date.now()
        }
        props.postSMURF(smurtMaker)
        setSmurf(newSmurf)
    }

    return (
        <>
        <form onSubmit={submitHandler}>
            <label>name: </label>
            <input
                name='name'
                value={smurf.name}
                onChange={(e) => setSmurf({...smurf, name: e.target.value })}
            ></input>

            <label>age: </label>
            <input
                name='age'
                value={smurf.age}
                onChange={(e) => setSmurf({...smurf, age: e.target.value })}
            ></input>
            
            <label>height: </label>
            <input
                name='height'
                value={smurf.height}
                onChange={(e) => setSmurf({...smurf, height: e.target.value })}
            ></input>

            <button>submit</button>
        </form>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfData: state.smurfData,
    }
}

export default connect(mapStateToProps, {postSMURF})(SmurfForm)