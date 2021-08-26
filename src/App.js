import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Homepage } from './components/homepage/homepage.component';

const HomePage = () =>
    <div>
        <Homepage/>
    </div>

const TopicsList = (props) =>
    <div>
        <button onClick={() => props.history.push('/topics/1')}> Topics </button>
        <h1> TOPIC LIST</h1>
    </div>

const TopicDetail = (props) =>
    <div>
        <h1> TOPIC DETAIL: {props.match.params.topicId}</h1>
    </div>

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Route exact path="/" component={ Homepage } />
            <Route exact path="/topics" component={ TopicsList } />
            <Route exact path="/topics/:topicId" component={ TopicDetail } />
        </BrowserRouter>
    </div>
  );
}

export default App;
