import logo from './logo.svg';
import {React, Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/menu/navbar/navbar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news : [],
      partners : [],
      players : [],
      sponsors : [],
      teams : []
    }
  }

  componentDidMount = async () => {
    let datas = null
    let reponse = null

    reponse = await fetch('http://localhost:1337/api/news',{method:'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    datas = await reponse.json()
    this.setState({news:datas, loading:false})

    reponse = await fetch('http://localhost:1337/api/partners',{method:'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    datas = await reponse.json()
    this.setState({partners:datas, loading:false})

    reponse = await fetch('http://localhost:1337/api/players',{method:'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    datas = await reponse.json()
    this.setState({players:datas, loading:false})

    reponse = await fetch('http://localhost:1337/api/sponsors',{method:'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    datas = await reponse.json()
    this.setState({sponsors:datas, loading:false})

    reponse = await fetch('http://localhost:1337/api/teams',{method:'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    datas = await reponse.json()
    this.setState({teams:datas, loading:false})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
