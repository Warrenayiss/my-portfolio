import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Post from './components/Post'
import SinglePost from './components/SinglePost'
import NavBar from './components/NavBar'



function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route component={Home} patch="/" exact />
        <Route component={About} patch="/about" />
        <Route component={Project} patch="/project" />
        <Route component={Post} patch="/post" />
        <Route component={SinglePost} patch="/post/:slug" />
      </Switch>
    </Router>
  )
}

export default App;
