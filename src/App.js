import { Route, Switch } from "react-router-dom"
import './styles/App.css';
import Header from './components/Header';
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
