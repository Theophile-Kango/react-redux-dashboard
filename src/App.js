import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Table from './component/Table';
import NewUser from './component/NewUser';
import EditUser from './component/EditUser'

function App() {
  return (
    <Router>
      <div className="container mt-2  border border-secondary pb-2">
        <h1>Dashboard</h1>
        <Switch>
          <Route exact path={["/", "/dashboard"]} component={Table} />
          <Route path="/new-user" component={NewUser} />
          <Route path="/edit-user/:id" component={EditUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
