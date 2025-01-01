import './App.css';
import AllMusics from './components/AllMusics/index.jsx';
import Favorites from './components/Favorites/index.jsx';
import NavigationBar from './components/NavigationBar/index.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className='appContainer'>
      <NavigationBar/>
      <Routes>
        <Route path='/favorites' element = {<Favorites/>} />
        <Route path='/' element = {<AllMusics/>}/>
      </Routes>
    </div>
  )
} 

export default App
