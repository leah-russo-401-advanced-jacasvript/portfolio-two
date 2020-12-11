import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/">Home</Link></li>
                <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/about">About</Link></li>
                <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/projects">Projects</Link></li>
                
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Nav;