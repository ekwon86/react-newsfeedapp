const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');
const $ = require('jquery');
require('./css/index.css');

//React Router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <MainComponent />
      </div>
      // <Router>
      //   <Switch>
      //     <Route exact={true} path={'/'} component={MainComponent} />
      //   </Switch>
      // </Router>
    )
  }
}

class MainComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imgUrl: '',
      articles: []
    }
  }

  render(){
    return (
      <h1>Star Wars</h1>
    )
  }

  componentWillMount(){
    console.log('componentWillMount');
  }

  componentDidMount(){
    console.log('componentDidMount');
    //any grabbing of external data
    $.ajax({
      url: 'https://swapi.co/api/films',
      dataType: 'json',
      jsonpCallback: 'callback',
      type: 'GET',
      success: function(data){
        console.log(data);
      },
      // error: function(error){
      //   console.log(error);
      // }
    })
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
