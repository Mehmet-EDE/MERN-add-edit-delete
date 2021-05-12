import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar'
import EmployeeList from './components/EmployeeList'
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

function App() {
  return (    
    <div className="container-fluid bg-dark" >
      <Router>
        <Navbar />
        <br />
        <Route path='/' exact component={EmployeeList} ></Route>
        <br />
        <Route path='/create' exact component={AddEmployee} ></Route>
        <br />
        <Route path='/edit/:id' exact component={EditEmployee} ></Route>
      </Router>
    </div>
  );
}

export default App;
