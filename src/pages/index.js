import * as React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/header.js'
import Footer from '../components/footer.js';
import SignUp from "../components/singup.js";
import About from '../components/about.js';
import Projects from '../components/projects.js';
import Contact from '../components/Contact.js';
import Nav from '../components/nav.js';



// markup
const IndexPage = () => {
  return (
      <BrowserRouter>
      <Nav/>
      <Switch>
     



        <Route exact path='/' >
      <Header/>
        </Route>

        <Route path='/about'>
        <About/>
        </Route>

        <Route path='/projects'>
        <Projects/>
        </Route>
      

      </Switch>
      <Contact/>
      <Footer />
      </BrowserRouter>
  )
}

export default IndexPage
