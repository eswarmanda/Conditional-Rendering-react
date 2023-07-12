import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  renderAuthButton = () => {
    const {isLoggedIn} = this.state

    if (isLoggedIn === true) {
      return <button type="submit">Logout</button>
    }
    return <button type="submit">Login</button>
  }

  render() {
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default App
