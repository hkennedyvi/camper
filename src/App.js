import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Store from './pages/Store';
import Faq from './pages/Faq';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/store">
         <Store />
        </Route>
        <Route exact path="/faq">
         <Faq />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
