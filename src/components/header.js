import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {

  return (
<>
  
    <header class="masthead">
            <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center">
                    <h1 class="mx-auto my-0 text-uppercase">Leah Grace Russo</h1>
                    <h2 class="text-white-50 mx-auto mt-2 mb-5">Full Stack Software Engineer <br/>
                    Front-end: React/JavaScript <br/>
                    Back-end: Node/express
                    </h2>
                   
                    
                </div>
            </div>
        </header>

    </>
  )
}

export default Header;