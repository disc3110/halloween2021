import { Route, Switch } from "react-router-dom"
import './styles/App.css';
import Header from './components/Header';
import Homepage from "./pages/Homepage";
import Reserve from "./pages/Reserve";
import Contact from "./pages/Contact";
import Rules from "./pages/Rules";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
      <Switch>
        <Route path="/reserve">
          <Reserve />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/rules">
          <Rules />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
