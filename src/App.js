import logo from "./logo.svg";
import "./App.css";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Story from "./Components/Story";
function App() {
  return (
    <BrowserRouter className="App">
      <nav>
        <div className="row px-3 py-3">
          <Link className="col-md-auto text-light" to="/">
            Home
          </Link>
          <Link className="col-md-auto text-light" to="/story">
            Story Maker
          </Link>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/story" component={Story}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
