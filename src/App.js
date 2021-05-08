import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Details from "./components/Details";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
	return (<>
      <Navbar />
			<Router>
				<Switch>
					<Route exact path="/">
            <Home/>
					</Route>
          <Route path="/products">
            <Products/>
					</Route>
          <Route path="/cart">
            <Cart/>
					</Route>
          <Route path="/details/:id">
            <Details/>
					</Route>
          <Route path="/contact">
            <Contact/>
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
