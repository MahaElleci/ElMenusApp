import { BrowserRouter as Router,  Switch,
  Route } from 'react-router-dom';
import LaunchPage from "./pages/LaunchPage"; 
import LoginPage from "./pages/LoginPage"; 
import AdminPage from './pages/AdminPage'; 
import MenuPage from './pages/MenuPage';
function App() {
  return (
    <div className="App"> 
    <Router>
       <Switch>
          <Route exact path="/">
            <LaunchPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route> 
          <Route path="/adminPage">
            <AdminPage />
          </Route> 
          <Route path="/menuPage">
            <MenuPage />
          </Route> 
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
