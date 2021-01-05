import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
       
      <HeaderComponent/>
        <div className="container">
          <Switch>
            <Route path="/"  exact component={ListEmployeeComponent}></Route>
            <Route path="/getAll" component={ListEmployeeComponent}></Route>
            <Route path="/save" component={CreateEmployeeComponent}></Route>
            <Route path="/update/:id" component={UpdateEmployeeComponent}></Route>
           
           </Switch>
        </div>
      <FooterComponent/>
      
      </Router>  
    </div>
    
    
    
  );
  let cors = require('cors')
    App.use(cors())
}

export default App;
