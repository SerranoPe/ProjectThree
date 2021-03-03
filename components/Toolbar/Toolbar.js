import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {render} from "react-dom";

const Form = () => <div>ToDo</div>;
const Contact = () => <div>Contact</div>;

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to={matchMedia.url + "/Form"}>TO DO  |</Link>
        </li>
        <li>
          <Link to={matchMedia.url + "/Contact"}> CONTACT US</Link>
        </li>

      </ul>
      <hr />
      <Route path={matchMedia.url + "/Form"} 
      render={props => <div>ToDo</div>}/>
      <Route path={matchMedia.url + "/Contact"} 
      render={props => <div>Contact</div>}/>
    </div>
  </BrowserRouter>
);
export default App;
