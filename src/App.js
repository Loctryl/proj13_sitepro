import { React, Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import News from './pages/news';
import AboutUs from './pages/aboutus';
import MainTeam from './pages/mainteam';
import Player from './pages/player';
import Team from './pages/team';
import Shop from './pages/shop';
import MainNews from './pages/mainnews';
import Home from './pages/home';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news: [],
      players: [],
      teams: [],
      staff: []
    }
  }

  componentDidMount = async () => {

    const reponse1 = await fetch('http://localhost:1337/api/news?populate=*', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const fetchNews = await reponse1.json()

    const reponse2 = await fetch('http://localhost:1337/api/players', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const fetchPlayers = await reponse2.json()

    const reponse3 = await fetch('http://localhost:1337/api/teams', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const fetchTeams = await reponse3.json()

    const reponse4 = await fetch('http://localhost:1337/api/staffs?populate=*', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const fetchStaff = await reponse4.json()

    this.setState({
      news: fetchNews,
      players: fetchPlayers,
      teams: fetchTeams,
      staff: fetchStaff
    })
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home news={this.state.news} staff={this.state.staff}/>}  />
          <Route exact path='/mainnews' element={<MainNews news={this.state.news}/>}/>
          <Route path='/mainnews/news' element={<News news={this.state.news}/>}/>
          <Route exact path='/aboutus' element={<AboutUs staff={this.state.staff}/>}/>
          <Route exact path='/mainteam' element={<MainTeam/>}/>
          <Route path='/mainteam/team/player' element={<Player/>}/>
          <Route path='/mainteam/team' element={<Team/>}/>
          <Route exact path='/shop' element={<Shop/>}/>
        </Routes>
      </Router>
    )
  }
}
