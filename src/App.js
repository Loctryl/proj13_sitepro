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

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news: [],
      partners: [],
      players: [],
      sponsors: [],
      teams: []
    }
  }

  componentDidMount = async () => {
    let 
      reponse = null,
      fetchNews = null,
      fetchPartners = null,
      fetchPlayers = null,
      fetchSponsors = null,
      fetchTeams = null
    ;

    reponse = await fetch('http://localhost:1337/api/news', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    fetchNews = await reponse.json()

    reponse = await fetch('http://localhost:1337/api/partners', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    fetchPartners = await reponse.json()

    reponse = await fetch('http://localhost:1337/api/players', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    fetchPlayers = await reponse.json()

    reponse = await fetch('http://localhost:1337/api/sponsors', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    fetchSponsors = await reponse.json()

    reponse = await fetch('http://localhost:1337/api/teams', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    fetchTeams = await reponse.json()

    this.setState({ 
      news: fetchNews, 
      partners: fetchPartners, 
      players: fetchPlayers,
      sponsors: fetchSponsors,
      teams: fetchTeams, 
      loading: false })
  }

  render(){
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/mainnews' element={<MainNews/>}/>
          <Route exact path='/mainnews/news' element={<News/>}/>
          <Route exact path='/aboutus' element={<AboutUs/>}/>
          <Route exact path='/mainteam' element={<MainTeam/>}/>
          <Route exact path='/mainteam/team/player' element={<Player/>}/>
          <Route exact path='/mainteam/team' element={<Team/>}/>
          <Route exact path='/shop' element={<Shop/>}/>
        </Routes>
      </Router>
    )
  }
}

export default App;
