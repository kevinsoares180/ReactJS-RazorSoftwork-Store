
import Footer from './Components/Footer'
import GamePage from './Components/GamePage'
import Games from './Components/Games'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch as Switcher, useParams, useRouteMatch
} from 'react-router-dom'
import ExactPath from './Components/ExactPath'
import Error404 from './Components/Error404'
import 'bootstrap/dist/css/bootstrap.min.css'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ID: '',
    }

  }

  handleToUpdate = (id) => {
    this.setState({ ID: id })
    console.log(this.state.id + "set")
  }
  render() {
    return (
      <>
        <Router>
        <Navbar />
          <Switcher>
            <Route exact path="/">
              <Slider />
              <Games handleToUpdate={this.handleToUpdate} />
            </Route>
            <Route path={`/games/appid/:idroute`}>
              <ExactPath/>
            </Route>
          <Route>
            <Error404/>
          </Route>
          </Switcher>
          <Footer />
        </Router>
      </>
    )
  }
}
