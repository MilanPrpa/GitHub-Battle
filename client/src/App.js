import React from 'react'
import './App.css';
import Popular from './components/Popular'
import Battle from './components/Battle'


export default class App extends React.Component {

  render() {
    return (
      <div className='container'>

        <Battle />

      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <h3>Hello</h3>

//     </div>
//   );
// }


