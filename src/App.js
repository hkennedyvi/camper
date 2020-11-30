import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import StorePage from './pages/StorePage';
import FaqPage from './pages/FaqPage';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/store">
         <StorePage />
        </Route>
        <Route exact path="/faq">
         <FaqPage />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
