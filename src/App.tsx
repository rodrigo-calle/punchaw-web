import './App.css';

import {
  BrowserRouter as Router,  
  Routes,
  Route,
} from 'react-router-dom';
import Nav from './components/ui/nav/Nav';
import MainPage from './pages/mainPage/MainPage';
import DashboardPage from './pages/dashboardPage/DasboardPage';
import RegisterHabitPage from './pages/registerHabitPage/RegisterHabitPage';
import HabitListPage from './pages/habitListPage/HabitListPage';
import TableHabitPage from './pages/tableHabitPage/TableHabitPage';
function App() {
  console.log('this is called')
  return (
    <div className='app-page'>
        <Router>
          <div className="nav-container">
            <Nav />
          </div>      
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/register-habit' element={<RegisterHabitPage />} />
            <Route path='/habits'element={<HabitListPage />} />
            <Route path='/habits/:id' element={<TableHabitPage />} />
          </Routes>
        </Router>
    </div>

  );
}

export default App;
