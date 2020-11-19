import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props) => (
  <div>
    <Link to="/">Hats Page {`${props.match.params.productId}`}</Link>
    <h1>HatsPage</h1>
    <button onClick={() => props.history.push("/")}>Home Page</button>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
