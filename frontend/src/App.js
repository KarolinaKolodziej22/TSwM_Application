import {Container} from 'react-bootstrap'
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import DoctorScreen from './screens/DoctorScreen';
import {Switch} from 'react-router-dom'

function App() {
  return (
    <Router> 
      <Header/>
      <main className="py-3">
        
          <Routes>
          <Route path='/home' element={<HomeScreen/>} exact/>
          <Route path='/doctor/:id' element={<DoctorScreen/>}/>
          </Routes>
        
      </main>
      <Footer/>
    </Router>
  );
}

export default App; 

/* import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen';
import DoctorScreen from "./screens/DoctorScreen";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

 export default function App() 
 {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/home">HomeScreen</Link>
          </li>
          <li>
            <Link to="/doctor/:id">DoctorScreen</Link>
          </li>

        </ul>

        <hr />
        
        <Routes>
          <Route path='/home' element={<HomeScreen/>} exact/>
          <Route path='/doctor/:id' element={<DoctorScreen/>}/>
          </Routes>
         
       
      </div>
    </Router>
  )
}
 */