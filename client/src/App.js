import React from 'react'
import './App.css';
import Popular from './components/Popular'
import Battle from './components/Battle'


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      popular: false,
      battle: false

    }
  }

  loadPopular() {
    this.setState({
      popular: !this.state.popular
    })
  }
  loadBattle() {
    this.setState({
      battle: !this.state.battle
    })
  }

  render() {
    return (
      <div className='container'>

        <button onClick={() => this.loadPopular()}>Popular</button>
        {this.state.popular === true ? <Popular /> : null}
        <button onClick={() => this.loadBattle()}>Battle</button>
        {this.state.battle === true ? <Battle /> : null}

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


