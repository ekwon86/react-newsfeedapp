const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');
require('./css/index.css');

//React Router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = React.createClass({
  render: function(){
    return (
      <Router>
        <Switch>
          <Route exact={true} path={'/'} component={MainComponent} />
        </Switch>
      </Router>
    )
  }
});

const MainComponent = React.createClass({
  getInitialState: function(){
    return {
      articles: []
    }
  },
  render: function(){
    return (
      <h1>Hello!</h1>
    )
  },
  componentWillMount: function(){
    console.log('componentWillMount');
  },
  componentDidMount: function(){
    console.log('componentDidMount');
    //any grabbing of external data
    axios({
      method: 'get',
      url: 'https://newsapi.org/#apiArticles'
    }).then(function(response){
      console.log(response);
    });
  }
});


ReactDOM.render(<App />, document.getElementById('app'));
