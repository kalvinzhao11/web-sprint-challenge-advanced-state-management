import React from 'react'
import { connect } from "react-redux";


const Smurf = ({smurfData}) => {
    return (
        <>
        {smurfData.map(smurf => {
            return <p>{smurf.name}</p>
        })}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        smurfData: state.smurfData
    }
}

export default connect(mapStateToProps, {})(Smurf)