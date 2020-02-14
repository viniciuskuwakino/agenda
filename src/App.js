import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Login from './components/login/login';
import Calendar from './components/calendar/calendar'

// import './App.css'
import './global.css'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/calendar" component={Calendar}/>
      </Switch>
    </div>
  )
}


export default App;
