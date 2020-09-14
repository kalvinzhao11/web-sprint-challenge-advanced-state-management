import React, { Component, useEffect } from "react";
import {connect} from 'react-redux'
import {fetchSMURF, postSMURF} from '../store/actions'
import Smurf from './Smurf'
import "./App.css";
import SmurfForm from './SmurfForm'


const App = ({fetchSMURF, errorMessage, loading, smurfData}) => {

  useEffect(()=>{
    fetchSMURF()
  }, [postSMURF])

    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        {!errorMessage ? (!loading ? <Smurf /> : <div>... loading</div>) : <div>{errorMessage}</div>}
        <SmurfForm />
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
}

const mapsToStateProps = (state) => {
  return {
    smurfData: state.smurfData,
    loading: state.loading,
    errorMessage: state.errorMessage
  }
}

export default connect(mapsToStateProps, {fetchSMURF, postSMURF})(App);


// class App extends Component {
//   constructor(){
//     super()
//   }
//   componentWilldMount(){
//     this.props.fetchSMURF()
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>SMURFS! W/Redux</h1>
//         {!this.props.errorMessage ? (!this.props.loading ? <Smurf /> : <div>... loading</div>) : <div>{this.props.errorMessage}</div>}
//         <div>Welcome to your state management version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>
//       </div>
//     );
//   }
// }

// useEffect(()=>{
//   mapsToStateProps()
// },[])
// const mapsToStateProps = (state) => {
//   return {
//     smurfData: state.smurfData,
//     loading: state.loading,
//     errorMessage: state.errorMessage
//   }
// }

// export default connect(mapsToStateProps, {fetchSMURF})(App);
