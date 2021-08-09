import logo from "./logo.svg";
import "./App.css";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Story from "./Components/Story";
function App() {
  return (
    <BrowserRouter className="App">
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/story">Story Maker</Link>
        </li>
      </nav>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/story" component={Story}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
