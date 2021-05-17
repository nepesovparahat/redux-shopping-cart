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
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={Cart} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
