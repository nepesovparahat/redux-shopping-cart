import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/products"><Products /></Route>
          <Route path="/cart"><Cart /></Route>
          <Route path="/details/:id"><Details /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
