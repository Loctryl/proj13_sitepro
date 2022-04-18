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
      players: [],
      teams: []
    }
  }

  componentDidMount = async () => {

    const reponse1 = await fetch('http://localhost:1337/api/news?populate=*', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const fetchNews = await reponse1.json()

    const reponse3 = await fetch('http://localhost:1337/api/players', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const fetchPlayers = await reponse3.json()

    const reponse5 = await fetch('http://localhost:1337/api/teams', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const fetchTeams = await reponse5.json()

    this.setState({
      news: fetchNews,
      players: fetchPlayers,
      teams: fetchTeams
    })
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home partners={this.state.partners} sponsors={this.state.sponsors} 
          />} />
          <Route exact path='/mainnews' element={<MainNews news={this.state.news} partners={this.state.partners} sponsors={this.state.sponsors}
          />}/>
          <Route path='/mainnews/news' element={<News news={this.state.news} partners={this.state.partners} sponsors={this.state.sponsors}/>}/>
          <Route exact path='/aboutus' element={<AboutUs partners={this.state.partners} sponsors={this.state.sponsors}/>}/>
          <Route exact path='/mainteam' element={<MainTeam partners={this.state.partners} sponsors={this.state.sponsors}/>}/>
          <Route path='/mainteam/team/player' element={<Player partners={this.state.partners} sponsors={this.state.sponsors}/>}/>
          <Route path='/mainteam/team' element={<Team partners={this.state.partners} sponsors={this.state.sponsors}/>}/>
          <Route exact path='/shop' element={<Shop partners={this.state.partners} sponsors={this.state.sponsors}/>}/>
        </Routes>
      </Router>
    )
  }
}

export default App;
